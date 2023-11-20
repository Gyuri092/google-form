import { css } from '@emotion/react';
import { LiaChevronCircleDownSolid } from 'react-icons/lia';
import { GrTextAlignFull } from 'react-icons/gr';
import {
  MdOutlineCheckBox,
  MdOutlineRadioButtonChecked,
  MdOutlineShortText,
} from 'react-icons/md';
import { useSelector } from 'react-redux';
import { RootState } from '../../../store';

export const SelectBoxIcon = ({ questionIndex }: { questionIndex: number }) => {
  const question = useSelector(
    (state: RootState) => state.questions[questionIndex],
  );
  switch (question?.type) {
    case 'multiple-choice-questions':
      return (
        <MdOutlineRadioButtonChecked
          css={css`
            width: 24px;
            height: 24px;
            color: #5f6367;
            margin-right: 8px;
          `}
        />
      );

    case 'check-box':
      return (
        <MdOutlineCheckBox
          css={css`
            width: 24px;
            height: 24px;
            color: #5f6367;
            margin-right: 8px;
          `}
        />
      );
    case 'drop-down':
      return (
        <LiaChevronCircleDownSolid
          css={css`
            width: 24px;
            height: 24px;
            color: #5f6367;
            margin-right: 8px;
          `}
        />
      );
    case 'short-answer':
      return (
        <MdOutlineShortText
          css={css`
            width: 24px;
            height: 24px;
            color: #5f6367;
            margin-right: 8px;
          `}
        />
      );
    case 'long-sentence':
      return (
        <GrTextAlignFull
          css={css`
            width: 24px;
            height: 24px;
            color: #5f6367;
            margin-right: 8px;
          `}
        />
      );
    default:
      return null;
  }
};
