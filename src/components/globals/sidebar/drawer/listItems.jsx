import { ListItemButton, ListItemIcon, ListItemText, ListSubheader } from "@mui/material";
import AssignmentIcon from '@mui/icons-material/Assignment';
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import menus from './menus.json';
import { MenuItem } from "./menuItem";

export const MainListItems = () => {
    const [openMenu, setOpenMenu] = useState({
        'clientes': false
    });
    const navigate = useNavigate()

    const handleClick = (item, subItem) => {
        if (subItem) {
            console.log(subItem)
            if (subItem.route) {
                return navigate(subItem.route)
            }
        } else {
            setOpenMenu((prevMenu) => {
                const updateOpenMenu = { ...prevMenu }

                Object.keys(updateOpenMenu).forEach((key) => {
                    if (key !== item) {
                        updateOpenMenu[key] = false;
                    }
                });
                updateOpenMenu[item] = !prevMenu[item];

                return updateOpenMenu
            });

            const menuItem = menus.arrayMenus?.find((menuItem) => menuItem.id === item);
            if (menuItem && menuItem.route) {
                return navigate(menuItem.route)
            }
        }
    }



    return (
        menus && menus.arrayMenus.map((menu) => {
            return (
                <React.Fragment key={menu.section}>
                    <MenuItem
                        key={menu.id}
                        onClick={handleClick}
                        openMenu={openMenu}
                        menuItem={menu}
                        onClickSubItem={handleClick}
                    />
                </React.Fragment>
            )
        })
    )
}



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