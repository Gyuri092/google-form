import { css } from '@emotion/react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Input } from '../../Input';
import { RootState } from '../../../store';
import { updateDescription, updateTitle } from '../../../slice/titleSlice';

export const TitleArea = () => {
  const [isFocused, setIsFocused] = useState(false);
  const titleState = useSelector((state: RootState) => state.title);
  const dispatch = useDispatch();
  return (
    <div
      css={css`
        height: auto;
        position: relative;
        margin-bottom: 14px;
        background: #fff;
        border-radius: 8px;
      `}
      onFocus={() => setIsFocused(true)}
      onBlur={() => setIsFocused(false)}
    >
      <div
        css={css`
          position: absolute;
          width: 100%;
          height: 10px;
          background: #673ab6;
          border-radius: 8px 8px 0 0;
          z-index: 1;
        `}
      />
      <form
        css={css`
          width: 100%;
          border: 1px solid green;
          border: 1px solid #dadce0;
          border-radius: 8px;
          box-shadow: ${isFocused && '0 3px 3px rgba(0, 0, 0, 0.12)'},
            ${isFocused && '0 1px 1px rgba(0, 0, 0, 0.14)'},
            ${isFocused && '0 1px 2px rgba(0, 0, 0, 0.2)'};
          padding: 30px 20px;
          position: relative;
        `}
      >
        {isFocused && (
          <div
            css={css`
              position: absolute;
              left: -1px;
              top: 1px;
              width: 6px;
              background: #4285f4;
              border-radius: 8px 0 0 8px;
            `}
          />
        )}
        <Input
          placeholder="설문지 제목"
          onChange={(e) => dispatch(updateTitle(e.target.value))}
          value={titleState.title}
        />
        <Input
          placeholder="설문지 설명"
          inputStyle={css`
            font-size: 11pt;
          `}
          onChange={(e) => dispatch(updateDescription(e.target.value))}
          value={titleState.description}
        />
      </form>
    </div>
  );
};
