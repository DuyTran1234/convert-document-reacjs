import { Button } from "@mui/material";
import DownloadForOfflineOutlinedIcon from '@mui/icons-material/DownloadForOfflineOutlined';

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
function DonwloadButton(props) {
    const { linkDownload } = props;
    return (
        <div>
            {
                linkDownload !== '' ?
                    <Button
                        variant="contained"
                        href={linkDownload ? linkDownload : ""}
                        style={styles}>
                        Download
                        <DownloadForOfflineOutlinedIcon />
                    </Button>
                :
                ""
            }
        </div>
    );
}

export default DonwloadButton;