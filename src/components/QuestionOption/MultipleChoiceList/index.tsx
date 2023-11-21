import { css } from '@emotion/react';
import { useRef } from 'react';
import { RxDragHandleDots2 } from 'react-icons/rx';
import { useDispatch, useSelector } from 'react-redux';
import { updateQuestion } from '../../../slice/questionSlice';
import { RootState } from '../../../store';
import { OptionDeleteButton } from '../../Button/OptionDeleteButton';
import { IndexIcon } from '../../Icon/IndexIcon';
import { Input } from '../../Input';

export const MultipleChoiceList = ({
  questionIndex,
}: {
  questionIndex: number;
}) => {
  const question = useSelector(
    (state: RootState) => state.questions[questionIndex],
  );
  const questionOptions = question?.contents || [];
  const id = question?.id || 1;
  const dispatch = useDispatch();
  const dragItem = useRef<number | null>(null);
  const dragOverItem = useRef<number | null>(null);

  const dragStart = (index: number) => {
    dragItem.current = index;
  };

  const dragEnter = (index: number) => {
    dragOverItem.current = index;
  };

  const drop = () => {
    const tempQuestionOptions = [...questionOptions];
    if (!dragItem.current && dragItem.current !== 0) return;
    const dragItemContent = tempQuestionOptions[dragItem.current];
    if (!dragItemContent) return;
    tempQuestionOptions.splice(dragItem.current, 1);
    tempQuestionOptions.splice(dragOverItem.current ?? 0, 0, dragItemContent);
    dragItem.current = null;
    dragOverItem.current = null;
    dispatch(updateQuestion({ id, options: tempQuestionOptions }));
  };

  return (
    <div
      css={css`
        height: auto;
      `}
    >
      {questionOptions.map((option, index) => {
        const isOthers = option === '기타...';
        return (
          <label
            key={`${option}-${index - 0}`}
            htmlFor={`contents-${index + 1}`}
            css={css`
              height: auto;
              display: flex;
              align-items: center;
              margin-bottom: 16px;
              padding-left: 4px;
              svg {
                width: 24px;
                height: 24px;
                color: #dadce0;
              }
            `}
            draggable
            onDragStart={() => dragStart(index)}
            onDragEnter={() => dragEnter(index)}
            onDragEnd={(e) => {
              e.stopPropagation();
              drop();
            }}
            onDragOver={(e) => e.preventDefault()}
          >
            <RxDragHandleDots2
              css={css`
                cursor: move;
              `}
            />

            <IndexIcon questionIndex={questionIndex} index={index} />

            <Input
              disabled={isOthers}
              defaultValue={option ?? `옵션 ${index + 1}`}
              name={`contents-${index + 1}`}
              inputStyle={css`
                height: 30px;
                padding: 1px 1px 1px 0;
                font-size: 11pt;
                border-bottom: none;
                :hover {
                  border-bottom: 1px ${isOthers ? 'dotted' : 'solid'} #dadce0;
                }
                background: ${isOthers && '#fff'};
                color: ${isOthers && '#70757a'};
              `}
            />
            {index === 0 ? (
              <div
                css={css`
                  width: 56px;
                `}
              />
            ) : (
              <OptionDeleteButton questionIndex={questionIndex} index={index} />
            )}
          </label>
        );
      })}
    </div>
  );
};
