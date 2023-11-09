import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import { AddOptionLine } from '../AddOptionLine';
import { ToolsBlock } from '../ToolsBlock';
import { MultipleChoiceList } from './MultipleChoiceList';
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
      return (
        <>
          <MultipleChoiceList />
          <AddOptionLine />
        </>
      );
    }
    return <WritingAnswer questionType={questionType} />;
  };

  return (
    <>
      {renderQuestion()}
      <ToolsBlock />
    </>
  );
};
