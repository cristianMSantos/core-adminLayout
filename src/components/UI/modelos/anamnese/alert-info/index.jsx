import {Alert} from "@mui/material";
import React from "react";

export const AlertInfo = ({children}) => (
    <Alert severity="info" sx={{display: 'flex', alignItems: 'center'}}>
        {children}
    </Alert>
);