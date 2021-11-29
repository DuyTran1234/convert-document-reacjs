import { Card, CardMedia, Paper, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { defaultColor } from "../../services/pickColor";
import { Grid } from "@mui/material";
import Image from 'material-ui-image'
import AcUnitIcon from '@mui/icons-material/AcUnit';
import path from 'path';
import images from "../../assets/images";

const styleTypography = {
    marginLeft: "8vw",
}

export default function IntroduceConvertFile() {
    return (
        <Grid
            container
            // alignItems="center"
            marginTop="15vh"
            sx={{
                borderTop: 1,
                borderColor: defaultColor,
                width: "100%",
            }}
        >
            <Grid
                item xs={12} md={6}
                display="flex"
                sx={{
                    width: "100%",
                    height: "35vh",
                    paddingTop: "5vh",
                    justifyContent: { md:"flex-end", xs:"center"},
                }}
            >
                <Box
                    sx={{
                        marginRight: "2vw",
                    }}
                >
                    <img style={{ width: "90%" }} src={images.convertFileIntroduceImage} alt="" />
                </Box>
            </Grid>

            <Grid
                item xs={12} md={6}
                display="flex"
                sx={{
                    width: "100%",
                    height: "35vh",
                    flexDirection: "column",
                    justifyContent: {md: "flex-start", xs: "flex-start"},
                    paddingTop: "5vh",
                }}
            >
                <Typography sx={styleTypography} align="left" variant="h6">
                    How to convert files:
                </Typography>
                <Typography sx={styleTypography} align="left" variant="subtitle1">
                    1. Upload your file to our online converter.
                </Typography>
                <Typography sx={styleTypography} align="left" variant="subtitle1">
                    2. The tool will upload and transform the file into a type file choose.
                </Typography>
                <Typography sx={styleTypography} align="left" variant="subtitle1">
                    3. Download the PDF to your device.
                </Typography>
            </Grid>
        </Grid>
    );
}