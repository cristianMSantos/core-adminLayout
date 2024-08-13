import { List, ListItemButton, ListItemIcon, ListItemText, ListSubheader } from "@mui/material";
import AssignmentIcon from '@mui/icons-material/Assignment';
import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import menus from './menus.json';
import { MenuItem } from "./menuItem";
import { LayoutContext } from "../../../../context/layout";
import * as Icons from "@mui/icons-material";

const IconComponent = ({ iconName }) => {
    const Icon = Icons[iconName];
    return (
        <Icon
            sx={{
                minWidth: "1.2em",
                minHeight: "1.2em",
                marginRight: ".5rem",
            }}
        />
    );
}

export const MainListItems = () => {
    const [openMenu, setOpenMenu] = useState({});
    const navigate = useNavigate()

    const handleClick = (item, subItem) => {
        if (subItem) {
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



export const DesktopMenuList = () => {
    const {
        openDesktopDrawer
    } = useContext(LayoutContext)
    const navigate = useNavigate()

    const menuItem = menus.arrayMenus?.find((menuItem) => menuItem.id === openDesktopDrawer.id)

    useEffect(() => {
        console.log(menuItem)
    }, [menuItem])

    const onClickDeskopItem = (subItem) => {
        return navigate(subItem.route)
    }
    return (
        <React.Fragment>
            {/* <ListSubheader component="div" inset>
                Saved reports
            </ListSubheader> */}
            <List component="div" disablePadding>
                {menuItem && menuItem.hasSubItems && menuItem.subItems.map((subItem) => (
                    <ListItemButton
                        key={subItem.id}
                        onClick={() => onClickDeskopItem(subItem)}
                    >
                        <IconComponent iconName={subItem.icon} />
                        <ListItemText
                            primary={subItem.text}
                            sx={{ opacity: "0.7" }}
                        />
                    </ListItemButton>
                ))}
            </List>
            {/* <ListItemButton>
                <ListItemIcon>
                    <AssignmentIcon />
                </ListItemIcon>
                <ListItemText primary="Current month" />
            </ListItemButton> */}
        </React.Fragment>
    )
}
