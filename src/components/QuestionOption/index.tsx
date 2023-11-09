import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import { AddOptionLine } from '../AddOptionLine';
import { ToolsBlock } from '../ToolsBlock';
import { MultipleChoice } from './MultipleChoice';
import { WritingAnswer } from './WritingAnswer';

export const QuestionOption = () => {
  const questionType = useSelector(
    (state: RootState) => state.questionType.value,
  );
  const renderQuestion = () => {
    const multipleChoice =
      questionType === 'multiple-choice-questions' ||
      questionType === 'check-box' ||
      questionType === 'drop-down';
    if (multipleChoice) {
      return <MultipleChoice />;
    }
    return <WritingAnswer questionType={questionType} />;
  };

  return (
    <>
      {renderQuestion()}
      {questionType !== 'short-answer' && questionType !== 'long-sentence' && (
        <AddOptionLine />
      )}
      <ToolsBlock />
    </>
  );
};
