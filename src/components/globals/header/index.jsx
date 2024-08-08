import { Badge, IconButton, Toolbar, Typography } from "@mui/material"
import { CustomAppBar } from "./style"
import { useContext, useEffect, useState } from "react"
import { LayoutContext } from "../../../context/layout"
import MenuIcon from '@mui/icons-material/Menu';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { BreadCrumbs } from "../breadcrumbs";


export const Header = () => {
    const {
        toggleDrawer,
        drawerWidth,
        open
    } = useContext(LayoutContext)

    return (
        <CustomAppBar
            drawerwidth={drawerWidth}
            position={"absolute"}
            open={open}
        >
            <Toolbar
                sx={{
                    pr: '24px', // keep right padding when drawer closed
                }}
            >
                <IconButton
                    edge="start"
                    color="inherit"
                    aria-label="open drawer"
                    onClick={toggleDrawer}
                    sx={{
                        marginRight: '36px',
                        ...(open && { display: 'none' }),
                    }}
                >
                    <MenuIcon />
                </IconButton>
                <BreadCrumbs />
                {/* <Typography
                    component="h1"
                    variant="h6"
                    color="inherit"
                    noWrap
                    sx={{ flexGrow: 1 }}
                >
                    Dashboard
                </Typography> */}
                <IconButton color="inherit">
                    <Badge badgeContent={4} color="secondary">
                        <NotificationsIcon />
                    </Badge>
                </IconButton>
            </Toolbar>
        </CustomAppBar>
    )
}