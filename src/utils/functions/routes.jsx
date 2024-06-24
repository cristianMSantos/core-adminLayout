import { Navigate } from "react-router-dom";
import { CoreLayout } from "../../layout/core-layout";
import { Home, Login, Pagamentos } from "../../pages";

export const generateRoutes = (isAuthenticated) => [
    {
        path: "/",
        element: isAuthenticated ? <CoreLayout /> : <Navigate to="/login" />,
        children: [
            {
                index: true,
                element: <Navigate to="/home" />,
            },
            { path: "home", name: "Home", element: <Home /> },
            { path: "pagamentos", name: "Pagamentos", element: <Pagamentos /> },
        ],
    },
    {
        path: "login",
        element: isAuthenticated ? <Navigate to="/" /> : <Login />,
    },
];