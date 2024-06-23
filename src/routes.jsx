
import { useRoutes } from "react-router-dom";
import { useContext } from "react";
import { RoutesContext } from "./context";

const Router = () => {
    const { routes } = useContext(RoutesContext);
    return useRoutes(routes);
};
export default Router;
