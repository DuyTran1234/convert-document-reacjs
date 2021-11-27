import { Grid, IconButton } from '@mui/material';
import Box from '@mui/material/Box';
import { defaultColor } from '../../services/pickColor';
import { Icon } from '@iconify/react';

const styleFooterIcon = {
    backgroundColor: 'white',
    height: "10vh",
    borderTop: 2,
    borderColor: "black",
}
export default function Footer() {
    return (
        <Box
            display="flex"
            justifyContent="space-between"
            alignItems="start"
            marginTop="10vh"
            paddingLeft="3vw"
            paddingRight="3vw"
            sx={{
                    borderTop: 2,
                    borderColor: defaultColor,
                }}
        >
            <Box
                display="flex"
                flexDirection="row"
                justifyContent="space-between"
                alignItems="start"
                // minHeight="100vh"
                paddingTop="1vh"
                sx={{
                    width: "100%",
                    minHeight: "10vh",
                    backgroundColor: 'white',
                }}
            >
                <Box>
                    <IconButton>
                        <Icon icon="bx:bxl-facebook" fontSize={35} />
                    </IconButton>
                    <IconButton>
                        <Icon icon="akar-icons:twitter-fill" fontSize={35} />
                    </IconButton>
                    <IconButton>
                        <Icon icon="akar-icons:youtube-fill" fontSize={35} />
                    </IconButton>
                    <IconButton>
                        <Icon icon="akar-icons:instagram-fill" fontSize={35} />
                    </IconButton>
                </Box>
                <Box>
                    <p>© 2021 Convert Document File</p>
                </Box>
            </Box>
        </Box>
    );
}