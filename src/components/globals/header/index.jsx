import { Badge, Box, IconButton, Toolbar, Typography } from "@mui/material"
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
        open,
        openDesktopDrawer,
        isMobile
    } = useContext(LayoutContext)


    return (
        <CustomAppBar
            drawerwidth={drawerWidth}
            position="fixed"
            ismobile={isMobile ? "true" : undefined}
            open={open}
        >
            <Toolbar
                variant="dense"
                sx={{
                    pr: '24px', // keep right padding when drawer closed
                }}
            >
                <Box sx={{
                    display: 'flex',
                    alignItems: 'baseline'
                }}>

                    {/* <Typography
                        variant="h6"
                        noWrap
                        // component="a"
                        onClick={() => navigate('/home')}
                        sx={{
                            mr: 4,
                            display: { xs: 'none', md: 'flex' },
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                    >
                        PSYCHOLOGY
                    </Typography> */}
                    {
                        (openDesktopDrawer.open || isMobile) && (
                            <IconButton
                                edge="start"
                                color="inherit"
                                aria-label="open drawer"
                                onClick={toggleDrawer}
                                sx={{
                                    marginRight: '36px',
                                    // ...(open && { display: 'none' }),
                                }}
                            >
                                <MenuIcon />
                            </IconButton>
                        )
                    }
                    <BreadCrumbs />
                </Box>
                <Box sx={{ flexGrow: 1 }} />
                <IconButton color="inherit">
                    <Badge badgeContent={4} color="secondary">
                        <NotificationsIcon />
                    </Badge>
                </IconButton>
            </Toolbar>
        </CustomAppBar>
    )
}