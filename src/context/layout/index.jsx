import { createContext, useEffect, useState } from "react";
import { dimensionsGlobal } from "../../constantes/dimensions";
import { tema } from "../../constantes/colors";

export const LayoutContext = createContext(null);

const LayoutProvider = ({ children }) => {
    const drawerWidth = 240;

    const [open, setOpen] = useState(true);

    const toggleDrawer = () => {
        setOpen(!open);
    };
    return (
        <LayoutContext.Provider
            value={{
                toggleDrawer,
                drawerWidth,
                open
            }}
        >
            {children}
        </LayoutContext.Provider>
    )
}

export default LayoutProvider;