import { css } from '@emotion/react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { RootState } from '../../store';
import { AnswerInput } from '../AnswerInput';
import { AnswerSubmitArea } from '../AnswerSubmitArea';
import { initializeAnswers } from '../../slice/answerSlice';

export const AnswerArea = () => {
  const questions = useSelector((state: RootState) => state.questions);
  const surveyAnswers = useSelector((state: RootState) => state.answers);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const initialAnswers = questions.map((question) => {
    return {
      id: question.id,
      type: question.type,
      isRequired: question.isRequired,
      value: '',
    };
  });

  useEffect(() => {
    if (surveyAnswers.length < questions.length) {
      dispatch(initializeAnswers(initialAnswers));
    }
  }, [dispatch, initialAnswers, questions.length, surveyAnswers.length]);

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        navigate('/response');
        dispatch(initializeAnswers(initialAnswers));
      }}
    >
      {questions.map((item, index) => (
        <div
          key={`${item.title}-${index - 0}`}
          css={css`
            height: auto;
            border: 1px solid #dadce0;
            border-radius: 8px;
            padding: 24px;
            position: relative;
            box-sizing: border-box;
            background: #fff;
            margin-bottom: 20px;
          `}
        >
          <div
            css={css`
              position: relative;
              display: flex;
              flex-direction: column;
              justify-content: space-between;
            `}
          >
            <div
              css={css`
                width: 100%;
                height: 24px;
                margin-bottom: 16px;
              `}
            >
              {item.title}
              {item.isRequired && (
                <span
                  css={css`
                    margin-left: 4px;
                    color: #d93025;
                    font-size: 20px;
                    vertical-align: middle;
                  `}
                >
                  *
                </span>
              )}
            </div>
            <AnswerInput item={item} />
          </div>
        </div>
      ))}
      <AnswerSubmitArea />
    </form>
  );
};
