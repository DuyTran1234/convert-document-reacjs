import { Button } from "@mui/material";
import ArrowCircleLeftOutlinedIcon from '@mui/icons-material/ArrowCircleLeftOutlined';import { useContext } from "react";
import ToolsContext from "../context/ToolsContext";
const styles = {
    width: "100%",
    height: "8vh",
    color: 'black',
    backgroundColor: 'white',
    '&:hover': {
        backgroundColor: '#ebebe0',
    },
    marginTop: "3vh"
}
function BackButton() {
    const context = useContext(ToolsContext);
    const setFileInput = context.setFileInput;
    const setConfirmDownload = context.setConfirmDownload;
    const setLinkDownload = context.setLinkDownload;
    const handleClick = () => {
        setFileInput(null);
        setConfirmDownload(false);
        setLinkDownload(null);
    }
    return (
        <div>
            <Button
                onClick={handleClick}
                variant="contained" component="span"
                style={styles}>
                <ArrowCircleLeftOutlinedIcon style={{marginRight: "0.5vw"}} />
                Back
            </Button>
        </div>
    );
}

export default BackButton;