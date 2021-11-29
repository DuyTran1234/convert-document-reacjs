import './App.css';
import { useState } from 'react';
import ToolsContext from './context/ToolsContext';
import Navbar from './components/header/Navbar';
import MainScreen from './components/body/MainScreen';
import Footer from './components/footer/Footer';

function App() {
  const [tool, setTool] = useState(null);
  const [fileInput, setFileInput] = useState('');
  const [confirmConvert, setConfirmConvert] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [confirmDonwload, setConfirmDownload] = useState(false);
  const [linkDownload, setLinkDownload] = useState(null);

  const toolContextValue = {
    "tool": tool,
    "setTool": setTool,
    "fileInput": fileInput,
    "setFileInput": setFileInput,
    "confirmConvert": confirmConvert,
    "setConfirmConvert": setConfirmConvert,
    "isLoading": isLoading,
    "setIsLoading": setIsLoading,
    "confirmDonwload": confirmDonwload,
    "setConfirmDownload": setConfirmDownload,
    "linkDownload": linkDownload,
    "setLinkDownload": setLinkDownload,
  };

  return (
    <div className="App">
      <ToolsContext.Provider value={toolContextValue} >
        <Navbar />
        <MainScreen />
        <Footer />
      </ToolsContext.Provider>
    </div>
  );
}

export default App;
