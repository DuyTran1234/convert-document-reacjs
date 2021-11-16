import './App.css';
import { useState } from 'react';
import ToolsContext from './context/ToolsContext';
import ListTool from './components/ListTool';
import InputUpload from './components/InputUpload';
import SubmitUpload from './components/SubmitUpload';

function App() {
  const listTool = [
    { content: "Word to PDF", value: 0, ext: ['.docx', '.doc', '.docm', '.dot', '.dotx', '.dotm', '.rtf'] }, 
    { content: "Excel to PDF", value: 1, ext: ['.xlsx', '.xls', '.xlsm', '.xlsb', '.xlt', '.xlam']},
    { content: "PowerPoint to PDF", value: 2, ext: ['.ppt', '.pptx', '.pps', '.ppsx', '.pot'] },
    { content: "PDF to Word", value: 3, ext: ['.pdf'] },
    { content: "PDF to Excel", value: 4, ext: ['.pdf'] },
    { content: "PDF to PowerPoint", value: 5, ext: ['.pdf'] },
    { content: "JPG to PDF", value: 6, ext: ['.jpg', '.jpeg'] },
];
  const [tool, setTool] = useState({ content: "Word to PDF", value: 0, ext: ['.docx', '.doc'] });
  const [fileInput, setFileInput] = useState('');

  const toolContextValue = {
    "tool": tool,
    "setTool": setTool,
    "fileInput": fileInput,
    "setFileInput": setFileInput,
  };

  return (
    <div className="App">
      <ToolsContext.Provider value={toolContextValue} >
        <ListTool listTool={listTool} />
        <br />
        <InputUpload />
        <br />
        <SubmitUpload />
      </ToolsContext.Provider>
    </div>
  );
}

export default App;
