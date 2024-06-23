import { Box, Grid, ThemeProvider, createTheme } from "@mui/material"
import './login.css'

export const Login = () => {

    const LightTheme = createTheme({
        palette: {
            mode: 'dark',
            primary: {
                main: '#ffffff', // Cor primária definida como branco
            },
        },
    });

    const handleSubmit = async (event) => {

    }

    return (
        <>
            <Box className="content">
                <div className="wrap">
                    <Grid container className='grid-container'
                        columns={{ xs: 4, sm: 12, md: 12 }}
                        sx={{ height: '100%', width: '100%' }}
                    >
                        <Grid item xs={12} sm={12} md={12} className="grid-login">
                            <Box component="form" onSubmit={handleSubmit} className="box-login">
                                <ThemeProvider theme={LightTheme}>
                                    <Grid container className="container-login" spacing={2}>
                                        <Box className='wfm-container'>
                                            <h1 className='wfm-h1'>LOGIN</h1>
                                        </Box>
                                        <Grid item xs={12} sm={12} md={12} className='form-inputs'>
                                            <Box sx={{
                                                '& .MuiTextField-root': { mb: 2, width: '100%' },
                                                '& .MuiLoadingButton-root': { mb: 2, width: '100%', backgroundColor: '#0D5710', color: 'white' },
                                            }}>
                                                {/* <h3 className='login-title'>
                                                    <span>
                                                        Login
                                                    </span>
                                                </h3> */}
                                            </Box>
                                        </Grid>
                                    </Grid>
                                </ThemeProvider>
                            </Box>
                        </Grid>

                    </Grid>
                </div>
            </Box>
        </>
    )
}