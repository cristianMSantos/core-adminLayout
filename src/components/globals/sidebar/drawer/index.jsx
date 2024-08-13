import { useContext, useEffect, useState } from "react"
import { CustomDrawer } from "./style"
import { LayoutContext } from "../../../../context/layout"
import { Box, Divider, Drawer, IconButton, List, Toolbar, Typography } from "@mui/material"
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import { MainListItems, DesktopMenuList } from "./listItems";
import { useNavigate } from "react-router-dom";

export const Sidebar = () => {
    const {
        toggleDrawer,
        desktopDrawerWidth,
        drawerWidth,
        open,
        openDesktopDrawer,
        isMobile
    } = useContext(LayoutContext)
    const navigate = useNavigate();
    const [hoverDrawer, setHoverDrawer] = useState(false);

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
                variant={
                    isMobile ? "temporary" : "permanent"
                }
                open={openDesktopDrawer.open}
                ismobile={isMobile ? "true" : undefined}
                // open={hoverDrawer}
                drawerwidth={desktopDrawerWidth}
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
                </Toolbar>
                <Divider />
                <List component="nav">
                    <DesktopMenuList />
                    {/* <Divider sx={{ my: 1 }} /> */}
                </List>
            </CustomDrawer>
        </>
    )
}