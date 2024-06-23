import { Box, Container, CssBaseline, Toolbar } from "@mui/material"
import { Main } from "./style"
import { Outlet } from "react-router-dom"
import { Header, Sidebar } from "../../components/globals"

export const CoreLayout = () => {
    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <Header />
            <Sidebar />
            <Box
                component="main"
                sx={{
                    backgroundColor: (theme) =>
                        theme.palette.mode === 'light'
                            ? theme.palette.grey[100]
                            : theme.palette.grey[900],
                    flexGrow: 1,
                    height: '100vh',
                    overflow: 'auto',
                }}
            >
                <Toolbar />
                <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
                    <Outlet />
                </Container>
            </Box>
        </Box>
    )
}