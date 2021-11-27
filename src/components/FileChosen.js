import InsertDriveFileOutlinedIcon from '@mui/icons-material/InsertDriveFileOutlined';
import { Typography } from '@mui/material';
import { Box } from '@mui/system';

const customBox = {
    display: "-webkit-box",
    boxOrient: "vertical",
    lineClamp: 3,
    wordBreak: "break-all",
    overflow: "hidden"
};
function FileChosen(props) {
    const { filename } = props;

    return (
        <div>
            <Box
                flexDirection="column"
                component="div"
                style={customBox}
            >
                <Typography fontSize="18px">
                    <InsertDriveFileOutlinedIcon fontSize="medium" />
                    {filename}
                </Typography>
            </Box>
        </div>
    );
}

export default FileChosen;