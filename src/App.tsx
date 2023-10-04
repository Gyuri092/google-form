import { Route, Routes } from 'react-router-dom';
import { SurveyPreview } from './routes/SurveyPreview';
import { SurveyEditor } from './routes/SurveyEditor';

function App() {
  return (
    <Routes>
      <Route path="/" element={<SurveyEditor />}>
        <Route path="preview" element={<SurveyPreview />} />
      </Route>
    </Routes>
  );
}

export default App;
