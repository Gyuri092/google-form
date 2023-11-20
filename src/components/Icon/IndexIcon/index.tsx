import { css } from '@emotion/react';
import { BiCircle } from 'react-icons/bi';
import { FaRegSquare } from 'react-icons/fa';
import { useSelector } from 'react-redux';
import { RootState } from '../../../store';

interface Props {
  questionIndex: number;
  index: number;
}

export const IndexIcon = (props: Props) => {
  const question = useSelector(
    (state: RootState) => state.questions[props.questionIndex],
  );
  const index = props.index ?? 0;
  switch (question?.type) {
    case 'multiple-choice-questions':
      return (
        <BiCircle
          css={css`
            width: 24px;
            height: 24px;
            color: #dadce0;
            margin-right: 8px;
          `}
        />
      );

    case 'check-box':
      return (
        <FaRegSquare
          css={css`
            width: 24px;
            height: 24px;
            color: #dadce0;
            margin-right: 8px;
          `}
        />
      );
    case 'drop-down':
      return (
        <span
          css={css`
            width: auto;
            margin-right: 10px;
          `}
        >
          {index + 1}
        </span>
      );
    default:
      return null;
  }
};
