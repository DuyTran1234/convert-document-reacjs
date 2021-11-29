import * as React from 'react';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';

function IntroduceComponent(props) {
    const {icon, title, content} = props;
    return (
        <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            // minHeight="100vh"
            paddingTop="5vh"
        >
            <Box
                flexDirection="column"
                display="flex"
                alignItems="center"
                justifyContent="center"
                sx={{
                    width: "38vh",
                    minHeight: "30vh",
                }}>
                {icon}
                <Typography variant="h6">{title}</Typography>
                <Typography variant="p">{content}</Typography>
            </Box>
        </Box>
    );
}

export default IntroduceComponent;