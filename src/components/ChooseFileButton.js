import * as React from 'react';
import Button from '@mui/material/Button';
import UploadFileOutlinedIcon from '@mui/icons-material/UploadFileOutlined';
import { styled } from '@material-ui/styles';
import ToolsContext from '../context/ToolsContext';
import { checkExtension } from '../services/checkExtension';

const Input = styled('input')({
    display: 'none',
});

const styleChooseFileButton = {
    width: "100%",
    height: "10vh",
    color: 'black',
    backgroundColor: 'white',
    '&:hover': {
        backgroundColor: '#ebebe0',
    },
}
function ChooseFileButton() {
    const context = React.useContext(ToolsContext);
    const tool = context.tool;
    const setFileInput = context.setFileInput;

    const handleChangeFileInput = (e) => {
        if (e.target.files[0]) {
            const file = e.target.files[0];
            if (checkExtension(file.name, tool.ext)) {
                setFileInput(e.target.files[0]);
            }
            else {
                window.alert('The file is not in the correct format, please try again');
            }
        }
    }
    return (
        <div>
            <label htmlFor="contained-button-file">
                <Input
                    disabled={!tool ? true : false}
                    accept={tool?.ext}
                    id="contained-button-file"
                    multiple type="file"
                    onChange={handleChangeFileInput}
                />
                <Button
                    disabled={!tool ? true : false}
                    variant="contained" component="span"
                    style={styleChooseFileButton}>
                    <UploadFileOutlinedIcon />
                    Choose File
                </Button>
            </label>
        </div>
    );
}

export default ChooseFileButton