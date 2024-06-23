import { ListItemButton, ListItemIcon, ListItemText, ListSubheader } from "@mui/material";
import DashboardIcon from '@mui/icons-material/Dashboard';
import AssignmentIcon from '@mui/icons-material/Assignment';
import React from "react";

export const mainListItems = (
    <React.Fragment>
        <ListItemButton>
            <ListItemIcon>
                <DashboardIcon />
            </ListItemIcon>
            <ListItemText primary="Dashboard" />
        </ListItemButton>
    </React.Fragment>
);

export const secondaryListItems = (
    <React.Fragment>
        <ListSubheader component="div" inset>
            Saved reports
        </ListSubheader>
        <ListItemButton>
            <ListItemIcon>
                <AssignmentIcon />
            </ListItemIcon>
            <ListItemText primary="Current month" />
        </ListItemButton>
    </React.Fragment>
)