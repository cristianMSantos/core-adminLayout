import { useContext } from "react"
import { CustomDrawer } from "./style"
import { LayoutContext } from "../../../../context/layout"
import { Box, Divider, IconButton, List, Toolbar, Typography } from "@mui/material"
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import { MainListItems, secondaryListItems } from "./listItems";
import { useNavigate } from "react-router-dom";

export const Sidebar = () => {
    const {
        toggleDrawer,
        drawerWidth,
        open
    } = useContext(LayoutContext)
    const navigate = useNavigate();
    return (
        <CustomDrawer
            variant="permanent"
            open={open}
            drawerwidth={drawerWidth}
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
        </CustomDrawer>
    )
}