import { Box, Grid, IconButton, InputAdornment, TextField, ThemeProvider, createTheme } from "@mui/material"
import { useContext } from "react";
import { LoginContext } from "../../../context/login";
import { Visibility, VisibilityOff } from '@mui/icons-material';
import '../login.css'
import { LoadingButton } from "@mui/lab";

export const LoginContainer = () => {
    const {
        error,
        messageError,
        handleRules,
        showResetPassword,
        showPassword,
        handleSubmit,
        handleClickShowPassword,
        handleMouseDownPassword,
        loading
    } = useContext(LoginContext)

    const LightTheme = createTheme({
        palette: {
            mode: 'dark',
            primary: {
                main: '#ffffff',
            },
        },
    });
    return (
        <Box className="content">
            <div className="wrap">
                <Grid container className='grid-container'
                    columns={{ xs: 4, sm: 12, md: 12 }}
                    sx={{ height: '100%', width: '100%' }}
                >
                    <Grid item xs={6} sm={6} md={6} className='grid-slider'>
                        <Box className='wfm-container'>
                            <h1 className='wfm-h1'>LOGIN</h1>
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={6} md={6} className="grid-login">
                        <Box component="form" onSubmit={handleSubmit} className="box-login">
                            <ThemeProvider theme={LightTheme}>
                                <Grid container className="container-login" spacing={2}>
                                    <Grid item xs={6} sm={6} md={6} className='form-inputs'>
                                        <Box sx={{
                                            '& .MuiTextField-root': { mb: 2, width: '100%' },
                                            '& .MuiLoadingButton-root': { mb: 2, width: '100%', backgroundColor: '#0D5710', color: 'white' },
                                        }}>
                                            {/* <h3 className='login-title'>
                                            <span>
                                                Login
                                            </span>
                                        </h3> */}
                                            <TextField
                                                variant="standard"
                                                error={error['matricula']}
                                                helperText={messageError['matricula']}
                                                onChange={(event) => handleRules(event.target.value, 'matricula')}
                                                required
                                                id="matricula"
                                                name="matricula"
                                                label="Matricula"
                                                autoComplete="matricula"
                                                InputProps={{
                                                    readOnly: showResetPassword,
                                                    style: {
                                                        borderBottom: '2px solid rgba(0, 0, 0, 0.3)',
                                                        opacity: '0.3',
                                                    },
                                                }}

                                            />
                                            <TextField
                                                variant="standard"
                                                error={error['senha']}
                                                helperText={messageError['senha']}
                                                onChange={(event) => handleRules(event.target.value, 'senha')}
                                                required
                                                id="password"
                                                name="password"
                                                label="Senha"
                                                type={showPassword ? 'text' : 'password'}
                                                InputProps={{
                                                    endAdornment: (
                                                        <InputAdornment position="end">
                                                            <IconButton
                                                                aria-label="toggle password visibility"
                                                                onClick={handleClickShowPassword}
                                                                onMouseDown={handleMouseDownPassword}
                                                            >
                                                                {showPassword ? <VisibilityOff /> : <Visibility />}
                                                            </IconButton>
                                                        </InputAdornment>
                                                    ),
                                                    style: {
                                                        borderBottom: '2px solid rgba(0, 0, 0, 0.3)',
                                                        opacity: '0.3',
                                                    },
                                                }}
                                            />
                                            <LoadingButton className='button-save' loading={loading} type="submit" variant="contained">
                                                {showResetPassword ? 'Salvar' : 'Acessar'}
                                            </LoadingButton>
                                        </Box>
                                    </Grid>
                                </Grid>
                            </ThemeProvider>
                        </Box>
                    </Grid>
                </Grid>
            </div>
        </Box>
    )
}