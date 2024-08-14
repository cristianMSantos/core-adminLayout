import { useContext, useEffect, useState } from "react"
import { CustomDrawer } from "./style"
import { LayoutContext } from "../../../../context/layout"
import { Box, Button, Divider, Drawer, IconButton, List, Toolbar, Typography } from "@mui/material"
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import { MainListItems, DesktopMenuList } from "./listItems";
import { useNavigate } from "react-router-dom";
import { grey } from '@mui/material/colors';
import styled from "styled-components";

export const Sidebar = () => {
    const {
        toggleDrawer,
        desktopDrawerWidth,
        drawerWidth,
        open,
        openDesktopDrawer,
        setOpenDesktopDrawer,
        isMobile
    } = useContext(LayoutContext)
    const navigate = useNavigate();
    const [hoverDrawer, setHoverDrawer] = useState(false);

    const Puller = styled('div')(({ theme }) => ({
        width: 6,
        height: 30,
        backgroundColor: grey[300],
        borderRadius: 3,
        position: 'absolute',
        right: 8,
    }));


    return (
        <>
            <Drawer
                variant={
                    isMobile ? "temporary" : "permanent"
                }
                open={open}
                sx={{
                    width: isMobile ? "unset" : drawerWidth,
                    flexShrink: 0,
                    "& .MuiDrawer-paper": {
                        // backgroundColor: '#1976d2',
                        overflow: 'hidden',
                        width: isMobile ? "unset" : drawerWidth,
                        boxSizing: "border-box",
                        // boxShadow: "0px 5px 15px rgba(0, 0, 0, 0.35) !important",
                        boxShadow: "unset !important",
                    },
                }}
            // onMouseEnter={() => setHoverDrawer(true)}
            // onMouseLeave={() => setHoverDrawer(false)}
            >
                <Toolbar
                    variant="dense"
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'flex-end',
                        px: [1],
                    }}
                >
                    <Box sx={{ display: { xs: 'none', md: 'flex' }, }} width={'100%'} justifyContent={'center'} alignContent={'center'}>
                        <img src="/images/Logo2.png" width={'45'} height={'45'} />
                    </Box>
                    {/* <Box sx={{ display: { xs: 'none', md: 'flex' }, }} width={'100%'} justifyContent={'center'} alignContent={'center'}>
                    <Typography
                        variant="h6"
                        noWrap
                        component="a"
                        onClick={() => navigate('/home')}
                        sx={{
                            mr: 2,
                            display: { xs: 'none', md: 'flex' },
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                    >
                        PSICOLOGY
                    </Typography>
                </Box>
                <IconButton onClick={toggleDrawer}>
                    <ChevronLeftIcon />
                </IconButton> */}
                </Toolbar>
                <Divider />
                <List component="nav">
                    <MainListItems />
                    <Divider sx={{ my: 1 }} />
                    {/* {secondaryListItems} */}
                </List>
            </Drawer>
            <CustomDrawer
                anchor="left"
                variant={
                    isMobile ? "temporary" : "permanent"
                }
                open={openDesktopDrawer.open}
                hassubitems={openDesktopDrawer.hasSubItems ? "true" : undefined}
                ismobile={isMobile ? "true" : undefined}
                drawerwidth={desktopDrawerWidth}
                onOpen={() => { }}
                onClose={() => { }}
            >

                <Box>
                    <Toolbar
                        variant="dense"
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'flex-end',
                            px: [1],
                        }}
                    >
                    </Toolbar>
                    <Divider />
                    <List component="nav">
                        <DesktopMenuList />
                        {/* <Divider sx={{ my: 1 }} /> */}
                    </List>
                </Box>
                {
                    !openDesktopDrawer.open && (
                        <Box
                            component="button"
                            onClick={toggleDrawer}
                            sx={{
                                position: 'absolute',
                                borderTopLeftRadius: 8,
                                borderTopRightRadius: 8,
                                visibility: 'visible',
                                right: 0,
                                height: '100%',
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                justifyContent: 'center',
                                '&:hover': {
                                    backgroundColor: '#b9d2f170',
                                    border: 'transparent'
                                },
                            }}
                        >
                            <Puller />
                        </Box>
                    )
                }

            </CustomDrawer>
        </>
    )
}