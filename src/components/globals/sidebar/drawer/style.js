import { Drawer, styled } from "@mui/material";

export const CustomDrawer = styled(Drawer, { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open, drawerwidth, ismobile }) => {
        const isMobile = ismobile === "true" || ismobile === true;
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
                    width: theme.spacing(0),
                    [theme.breakpoints.up('sm')]: {
                        width: theme.spacing(0),
                    },
                }),
            },
        }
    },
);