import React from "react";
import { AppBar, Toolbar, IconButton, Typography } from "@mui/material";
import AppRegistrationSharpIcon from '@mui/icons-material/AppRegistrationSharp';
import { defaultColor } from "../../services/pickColor";

function Navbar() {
    return (
        <AppBar style={{ background: defaultColor }} position="fixed">
            <Toolbar>
                <Typography variant="h6">
                    <IconButton
                        color="inherit"
                        aria-label="menu"
                    >
                        <AppRegistrationSharpIcon fontSize="large" />
                    </IconButton>
                    Convert Document
                </Typography>
            </Toolbar>
        </AppBar>
    );
}
export default Navbar;