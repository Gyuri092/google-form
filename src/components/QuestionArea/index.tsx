import { css } from '@emotion/react';
import { useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Questions, insertQuestion } from '../../slice/questionSlice';
import { Input } from '../Input';
import { QuestionOption } from '../QuestionOption';
import { QuestionTypeSelectBox } from '../QuestionTypeSelectBox';
import { RootState } from '../../store';

export const QuestionArea = ({
  value,
  questionIndex,
}: {
  value: Questions;
  questionIndex: number;
}) => {
  const [isFocused, setIsFocused] = useState(true);
  const formRef = useRef<HTMLFormElement>(null);
  const questionType = useSelector(
    (state: RootState) => state.questionType.value,
  );
  const questionOptions = useSelector(
    (state: RootState) => state.questions[questionIndex]?.contents || [],
  );
  const dispatch = useDispatch();

  const copyQuestion = () => {
    const { current: form } = formRef;
    if (!form) return;
    const formData = new FormData(form);
    const contents = questionOptions.map(
      (_, index) => formData.get(`contents-${index + 1}`) as string,
    );

    const payload = {
      id: questionIndex,
      type: questionType,
      title: formData.get('title') as string,
      contents: contents ?? [],
      isRequired: formData.get('is-required') === 'on',
    };
    dispatch(insertQuestion(payload));
  };

  return (
    <form
      ref={formRef}
      css={css`
        height: auto;
        border: 1px solid #dadce0;
        border-radius: 8px;
        padding: 20px 20px 0 0;
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
        copyQuestion();
      }}
    >
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
            defaultValue={value.title}
          />
        </div>
        <QuestionTypeSelectBox />
      </div>
      <QuestionOption questionIndex={questionIndex} />
    </form>
  );
};
