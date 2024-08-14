import { Drawer, styled, SwipeableDrawer } from "@mui/material";

export const CustomDrawer = styled(SwipeableDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open, drawerwidth, ismobile, hassubitems }) => {
        const isMobile = ismobile === "true" || ismobile === true;
        const hasSubItems = hassubitems === "true" || hassubitems === true;
        return {
            '& .MuiDrawer-paper': {
                position: 'relative',
                whiteSpace: 'nowrap',
                width: isMobile ? '100%' : `${drawerwidth}px`,
                transition: theme.transitions.create('width', {
                    easing: theme.transitions.easing.sharp,
                    duration: theme.transitions.duration.enteringScreen,
                }),
                boxSizing: 'border-box',
                ...(!open && {
                    overflowX: 'hidden',
                    transition: theme.transitions.create('width', {
                        easing: theme.transitions.easing.sharp,
                        duration: theme.transitions.duration.leavingScreen,
                    }),
                    width: hasSubItems ? theme.spacing(3) : theme.spacing(0),
                    [theme.breakpoints.up('sm')]: {
                        width: hasSubItems ? theme.spacing(3) : theme.spacing(0),
                    },
                }),
            },
        }
    },
);