import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import Box from '@mui/material/Box';
import { renderOptionsTool } from '../../services/checkExtension';
import ToolsContext from '../../context/ToolsContext';

const listTool = renderOptionsTool();

export default function SelectConversion() {
    const context = React.useContext(ToolsContext);
    const setTool = context.setTool;
    const setFileInput = context.setFileInput;
    const setConfirmDownload = context.setConfirmDownload;
    const setLinkDownload = context.setLinkDownload;

    const handleChangeInput = (event, value) => {
        setTool(null);
        setFileInput(null);
        setConfirmDownload(false);
        setLinkDownload(null);
        if(value) {
            setTool(value);
        }
    }
    return (
        <div>
            <Box
                display="flex"
                justifyContent="center"
                // alignItems="center"
                // minHeight="100vh"
                paddingTop="15vh"
            >
                <Autocomplete
                    onChange={handleChangeInput}
                    disablePortal
                    id="combo-box-demo"
                    options={listTool}
                    sx={{ width: "60%" }}
                    renderInput={(params) => <TextField {...params} label="Select Conversion" />}
                />
            </Box>
        </div>
    );
}