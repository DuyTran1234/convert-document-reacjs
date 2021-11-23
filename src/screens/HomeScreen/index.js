import React, { useState, useEffect } from 'react'
import { icons, images } from '../../assets';
import useStyles from './styles';
import HeaderComponent from './HeaderComponent';
import StepComponent from './StepComponent/StepComponent';
import { renderOptionsTool } from '../../services/checkExtension';
import ResultComponent from './ResultComponent/ResultComponent';
import { convertFileApi, downloadFileApi } from '../../api';
import { createFormData } from "../../services/createFormData";

const initialSelected = { label: 'Select file conversion', value: '' }

function HomeScreen(props) {
    const classes = useStyles();
    const [fileInput, setFileInput] = useState(null);
    const [conversionSelected, setConversionSelected] = useState(initialSelected);
    const [optionsTool, setOptionsTool] = useState([]);
    const [isActive, setIsActive] = useState(0);
    const [valueLoading, setValueLoading] = useState(0);
    const [isLoading, setIsLoading] = useState(false);
    const [convertDone, setConvertDone] = useState({});
    const [linkDownload, setLinkDownload] = useState("");

    // loading process convert
    useEffect(() => {
        if (isLoading) {
            const timer = setInterval(() => {
                setValueLoading((prevProgress) => (prevProgress >= 90 ? 90 : prevProgress + 10));
            }, 1200);
            return () => {
                clearInterval(timer);
            };
        }
    }, [isLoading]);

    const onChangeFile = (file) => {
        setConvertDone({isSuccess: false, message: ''});
        setIsLoading(false);
        setFileInput(file);
        setIsActive(1);
        setConversionSelected(initialSelected);
        handleOptionByTypeFile(file?.name);
    };

    const onSelectConversion = async (value) => {
        setConvertDone({isSuccess: false, message: ''});
        setIsActive(1);
        setConversionSelected(value);
        console.log(value);
        console.log(fileInput);
        if (value) {
            setIsLoading(true);
            const formData = createFormData(fileInput, value?.value);
            try {
                const convertFileResult = await convertFileApi(formData);
                if (convertFileResult.status === 200) {
                    setIsLoading(false);
                    setIsActive(2);
                    setValueLoading(0);
                    setConvertDone({
                        isSuccess: true,
                        messsage: 'Convert file success',
                    });
                    setLinkDownload(downloadFileApi(convertFileResult.data));
                }
                else {
                    setValueLoading(50);
                    setConvertDone({
                        isSuccess: false,
                        messsage: 'Convert error, please try again',
                    });
                }
            }
            catch (error) {
                setIsLoading(false);
                console.log(error);
                setConvertDone({
                    isSuccess: false,
                    messsage: 'Convert error, please try again',
                });
            }
        }
    };

    const handleOptionByTypeFile = (nameFile) => {
        if (nameFile) {
            const listOptions = renderOptionsTool(nameFile)
            setOptionsTool(listOptions)
        }
    };

    return (
        <div className={classes?.container}>
            <HeaderComponent />
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
                convertDone={convertDone}
                linkDownload={linkDownload}
            />
            <div className={classes?.divProgressBar}>
                <ResultComponent isLoading={isLoading} convertDone={convertDone} valueLoading={valueLoading} />
            </div>
        </div>
    )
}

export default HomeScreen
