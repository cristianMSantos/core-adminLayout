import {
    Box,
    Grid,
    IconButton,
    InputAdornment,
    TextField,
    ThemeProvider,
    Typography,
    createTheme,
    Button, Link
} from "@mui/material"
import { useContext, useEffect } from "react";
import { LoginContext } from "../../../context/login";
import { Visibility, VisibilityOff } from '@mui/icons-material';
import '../login.css'
import { LoadingButton } from "@mui/lab";
import { useNavigate } from "react-router-dom";

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
        loading,
        errorLogin
    } = useContext(LoginContext)
    const navigate = useNavigate();
    const LightTheme = createTheme({
        palette: {
            mode: 'light',
            primary: {
                main: '#000',
            },
        },
    });

    useEffect(() => {
        console.log(errorLogin)
    }, [errorLogin])
    const handleLinkClick = (event) => {
        event.preventDefault(); // Previne o comportamento padrão da tag anchor
        navigate('/cadastro');
    };
    return (
        <Box className="content">
            <Grid container className='grid-container'
                columns={{ xs: 4, sm: 12, md: 12 }}
                sx={{ height: '100%', width: '100%', justifyContent: 'center' }}
            >
                <Grid item xs={12} sm={4} md={4} className="grid-login">
                    <Box component="form" onSubmit={handleSubmit} className="box-login">
                        <ThemeProvider theme={LightTheme}>
                            <Grid container className="container-login">
                                <Grid item xs={12} sm={12} md={12} className='form-inputs'>
                                    <Box sx={{
                                        'margin': '30px',
                                        '& .MuiTextField-root': { mb: 2, width: '100%' },
                                        '& .MuiLoadingButton-root': { mb: 2, width: '100%', backgroundColor: '#0D5710', color: 'white' },
                                    }}>
                                        <Box sx={{
                                            display: 'flex',
                                            flexDirection: 'column',
                                            justifyContent: 'center',
                                            alignItems: 'center'
                                        }}>
                                            <img src={window.location.host === 'codecase.com.br' ? "/psicologia/images/Logo2.png" : "/images/Logo2.png"} width={'100'} height={'100'} />
                                            <Typography
                                                variant="h5"
                                                noWrap
                                                // component="a"
                                                sx={{
                                                    display: { xs: 'none', md: 'flex' },
                                                    fontFamily: 'monospace',
                                                    fontWeight: 700,
                                                    letterSpacing: '.3rem',
                                                    color: 'inherit',
                                                    textDecoration: 'none',
                                                }}
                                            >
                                                EXAMPLE
                                            </Typography>
                                        </Box>
                                        <TextField
                                            variant="standard"
                                            // error={error['email']}
                                            // helperText={messageError['email']}
                                            onChange={(event) => handleRules(event.target.value, 'email')}
                                            required
                                            id="email"
                                            name="email"
                                            label="Email:"
                                            autoComplete="email"
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
                                            label="Senha:"
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
                                        <p className='teste'>
                                            Usuário e Senha Teste é 'admin'
                                        </p>
                                        {
                                            errorLogin ?
                                                <p className='errorLogin'>
                                                    Usuário ou Senha Incorreto!
                                                </p> : false
                                        }
                                        <LoadingButton className='button-save' loading={loading} type="submit" variant="contained">
                                            {showResetPassword ? 'Salvar' : 'Acessar'}
                                        </LoadingButton>
                                        <Box sx={{ display: "flex", justifyContent: "center" }}>
                                            <Link href="/cadastro" onClick={handleLinkClick} target="_blank" rel="noopener">
                                                Criar uma nova conta
                                            </Link>
                                        </Box>

                                    </Box>
                                </Grid>
                            </Grid>
                        </ThemeProvider>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    )
}