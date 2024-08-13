import { createContext, useEffect, useState } from "react";
import { dimensionsGlobal } from "../../constantes/dimensions";
import { tema } from "../../constantes/colors";

export const LayoutContext = createContext(null);

const LayoutProvider = ({ children }) => {
    const drawerWidth = 64;
    const desktopDrawerWidth = 240;
    const [isMobile, setIsMobile] = useState(
        window.matchMedia("(max-width: 900px)").matches
    );

    useEffect(() => {
        const handleWindowResize = () => {
            setIsMobile(window.matchMedia("(max-width: 900px)").matches);
        };

        window.addEventListener("resize", handleWindowResize);

        return () => {
            window.removeEventListener("resize", handleWindowResize);
        };
    }, [])

    const [openDesktopDrawer, setOpenDesktopDrawer] = useState(false);
    const [open, setOpen] = useState(true);

    const toggleDrawer = () => {
        if (isMobile) {
            setOpen(!open);
        } else {
            setOpenDesktopDrawer(prev => ({
                ...prev,
                open: !prev.open
            }))
        }
    };
    return (
        <LayoutContext.Provider
            value={{
                toggleDrawer,
                drawerWidth,
                desktopDrawerWidth,
                open,
                openDesktopDrawer,
                setOpenDesktopDrawer,
                isMobile
            }}
        >
            {children}
        </LayoutContext.Provider>
    )
}

export default LayoutProvider;