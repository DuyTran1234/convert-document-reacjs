import React from "react";
import { AppBar, Toolbar, IconButton, Typography } from "@mui/material";
import AppRegistrationSharpIcon from '@mui/icons-material/AppRegistrationSharp';

export default function Navbar() {
    return (
        <AppBar style={{ background: '#ccccb3' }} position="static">
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