import { css } from '@emotion/react';
import { useRef, useState } from 'react';
import { RxDragHandleDots2 } from 'react-icons/rx';
import { useDispatch, useSelector } from 'react-redux';
import {
  insertQuestion,
  updateQuestion,
  updateQuestions,
} from '../../slice/questionSlice';
import { RootState } from '../../store';
import { Input } from '../Input';
import { QuestionOption } from '../QuestionOption';
import { QuestionTypeSelectBox } from '../QuestionTypeSelectBox';

export const QuestionArea = () => {
  const [isFocused, setIsFocused] = useState(true);
  const formRef = useRef<HTMLFormElement>(null);
  const questions = useSelector((state: RootState) => state.questions);
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
    const tempQuestions = [...questions];
    if (!dragItem.current && dragItem.current !== 0) return;
    const dragItemContent = tempQuestions[dragItem.current];
    if (!dragItemContent) return;
    tempQuestions.splice(dragItem.current, 1);
    tempQuestions.splice(dragOverItem.current ?? 0, 0, dragItemContent);
    dragItem.current = null;
    dragOverItem.current = null;
    dispatch(updateQuestions(tempQuestions));
  };

  const copyQuestion = (questionIndex: number) => {
    const { current: form } = formRef;
    if (!form) return;
    const formData = new FormData(form);
    const contents =
      questions[questionIndex]?.contents ||
      [].map((_, index) => formData.get(`contents-${index + 1}`) as string);
    const payload = {
      id: 1,
      type: questions[questionIndex]?.type || 'multiple-choice-questions',
      title: formData.get('title') as string,
      contents: contents ?? [],
      isRequired: formData.get('is-required') === 'on',
    };
    dispatch(insertQuestion(payload));
  };

  return (
    <>
      {questions.map((item, index) => (
        <form
          key={`${item.title}-${index - 0}`}
          ref={formRef}
          css={css`
            height: auto;
            border: 1px solid #dadce0;
            border-radius: 8px;
            padding: 4px 20px 0 0;
            position: relative;
            box-sizing: border-box;
            box-shadow: ${isFocused && '0 3px 3px rgba(0, 0, 0, 0.12)'},
              ${isFocused && '0 1px 1px rgba(0, 0, 0, 0.14)'},
              ${isFocused && '0 1px 2px rgba(0, 0, 0, 0.2)'};
            background: #fff;
            margin-bottom: 20px;
          `}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          onSubmit={(e) => {
            e.preventDefault();
            copyQuestion(index);
          }}
          draggable
          onDragStart={() => dragStart(index)}
          onDragEnter={() => dragEnter(index)}
          onDragEnd={drop}
          onDragOver={(e) => e.preventDefault()}
        >
          <div
            css={css`
              width: 100%;
              height: auto;
              display: flex;
              justify-content: center;
              padding-left: 20px;
              cursor: move;
            `}
          >
            <RxDragHandleDots2
              css={css`
                width: 24px;
                height: 24px;
                color: #dadce0;
                transform: rotate(90deg);
              `}
            />
          </div>
          {isFocused && (
            <div
              css={css`
                position: absolute;
                left: -1px;
                top: 0;
                width: 6px;
                background: #4285f4;
                border-radius: 8px 0 0 8px;
              `}
            />
          )}
          <div
            css={css`
              height: 50px;
              display: flex;
              justify-content: space-between;
              margin-bottom: 16px;
              padding-left: 20px;
            `}
          >
            <div
              css={css`
                width: 446px;
              `}
            >
              <Input
                placeholder="질문"
                name="title"
                inputStyle={css`
                  font-size: 11pt;
                  padding: 16px;
                  &:focus {
                    background-color: #f1f3f4;
                    &:hover {
                      background-color: #0000001a;
                    }
                  }
                `}
                onChange={(e) => {
                  dispatch(
                    updateQuestion({ id: item.id, title: e.target.value }),
                  );
                }}
                value={item.title}
                // defaultValue={item.title}
              />
            </div>
            <QuestionTypeSelectBox questionIndex={index} />
          </div>
          <QuestionOption questionIndex={index} />
        </form>
      ))}
    </>
  );
};
