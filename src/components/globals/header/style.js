import { AppBar } from "@mui/material";
import { styled } from "@mui/system";

export const CustomAppBar = styled(AppBar, {
    shouldForwardProp: (prop) => prop !== 'open' && prop !== 'ismobile',
})(({ theme, open, drawerwidth, ismobile }) => {
    const isMobile = ismobile === "true" || ismobile === true;
    return {
        width: isMobile ? '100%' : `calc(100% - ${drawerwidth}px)`,
        zIndex: theme.zIndex.drawer + 1,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        ...(open && {
            transition: theme.transitions.create(['width', 'margin'], {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.enteringScreen,
            }),
        }),
    };
});
