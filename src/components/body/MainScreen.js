import { Grid } from "@mui/material";
import InputUpload from "../InputUpload";
import IntroduceComponent from "../IntroduceComponent";
import SelectConversion from "../SelectConversion";
import getIntroduces from "../../services/introduces";

const introduces = getIntroduces();
function MainScreen() {
    return (
        <Grid container spacing={2} >

            <Grid item xs={12} md={12}>
                <SelectConversion />
            </Grid>

            <Grid item xs={12} md={12}>
                <InputUpload />
            </Grid>
            {
                introduces.map((item, index) => {
                    return <Grid key={index} item xs={12} md={4}>
                        <IntroduceComponent icon={item.icon} title={item.title} content={item.content} />
                    </Grid>
                })
            }
        </Grid>
    );
}

export default MainScreen;
