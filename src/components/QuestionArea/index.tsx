import { css } from '@emotion/react';
import { useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import { Questions } from '../../slice/questionSlice';
import { Input } from '../Input';
import { QuestionOption } from '../QuestionOption';
import { QuestionTypeSelectBox } from '../QuestionTypeSelectBox';
import { RootState } from '../../store';

interface Props {
  key: string;
  value: Questions;
}

export const QuestionArea = (props: Props) => {
  const [isFocused, setIsFocused] = useState(true);
  const formRef = useRef<HTMLFormElement>(null);
  const questionType = useSelector(
    (state: RootState) => state.questionType.value,
  );

  const submitForm = () => {
    const { current: form } = formRef;
    if (!form) return;
    const formData = new FormData(form);
    const payload = {
      type: questionType,
      title: formData.get('title'),
      contents: formData.get('contents') ?? [],
      isRequired: formData.get('is-required') === 'on',
    };
    console.log(payload);
  };

  return (
    <form
      key={props.key}
      ref={formRef}
      css={css`
        height: auto;
        border: 1px solid #dadce0;
        border-radius: 8px;
        padding: 20px;
        position: relative;
        box-shadow: ${isFocused && '0 3px 3px rgba(0, 0, 0, 0.12)'},
          ${isFocused && '0 1px 1px rgba(0, 0, 0, 0.14)'},
          ${isFocused && '0 1px 2px rgba(0, 0, 0, 0.2)'};
      `}
      onFocus={() => setIsFocused(true)}
      onBlur={() => setIsFocused(false)}
      onSubmit={(e) => {
        e.preventDefault();
        submitForm();
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
            defaultValue={props.value.title}
          />
        </div>
        <QuestionTypeSelectBox />
      </div>
      <QuestionOption />
    </form>
  );
};
