import { css } from '@emotion/react';

export const WritingAnswer = (props: { questionType: string }) => {
  return (
    <input
      css={css`
        width: ${props.questionType === 'long-sentence' ? '85%' : '50%'};
        height: 30px;
        padding: 1px 1px 1px 0;
        margin-bottom: 24px;
        border-bottom: 1px dotted #70757a;
        font-size: 14px;
        font-weight: 400;
        letter-spacing: 0.2px;
        line-height: 20px;
        color: #70757a;
        background: #fff;
      `}
      disabled
      placeholder={
        props.questionType === 'long-sentence'
          ? '장문형 텍스트'
          : '단답형 텍스트'
      }
    />
  );
};
