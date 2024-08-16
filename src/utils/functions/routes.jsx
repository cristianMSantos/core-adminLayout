import { Navigate } from "react-router-dom";
import { CoreLayout } from "../../layout/core-layout";
import { Home, Login,ModeloAnamnese, Clientes, Agenda, Financeiro, Relatorio, MyClinica } from "../../pages";

export const generateRoutes = (isAuthenticated) => [
    {
        path: "/",
        name: "Home",
        element: isAuthenticated ? <CoreLayout /> : <Navigate to="/login" />,
        children: [
            {
                index: true,
                element: <Navigate to="/home" />,
            },
            { path: "home", name: "Home", element: <Home /> },
            { path: "/clientes", name: "Clientes", element: <Clientes /> },

            { path: "/clientes/listagem", name: "Listagem", element: <MyClinica /> },
            { path: "/clientes/cadastro", name: "Cadastro", element: <MyClinica /> },

            { path: "/agenda", name: "Agenda", element: <Agenda /> },
            { path: "/financeiro", name: "Financeiro", element: <Financeiro /> },
            { path: "/relatorio", name: "Relatório", element: <Relatorio /> },
            { path: "/configuracoes/modelos/anamnese", name: "Configurações", element: <ModeloAnamnese /> },
            { path: "/myclinica", name: "Minha Clínica", element: <MyClinica /> }
            
            // { path: "pagamentos", name: "Pagamentos", element: <Pagamentos /> },
        ],
    },
    {
        path: "login",
        element: isAuthenticated ? <Navigate to="/" /> : <Login />,
    },
];
