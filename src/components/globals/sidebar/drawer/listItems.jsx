import { ListItemButton, ListItemIcon, ListItemText, ListSubheader } from "@mui/material";
import DashboardIcon from '@mui/icons-material/Dashboard';
import AssignmentIcon from '@mui/icons-material/Assignment';
import GroupsIcon from '@mui/icons-material/Groups';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import AssessmentIcon from '@mui/icons-material/Assessment';
import BusinessIcon from '@mui/icons-material/Business';
import React from "react";

export const mainListItems = (
    <React.Fragment>
        <ListItemButton>
            <ListItemIcon>
                <GroupsIcon />
            </ListItemIcon>
            <ListItemText primary="Clientes" />
        </ListItemButton>
        <ListItemButton>
            <ListItemIcon>
                <CalendarMonthIcon />
            </ListItemIcon>
            <ListItemText primary="Agenda" />
        </ListItemButton>
        <ListItemButton>
            <ListItemIcon>
                <AttachMoneyIcon />
            </ListItemIcon>
            <ListItemText primary="Financeiro" />
        </ListItemButton>
        <ListItemButton>
            <ListItemIcon>
                <AssessmentIcon />
            </ListItemIcon>
            <ListItemText primary="Relatório" />
        </ListItemButton>
        <ListItemButton>
            <ListItemIcon>
                <BusinessIcon />
            </ListItemIcon>
            <ListItemText primary="Minha clínica" />
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