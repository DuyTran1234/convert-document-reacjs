import './App.css';
import { useState } from 'react';
import { Grid } from '@mui/material';
import ToolsContext from './context/ToolsContext';
import HomeScreen from './screens/HomeScreen';

function App() {
  const listTool = [
    { content: "Word to PDF", value: 0, ext: ['.docx', '.doc', '.docm', '.dot', '.dotx', '.dotm', '.rtf'] },
    { content: "Excel to PDF", value: 1, ext: ['.xlsx', '.xls', '.xlsm', '.xlsb', '.xlt', '.xlam'] },
    { content: "PowerPoint to PDF", value: 2, ext: ['.ppt', '.pptx', '.pps', '.ppsx', '.pot'] },
    { content: "PDF to Word", value: 3, ext: ['.pdf'] },
    { content: "PDF to Excel", value: 4, ext: ['.pdf'] },
    { content: "PDF to PowerPoint", value: 5, ext: ['.pdf'] },
    { content: "JPG to PDF", value: 6, ext: ['.jpg', '.jpeg'] },
    { content: "SVG to PNG", value: 7, ext: ['.svg'] },
    { content: "MP4 to MP3", value: 8, ext: ['.mp4'] },
  ];
  const [tool, setTool] = useState(listTool[0]);
  const [fileInput, setFileInput] = useState('');
  const [resizeImage, setResizeImage] = useState({
    width: 0,
    height: 0,
  });

  const toolContextValue = {
    "tool": tool,
    "setTool": setTool,
    "fileInput": fileInput,
    "setFileInput": setFileInput,
    "resizeImage": resizeImage,
    "setResizeImage": setResizeImage,
  };

  return (
    <div className="App">
      <ToolsContext.Provider value={toolContextValue} >
        <Grid container spacing={2}>
          <HomeScreen />
        </Grid>
      </ToolsContext.Provider>
    </div>
  );
}

export default App;
