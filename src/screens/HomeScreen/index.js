import React, { useState, useEffect, useRef } from 'react'
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
    const listOptions = renderOptionsTool();
    const classes = useStyles();
    const [fileInput, setFileInput] = useState(null);
    const [conversionSelected, setConversionSelected] = useState(initialSelected);
    const [optionsTool, setOptionsTool] = useState(listOptions);
    const [isActive, setIsActive] = useState(0);
    const [valueLoading, setValueLoading] = useState(0);
    const [isLoading, setIsLoading] = useState(false);
    const [convertDone, setConvertDone] = useState({});
    const [linkDownload, setLinkDownload] = useState("");
    const [fileNameConverted, setFileNameConverted] = useState("");

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

    useEffect(() => {
        if (!conversionSelected) {
            setIsActive(0);
        }
    }, [conversionSelected, isActive]);

    const onChangeFile = async (file) => {
        setFileNameConverted('');
        setConvertDone({ isSuccess: false, message: '' });
        setFileInput(file);
        setValueLoading(0);
        setIsActive(1);
        if (file) {
            setIsLoading(true);
            const formData = createFormData(file, conversionSelected?.value);
            try {
                const convertFileResult = await convertFileApi(formData);
                if (convertFileResult.status === 200) {
                    setIsLoading(false);
                    setIsActive(2);
                    setConvertDone({
                        isSuccess: true,
                        messsage: 'Convert file success!',
                    });
                    setLinkDownload(downloadFileApi(convertFileResult.data));
                    setFileNameConverted(convertFileResult.data);
                    setFileInput(null);
                }
                // else {
                //     setConvertDone({
                //         isSuccess: false,
                //         messsage: 'Convert error, please try again',
                //     });
                // }
            }
            catch (error) {
                setFileInput(null);
                setIsLoading(false);
                console.log(error);
                setConvertDone({
                    isSuccess: false,
                    messsage: 'Convert error, please try again',
                });
            }
        }
    };

    const onSelectConversion = async (value) => {
        setFileNameConverted('');
        setConvertDone({ isSuccess: false, message: '' });
        setIsActive(1);
        setConversionSelected(value);
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
                <ResultComponent
                    fileNameConverted={fileNameConverted}
                    isLoading={isLoading}
                    convertDone={convertDone}
                    valueLoading={valueLoading} />
            </div>
        </div>
    )
}

export default HomeScreen
