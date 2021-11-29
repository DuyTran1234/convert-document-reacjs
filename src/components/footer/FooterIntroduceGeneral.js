import { Grid, Link, Typography } from "@mui/material";
import { defaultColor } from "../../services/pickColor";

const styleSubGrid = {
    width: "100%",
    height: "27vh",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
}
const listInfo = [
    { title: 'Solutions', subtitles: ['Business', 'Education'] },
    { title: 'Company', subtitles: ['About', 'Help', 'Blog'] },
    { title: 'Product', subtitles: ['Pricing', 'Teams', 'Developer'] },
    { title: 'Apps', subtitles: ['Android App', 'iOS App', 'Windows App'] },
];
export default function FooterIntroduceGeneral() {
    return (
        <Grid
            container
            marginTop="10vh"
            sx={{
                borderTop: 1,
                borderColor: defaultColor,
                width: "100%",
            }}
        >
            {listInfo.map((item, index) => {
                return (
                    <Grid
                        paddingTop="5vh"
                        key={index}
                        item xs={12} md={3}
                        sx={styleSubGrid}
                    >
                        <Typography variant="h6" fontSize={16} fontWeight={700} sx={{marginBottom: "2vh"}}>
                            {item.title}
                        </Typography>
                        {item.subtitles.map((element, indexElement) => {
                            return (
                                <div key={indexElement + 100} style={{marginBottom: "2vh"}}>
                                    <Link href="" underline="none">
                                        {element}
                                    </Link>
                                </div>
                            );
                        })}
                    </Grid>
                );
            })}
        </Grid>
    );
}