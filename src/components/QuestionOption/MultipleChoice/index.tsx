import { css } from '@emotion/react';
import { BiCircle } from 'react-icons/bi';
import { CgClose } from 'react-icons/cg';
import { useSelector } from 'react-redux';
import { Input } from '../../Input';
import { RootState } from '../../../store';

export const MultipleChoice = () => {
  const questionOptions = useSelector(
    (state: RootState) => state.questionOption,
  );
  return (
    <div
      css={css`
        height: auto;
      `}
    >
      {questionOptions.map((option, index) => {
        return (
          <label
            key={`${option}-${index - 0}`}
            htmlFor="defaultQuestion"
            css={css`
              height: auto;
              display: flex;
              align-items: center;
              margin-bottom: 16px;
            `}
          >
            <BiCircle
              css={css`
                width: 24px;
                height: 24px;
                color: #dadce0;
                margin-right: 8px;
              `}
            />

            <Input
              defaultValue={`옵션 ${index + 1}`}
              name={`contents-${index + 1}`}
              inputStyle={css`
                height: 30px;
                padding: 1px 1px 1px 0;
                font-size: 11pt;
              `}
            />
            <button
              type="button"
              css={css`
                width: 36px;
                height: 32px;
                border-radius: 50%;
                display: flex;
                justify-content: center;
                align-items: center;
                margin-left: 20px;
                position: relative;
                :hover {
                  background: #f3f3f3;
                  p {
                    opacity: 1;
                  }
                }
                svg {
                  width: 24px;
                  height: 24px;
                }
                svg > path {
                  fill: #5f6368;
                }
              `}
            >
              <CgClose />
              <p
                css={css`
                  width: 44px;
                  height: 24px;
                  font-size: 12px;
                  color: #fff;
                  background: rgba(0, 0, 0, 0.6);
                  border-radius: 2px;
                  display: flex;
                  justify-content: center;
                  align-items: center;
                  position: absolute;
                  left: -6px;
                  bottom: -24px;
                  opacity: 0;
                `}
              >
                삭제
              </p>
            </button>
          </label>
        );
      })}
    </div>
  );
};
