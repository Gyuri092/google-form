import { Route, Routes } from 'react-router-dom';
import { SurveyPreview } from './routes/SurveyPreview';
import { SurveyEditor } from './routes/SurveyEditor';
import { SurveyResponse } from './routes/SurveyResponse';

function App() {
  return (
    <Routes>
      <Route path="/" element={<SurveyEditor />} />
      <Route path="/preview" element={<SurveyPreview />} />
      <Route path="/response" element={<SurveyResponse />} />
    </Routes>
  );
}

export default App;
