import React, { createContext, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { generateRoutes } from "../../utils/functions/routes";

export const RoutesContext = createContext(null);

const RoutesProvider = ({ children }) => {
    const token = useSelector((state) => state.login.isAuthenticated);
    const isAuthenticated = true
    const [routes, setRoutes] = useState(generateRoutes(isAuthenticated));

    useEffect(() => {
        setRoutes(generateRoutes(isAuthenticated));
    }, [token]);
    return (
        <RoutesContext.Provider value={{ routes }}>
            {children}
        </RoutesContext.Provider>
    );
};

export default RoutesProvider;