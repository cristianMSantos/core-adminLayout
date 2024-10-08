import { Breadcrumbs, Typography } from "@mui/material"
import { RoutesContext } from "../../../context";
import { useLocation } from "react-router-dom";
import { useContext, useEffect } from "react";
import { useTheme } from "@emotion/react";

export const BreadCrumbs = () => {
    const { routes } = useContext(RoutesContext);
    const location = useLocation();
    const pathnames = location.pathname.split("/").filter((x) => x);
    const theme = useTheme();

    const breadcrumbNameMap = {};

    routes?.map((route) => {
        if (route.children) {
            route.children.map((item => {
                if (item.path) {
                    breadcrumbNameMap[item.path] = item.name;
                }
            }))
        }
    });

    // useEffect(() => {
    //     console.log(pathnames)
    //     console.log(breadcrumbNameMap['/clientes/teste'])
    // }, [pathnames])

    return (
        <div role="presentation">
            <Breadcrumbs separator={<span style={{ color: '#fff' }}> / </span>} aria-label="breadcrumb">
                {pathnames.length <= 0 ? (
                    //   <Typography color="textPrimary">Home</Typography>
                    <Typography
                        component="h1"
                        variant="h6"
                        color={'#fff'}
                        noWrap
                        gutterBottom>
                        Home
                    </Typography>
                ) : null}
                {pathnames.map((value, index) => {
                    const last = index === pathnames.length - 1;
                    const to = `/${pathnames.slice(0, index + 1).join("/")}`;
                    {/* const to = pathnames; */ }

                    return last ? (
                        to !== '/home' ?
                            <Typography
                                component="h1"
                                variant="h6"
                                color={'#fff'}
                                noWrap
                                gutterBottom
                                key={to}>
                                {breadcrumbNameMap[to]}
                            </Typography>
                            :
                            <Typography
                                component="h1"
                                variant="h6"
                                color={'#fff'}
                                noWrap
                                gutterBottom
                                key={to}>
                                Home
                            </Typography>

                    ) : (

                        <Typography
                            component="h1"
                            variant="h6"
                            color={'#fff'}
                            noWrap
                            gutterBottom
                            key={to}>
                            {breadcrumbNameMap[to]}
                        </Typography>
                    );
                })}
            </Breadcrumbs>
        </div>
    )
}