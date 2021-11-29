import * as React from 'react';
import ChooseFileButton from './ChooseFileButton';
import ToolsContext from '../../context/ToolsContext';
import InputUploadContainer from './InputUploadContainer';
import { boxBorderColor, confirmConvertColor, defaultColor } from '../../services/pickColor';
import FileChosen from './FileChosen';
import ConfirmConvertButton from './ConfirmConvertButton';
import BackButton from './BackButton';
import LoadingAnimation from '../LoadingAnimation';
import DonwloadButton from './DownloadButton';
import PickIconFileInput from '../PickIconFileInput';

export default function InputUpload() {
    const context = React.useContext(ToolsContext);
    const tool = context.tool;
    const fileInput = context.fileInput;
    const isLoading = context.isLoading;
    const confirmDonwload = context.confirmDonwload;
    const linkDownload = context.linkDownload;

    const [inputContainer, setInputContainer] = React.useState(() => {
        return (
            <InputUploadContainer
                backgroundColor={!tool ? defaultColor : tool.color}
                listItem={[<ChooseFileButton />]}
            />
        );
    });

    React.useEffect(() => {
        if (fileInput && isLoading && !confirmDonwload) {
            const render = <InputUploadContainer
                backgroundColor={confirmConvertColor}
                boxBorder={3}
                boxBorderColor={boxBorderColor}
                listItem={[
                    <h2>Converting ...</h2>,
                    <LoadingAnimation />,
                ]}
            />
            setInputContainer(render);
        }
        else if (fileInput && !isLoading && !confirmDonwload) {
            const render = <InputUploadContainer
                backgroundColor={confirmConvertColor}
                boxBorder={3}
                boxBorderColor={boxBorderColor}
                listItem={[
                    <h2>File chosen:</h2>,
                    <FileChosen filename={fileInput.name} />,
                    <ConfirmConvertButton />, <BackButton />
                ]}
            />
            setInputContainer(render);
        }
        else if (confirmDonwload) {
            const render = <InputUploadContainer
                backgroundColor={confirmConvertColor}
                boxBorder={3}
                boxBorderColor={boxBorderColor}
                listItem={[
                    <h2>{linkDownload?.content}</h2>,
                    <DonwloadButton linkDownload={linkDownload?.link} />,
                    <BackButton />
                ]}
            />
            setInputContainer(render);
        }
        else {
            const render = <InputUploadContainer
                backgroundColor={!tool ? defaultColor : tool.color}
                listItem={[
                    <PickIconFileInput valueTool={tool ? tool.value : -1} />,
                    <ChooseFileButton />
                ]}
            />
            setInputContainer(render);
        }
    }, [tool, fileInput, isLoading, confirmDonwload, linkDownload]);

    return (
        <div>
            {inputContainer}
        </div>
    );
}
