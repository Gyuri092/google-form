import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import { WritingAnswer } from './WritingAnswer';
import { MultipleChoice } from './MultipleChoice';
import { DropDown } from './DropDown';
import { CheckBox } from './CheckBox';
import { AddOptionLine } from '../AddOptionLine';
import { ToolsBlock } from '../ToolsBlock';

export const QuestionOption = () => {
  const questionType = useSelector(
    (state: RootState) => state.questionType.value,
  );
  const renderQuestion = () => {
    switch (questionType) {
      case 'multiple-choice-questions':
        return <MultipleChoice />;
      case 'short-answer':
        return <WritingAnswer questionType={questionType} />;
      case 'long-sentence':
        return <WritingAnswer questionType={questionType} />;
      case 'check-box':
        return <CheckBox />;
      case 'drop-down':
        return <DropDown />;
      default:
        return null;
    }
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
