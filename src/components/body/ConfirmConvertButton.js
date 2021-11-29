import { Button } from "@mui/material";
import ArrowCircleRightOutlinedIcon from '@mui/icons-material/ArrowCircleRightOutlined';
import { useContext } from "react";
import ToolsContext from "../../context/ToolsContext";
import { createFormData } from "../../services/createFormData";
import { convertFileApi, downloadFileApi } from "../../api";
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
function ConfirmConvertButton() {
    const context = useContext(ToolsContext);
    const setIsLoading = context.setIsLoading;
    const fileInput = context.fileInput;
    const tool = context.tool;
    const setConfirmDownload = context.setConfirmDownload;
    const setLinkDownload = context.setLinkDownload;


    const handleClick = async () => {
        setIsLoading(true);
        if (fileInput && tool) {
            try {
                const formData = createFormData(fileInput, tool.value);
                const convertApi = await convertFileApi(formData);
                if (convertApi.status === 200) {
                    console.log(convertApi.data);
                    setIsLoading(false);
                    setConfirmDownload(true);
                    setLinkDownload({
                        content: "Convert Success!",
                        link: downloadFileApi(convertApi.data),
                    });
                }
            }
            catch (error) {
                setIsLoading(false);
                setConfirmDownload(true);
                setLinkDownload({
                    content: "Convert Failed, please try again",
                    link: '',
                });
            }
        }
    }
    return (
        <div>
            <Button
                onClick={handleClick}
                variant="contained" component="span"
                style={styles}>
                Convert File
                <ArrowCircleRightOutlinedIcon style={{ marginLeft: "0.5vw" }} />
            </Button>
        </div>
    );
}

export default ConfirmConvertButton;