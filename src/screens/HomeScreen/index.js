import React,{ useState, useEffect } from 'react'
import {icons, images} from '../../assets';
import useStyles from './styles';
import HeaderComponent from './HeaderComponent';
import StepComponent from './StepComponent/StepComponent';
import { renderOptionsTool } from '../../services/checkExtension';
import ResultComponent from './ResultComponent/ResultComponent';

const initialSelected = { label:'Select file conversion',value:''}

function HomeScreen(props) {
    const classes = useStyles()
    const [fileInput,setFileInput] = useState(null);
    const [conversionSelected,setConversionSelected] = useState(initialSelected);
    const [optionsTool,setOptionsTool] = useState([]);
    const [isActive, setIsActive] = useState(0);
    const [valueLoading,setValueLoading] = useState(0);
    const [isLoading,setIsLoading] = useState(false);

    useEffect(() => {
        const timer = setInterval(() => {
          setValueLoading((prevProgress) => (prevProgress >= 100 ? 10 : prevProgress + 10));
        }, 800);
        return () => {
          clearInterval(timer);
        };
      }, []);

    const onChangeFile =(file)=>{
        setFileInput(file)
        setIsActive(1)
        setConversionSelected(initialSelected)
        handleOptionByTypeFile(file?.name)
    };

    const onSelectConversion = (value)=>{
        setConversionSelected(value)
    };

    const handleOptionByTypeFile = (nameFile)=>{
        if(nameFile){
            const listOptions = renderOptionsTool(nameFile)
            setOptionsTool(listOptions)
        }
    };

    return (
        <div className={classes?.container}>
                <HeaderComponent/>
                <div className={classes?.divTextEasy}>
                    <p className={classes?.txtTitle}>File conversion made</p>
                    <p className={classes?.txtEasy}>easy</p>
                </div>
                <p className={classes?.txtSupport}>Support documents, images, sounds, media file,...</p>
                <StepComponent
                    isActive={isActive}
                    onChangeFile={onChangeFile}
                    fileInput={fileInput}
                    optionsTool={optionsTool}
                    conversionSelected={conversionSelected}
                    onSelectConversion={onSelectConversion}
                />
                <div className={classes?.divProgressBar}>
                    <ResultComponent
                    valueLoading={valueLoading}
                    />
                </div>
        </div>
    )
}

export default HomeScreen
