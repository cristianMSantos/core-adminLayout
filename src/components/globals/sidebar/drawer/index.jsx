import { useContext } from "react"
import { CustomDrawer } from "./style"
import { LayoutContext } from "../../../../context/layout"
import { Divider, IconButton, List, Toolbar } from "@mui/material"
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import { mainListItems, secondaryListItems } from "./listItems";

export const Sidebar = () => {
    const {
        toggleDrawer,
        drawerWidth,
        open
    } = useContext(LayoutContext)
    return (
        <CustomDrawer
            variant="permanent"
            open={open}
            drawerwidth={drawerWidth}
        >
            <Toolbar
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'flex-end',
                    px: [1],
                }}
            >
                <IconButton onClick={toggleDrawer}>
                    <ChevronLeftIcon />
                </IconButton>
            </Toolbar>
            <Divider />
            <List component="nav">
                {mainListItems}
                <Divider sx={{ my: 1 }} />
                {/* {secondaryListItems} */}
            </List>
        </CustomDrawer>
    )
}