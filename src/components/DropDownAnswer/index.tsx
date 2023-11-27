import { css } from '@emotion/react';
import { useState } from 'react';
import { GoTriangleDown, GoTriangleUp } from 'react-icons/go';

export const DropDownAnswer = ({
  contents,
  isRequired,
}: {
  contents: string[];
  isRequired: boolean;
}) => {
  const [isSelected, setIsSelected] = useState(false);
  const [selectedValue, setSelectedValue] = useState('선택');

  const calculateTop = () => {
    const minHeight = 34;
    let additionalHeight = 0;
    if (contents.length > 4) {
      additionalHeight = 24;
    }
    if (contents.length > 7) {
      additionalHeight = 36;
    }
    const calculatedHeight = minHeight - additionalHeight * contents.length;

    return calculatedHeight < -380 ? '-380px' : `${calculatedHeight}px`;
  };

  return (
    <button
      type="button"
      onClick={(e) => {
        setIsSelected((prev) => !prev);
        if (e.target instanceof HTMLLIElement && e.target.textContent) {
          setSelectedValue(e.target.textContent);
        } else {
          setSelectedValue('선택');
        }
      }}
      onBlur={() => setIsSelected(false)}
      css={css`
        width: 178px;
        min-height: 48px;
        border-radius: 4px;
        border: 1px solid #dadce0;
        text-align: center;
        outline: none;
        cursor: pointer;
        background: #fff;
        transition: background-color 0.2s cubic-bezier(0, 0, 0.2, 1);
        :active {
          background: #eee;
        }
        ul {
          position: absolute;
          z-index: 10;
          top: ${calculateTop()};
          left: 0;
          width: inherit;
          height: auto;
          padding: 8px 0 8px 0;
          background: #fff;
          box-shadow:
            0 1px 2px 0 #3c40434d,
            0 2px 6px 2px #3c404326;
          border-radius: inherit;
        }
        li {
          height: 48px;
          font-size: 14px;
          display: flex;
          justify-content: start;
          align-items: center;
          padding: 7px 26px 7px 16px;
          color: #0000008a;
          transition: background-color 0.2s cubic-bezier(0, 0, 0.2, 1);
          :active {
            background: #ccc;
          }
        }
        li:not(:first-of-type) {
          color: #000;
          transition: background-color 0.2s cubic-bezier(0, 0, 0.2, 1);
          :hover {
            background: #eee;
          }
          :active {
            background: #ccc;
          }
        }
      `}
    >
      <div
        css={css`
          height: 48px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 8px 20px 8px 16px;
          p {
            display: flex;
            justify-content: start;
            align-items: center;
            font-size: 14px;
            color: ${selectedValue === '선택' ? '#0000008a' : '#000'};
          }
          svg {
            width: 26px;
            fill: #5f6368;
          }
        `}
      >
        <p>{selectedValue}</p>
        {isSelected ? <GoTriangleUp /> : <GoTriangleDown />}
      </div>
      {isSelected && (
        <ul>
          <li
            css={css`
              background: #eff4fd;
              :hover {
                background: #f6f9fe;
              }
            `}
          >
            선택
          </li>
          <div
            css={css`
              width: 100%;
              height: 1px;
              margin: 8px 0;
              background: #0000001f;
            `}
          />
          {contents.map((option) => {
            return <li key={option}>{option}</li>;
          })}
        </ul>
      )}
    </button>
  );
};
