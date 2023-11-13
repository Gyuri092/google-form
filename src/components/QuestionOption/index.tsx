import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import { AddOptionLine } from '../AddOptionLine';
import { ToolsBlock } from '../ToolsBlock';
import { MultipleChoiceList } from './MultipleChoiceList';
import { WritingAnswer } from './WritingAnswer';

export const QuestionOption = ({
  questionIndex,
}: {
  questionIndex: number;
}) => {
  const questionType = useSelector(
    (state: RootState) =>
      state.questions[questionIndex]?.type || 'multiple-choice-questions',
  );
  const renderQuestion = () => {
    const multipleChoice =
      questionType === 'multiple-choice-questions' ||
      questionType === 'check-box' ||
      questionType === 'drop-down';
    if (multipleChoice) {
      return (
        <>
          <MultipleChoiceList questionIndex={questionIndex} />
          <AddOptionLine questionIndex={questionIndex} />
        </>
      );
    }
    return <WritingAnswer questionType={questionType} />;
  };

  return (
    <>
      {renderQuestion()}
      <ToolsBlock questionIndex={questionIndex} />
    </>
  );
};
