import { Button, Grid, IconButton } from '@mui/material';
import { defaultColor } from '../../services/pickColor';
import { Icon } from '@iconify/react';

const styleButtonDownloadApp = {
    width: "18%",
    height: "5vh",
    color: 'black',
    backgroundColor: 'white',
    '&:hover': {
        backgroundColor: '#f2f2f2',
    },
    marginLeft: "2vw",
    borderRadius: 2,
};

export default function FooterIcons() {
    return (
        <Grid
            container
            // alignItems="center"
            marginTop="10vh"
            sx={{
                borderTop: 1,
                borderColor: defaultColor,
                width: "100%",
            }}
        >
            <Grid
                sx={{
                    width: "100%",
                    height: "10vh",
                    paddingTop: "1vh",
                    paddingLeft: "3vw"
                }}
                display="flex"
                alignItems="flex-start"
                item xs={12} sm={6}
            >
                <IconButton>
                    <Icon icon="dashicons:linkedin" fontSize={30} />
                </IconButton>
                <IconButton>
                    <Icon icon="bx:bxl-facebook" fontSize={30} />
                </IconButton>
                <IconButton>
                    <Icon icon="akar-icons:twitter-fill" fontSize={30} />
                </IconButton>
                <IconButton>
                    <Icon icon="akar-icons:youtube-fill" fontSize={30} />
                </IconButton>
                <IconButton>
                    <Icon icon="akar-icons:instagram-fill" fontSize={30} />
                </IconButton>
            </Grid>
            <Grid
                item xs={12} sm={6}
                display="flex"
                flexDirection="row"
                sx={{
                    paddingTop: "2vh",
                    width: "100%",
                    height: "10vh",
                    paddingRight: { xs: "0", sm: "3vw" },
                    paddingLeft: { xs: "2vw", sm: "0" },
                    justifyContent: { xs: "flex-start", sm: "flex-end" },
                }}
            >
                <Button
                    variant="contained"
                    sx={styleButtonDownloadApp}
                >
                    <Icon icon="flat-color-icons:android-os" fontSize={30} />
                </Button>
                <Button
                    variant="contained"
                    sx={styleButtonDownloadApp}
                >
                    <Icon icon="ci:apple" fontSize={30} />
                </Button>
                <Button
                    variant="contained"
                    sx={styleButtonDownloadApp}
                >
                    <Icon icon="logos:microsoft-windows" fontSize={25} />
                </Button>
            </Grid>
        </Grid>
    );
}