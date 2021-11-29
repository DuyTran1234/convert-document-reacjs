import { Icon } from "@iconify/react";
import { Grid, Link, Typography } from "@mui/material";

const styleGridContainer = {
    width: "100%",
    flexDirection: {xs: "column-reverse", md: "row"},
}
const styleGridTitleFooter = {
    width: "100%",
    height: "10vh",
    justifyContent: "flex-start",
    paddingTop: "3vh",
    paddingLeft: "3.5vw",
    backgroundColor: "#e6e6e6",
}
const styleGridFeatureFooter = {
    width: "100%",
    height: "10vh",
    flexDirection: {xs: "column", md: "row"},
    justifyContent: {xs: "flex-start", md: "flex-end"},
    alignItems: "flex-start",
    paddingTop: "3.1vh",
    paddingLeft: "4vw",
    backgroundColor: "#e6e6e6",
}
const styleFeature = {
    marginRight: "3vw",
    marginBottom: "3vh"
}

export default function FooterInfomation() {
    return (
        <Grid
            display="flex"
            container
            sx={styleGridContainer}
        >
            <Grid
                item xs={12} md={4}
                display="flex"
                sx={styleGridTitleFooter}
            >
                <Typography variant="subtitle1">
                    © 2021 Convert Document File
                </Typography>
            </Grid>
            <Grid
                item xs={12} md={8}
                display="flex"
                sx={styleGridFeatureFooter}
            >
                <Link sx={styleFeature} href="" underline="none">
                    Privacy Notice
                </Link>
                <Link sx={styleFeature} href="" underline="none">
                    Terms & Conditions
                </Link>
                <Link sx={styleFeature} href="" underline="none">
                    Imprint
                </Link>
                <Link sx={styleFeature} href="" underline="none">
                    Contact Us
                </Link>
                <Link sx={styleFeature} href="" underline="none">
                    <Icon icon="ant-design:global-outlined" fontSize={17} />
                    Language
                </Link>
            </Grid>
        </Grid>
    );
}