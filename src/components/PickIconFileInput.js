import { Icon } from '@iconify/react';
import { jpgColor, mp4Color, pdfColor } from '../services/pickColor';

const styleIcon = {
    margin: "3vh",
};

function PickIconFileInput(props) {
    const { valueTool } = props;
    if (valueTool === 0) {
        return <div style={styleIcon}>
            <Icon icon="vscode-icons:file-type-word2" color="#d9d9d9" width="14vw" height="14vh" />;
        </div>
    }
    else if (valueTool === 1) {
        return <div style={styleIcon}>
            <Icon icon="vscode-icons:file-type-excel2" color="#d9d9d9" width="14vw" height="14vh" />;
        </div>
    }
    else if (valueTool === 2) {
        return <div style={styleIcon}>
            <Icon icon="vscode-icons:file-type-powerpoint2" color="#d9d9d9" width="14vw" height="14vh" />
        </div>;
    }
    else if (valueTool === 3 || valueTool === 4 || valueTool === 5) {
        return <div style={styleIcon}>
            <Icon icon="fluent:document-pdf-32-regular" color={'white'} width="14vw" height="14vh" />
        </div>
    }
    else if (valueTool === 6) {
        return <div style={styleIcon}>
            <Icon icon="ant-design:file-jpg-outlined" color={'white'} width="14vw" height="14vh" />
        </div>
    }
    else if (valueTool === 7) {
        return <div style={styleIcon}>
            <Icon icon="vscode-icons:file-type-svg" width="14vw" height="14vh" />
        </div>
    }
    else if (valueTool === 8) {
        return <div style={styleIcon}>
            <Icon icon="teenyicons:mp4-outline" color={'white'} width="14vw" height="14vh" />
        </div>
    }
    else {
        return <div></div>;
    }
}

export default PickIconFileInput;