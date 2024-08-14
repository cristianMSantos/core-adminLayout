import { Collapse, List, ListItemButton, ListItemIcon, ListItemText, ListSubheader, Tooltip } from "@mui/material";
import * as Icons from "@mui/icons-material";
import { useContext, useEffect, useState } from "react";
import { LayoutContext } from "../../../../../context/layout";

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

export const MenuItem = (
    {
        onClick,
        openMenu,
        menuItem,
        onClickSubItem
    }
) => {

    const {
        setOpenDesktopDrawer
    } = useContext(LayoutContext)
    const handleClick = (menu) => {
        onClick(menu.id)
        setOpenDesktopDrawer({
            id: menu.id,
            open: menu.hasSubItems,
            hasSubItems: menu.hasSubItems
        })
    }

    const {
        isMobile
    } = useContext(LayoutContext)

    return (
        <>
            <Tooltip
                title={menuItem.text}
                placement="right-start"
                arrow
            >
                <ListItemButton onClick={() => handleClick(menuItem)}>
                    <ListItemIcon>
                        <IconComponent iconName={menuItem.icon} />
                    </ListItemIcon>
                    <ListItemText
                        primary={menuItem.text}
                    />
                    {menuItem.hasSubItems &&
                        (openMenu?.[menuItem.id] ? (
                            <Icons.ExpandMore
                                sx={{
                                    minWidth: 0,
                                }}
                            />
                        ) : (
                            <Icons.ChevronRight
                                sx={{
                                    minWidth: 0,
                                }}
                            />
                        ))}
                </ListItemButton>
            </Tooltip>

            {menuItem.hasSubItems && isMobile && (
                <Collapse in={openMenu?.[menuItem.id]} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding sx={{ paddingLeft: { xs: 'none', md: '15px' } }}>
                        {menuItem.subItems.map((subItem) => (
                            <ListItemButton
                                key={subItem.id}
                                onClick={() => onClickSubItem(menuItem.id, subItem)}
                            >
                                <IconComponent iconName={subItem.icon} />
                                <ListItemText
                                    primary={subItem.text}
                                    sx={{ opacity: "0.7" }}
                                />
                            </ListItemButton>
                        ))}
                    </List>
                </Collapse>
            )}
        </>
    )
}