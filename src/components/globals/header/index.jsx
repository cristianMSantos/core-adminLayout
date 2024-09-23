import { Avatar, Badge, Box, Divider, IconButton, ListItemIcon, Menu, MenuItem, Toolbar, Tooltip, Typography } from "@mui/material"
import { CustomAppBar } from "./style"
import { useContext, useEffect, useState } from "react"
import { LayoutContext } from "../../../context/layout"
import MenuIcon from '@mui/icons-material/Menu';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { BreadCrumbs } from "../breadcrumbs";
import PersonAdd from '@mui/icons-material/PersonAdd';
import { Logout, Settings } from "@mui/icons-material";
import { useDispatch, useSelector } from "react-redux";
import { setLogout } from "../../../store/features/Login";
import api from "../../../axios";
import { setUser } from "../../../store/features/User";
import { useTheme } from "@emotion/react";


export const Header = () => {
    const {
        toggleDrawer,
        drawerWidth,
        open,
        openDesktopDrawer,
        isMobile
    } = useContext(LayoutContext)

    const theme = useTheme()

    const dispatch = useDispatch()

    const user = useSelector((state) => state.user.user);
    const token = useSelector((state) => state.login.isAuthenticated);

    const getUser = async () => {
        const options = {
            url: `/auth/me`,
            method: "POST",
            headers: {
                "Access-Control-Allow-Origin": "*",
                Authorization: token ? `Bearer ${token}` : "",
            },
        };
        return await api(options)
            .then((response) => {
                dispatch(setUser(response.data));
            })
            .catch((error) => {
                console.error("Erro ao buscar o usuário:", error.response);
            });
    };

    useEffect(() => {
        if (token) {
            getUser();
        }
    }, [token])

    let fullName = user ? user.de_nome.toLowerCase().split(" ") : "";
    fullName = fullName
        ? fullName.map(function (parte) {
            let primeiraLetra = parte.charAt(0).toUpperCase();
            return primeiraLetra + parte.slice(1);
        })
        : "";

    const nameParts = fullName;
    const firstName = nameParts[0];
    const lastName = nameParts[nameParts.length - 1];
    const [anchorEl, setAnchorEl] = useState(null);

    const openMenuAvatar = Boolean(anchorEl);

    const handleClickMenuAvatar = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleCloseMenuAvatar = () => {
        setAnchorEl(null);
    };

    const handleClickLogout = () => {
        dispatch(setLogout());
    }


    return (
        <CustomAppBar
            drawerwidth={drawerWidth}
            position="fixed"
            ismobile={isMobile ? "true" : undefined}
            open={open}
        >
            <Toolbar
                variant="dense"
                sx={{
                    pr: '24px', // keep right padding when drawer closed
                }}
            >
                <Box sx={{
                    display: 'flex', alignItems: 'center', textAlign: 'center'
                }}>
                    {
                        (openDesktopDrawer.hasSubItems || isMobile) && (
                            <IconButton
                                edge="start"
                                color="inherit"
                                aria-label="open drawer"
                                onClick={toggleDrawer}
                                sx={{
                                    marginRight: '36px',
                                    // ...(open && { display: 'none' }),
                                }}
                            >
                                {
                                    !isMobile ? (
                                        openDesktopDrawer.open ? (
                                            <MenuOpenIcon />
                                        ) : (
                                            <MenuOpenIcon sx={{ transform: 'rotate(180deg)' }} />
                                        )
                                    ) : <MenuIcon />
                                }
                            </IconButton>
                        )
                    }
                    <BreadCrumbs />
                </Box>
                <Box sx={{ flexGrow: 1 }} />
                <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                    <IconButton color="inherit">
                        <Badge badgeContent={4} color="secondary">
                            <NotificationsIcon />
                        </Badge>
                    </IconButton>
                    <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
                        <Tooltip title="Account settings">
                            <IconButton
                                onClick={handleClickMenuAvatar}
                                size="small"
                                sx={{
                                    ml: 2,
                                    '&:focus': {
                                        outline: 'none',
                                    },
                                }}
                                aria-controls={openMenuAvatar ? 'account-menu' : undefined}
                                aria-haspopup="true"
                                aria-expanded={openMenuAvatar ? 'true' : undefined}
                            >
                                <Avatar
                                    sx={{ mr: 1, width: 32, height: 32 }}
                                    alt={user ? `${firstName} ${lastName}` : ""}
                                />
                                <Typography
                                    variant="h6"
                                    noWrap
                                    component="div"
                                    sx={{
                                        textTransform: "capitalize",
                                        color: theme.palette.primary.contrastText
                                    }}>
                                    {user ? `${firstName}` : ""}
                                </Typography>

                            </IconButton>
                        </Tooltip>
                        <Menu
                            anchorEl={anchorEl}
                            id="account-menu"
                            open={openMenuAvatar}
                            onClose={handleCloseMenuAvatar}
                            onClick={handleCloseMenuAvatar}
                            PaperProps={{
                                elevation: 0,
                                sx: {
                                    overflow: 'visible',
                                    filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                                    mt: 1.5,
                                    '& .MuiAvatar-root': {
                                        width: 32,
                                        height: 32,
                                        ml: -0.5,
                                        mr: 1,
                                    },
                                    '&::before': {
                                        content: '""',
                                        display: 'block',
                                        position: 'absolute',
                                        top: 0,
                                        right: 14,
                                        width: 10,
                                        height: 10,
                                        bgcolor: 'background.paper',
                                        transform: 'translateY(-50%) rotate(45deg)',
                                        zIndex: 0,
                                    },
                                },
                            }}
                            transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                            anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                        >
                            <MenuItem onClick={handleCloseMenuAvatar}>
                                <Avatar /> Profile
                            </MenuItem>
                            <MenuItem onClick={handleCloseMenuAvatar}>
                                <Avatar /> My account
                            </MenuItem>
                            <Divider />
                            <MenuItem onClick={handleCloseMenuAvatar}>
                                <ListItemIcon>
                                    <PersonAdd fontSize="small" />
                                </ListItemIcon>
                                Add another account
                            </MenuItem>
                            <MenuItem onClick={handleCloseMenuAvatar}>
                                <ListItemIcon>
                                    <Settings fontSize="small" />
                                </ListItemIcon>
                                Settings
                            </MenuItem>
                            <MenuItem onClick={handleClickLogout}>
                                <ListItemIcon>
                                    <Logout fontSize="small" />
                                </ListItemIcon>
                                Logout
                            </MenuItem>
                        </Menu>
                    </Box>
                </Box>
            </Toolbar>
        </CustomAppBar >
    )
}