import {
    Box,
    Card,
    CardContent,
    FormControl,
    Grid,
    InputLabel, Link,
    MenuItem,
    Select,
    TextField,
    Typography
} from "@mui/material";
import { LoadingButton } from "@mui/lab";
import React from "react";
import bg from "../../../assets/clone.png";
import { useNavigate } from "react-router-dom";

export const CadastroCard = () => {
    const navigate = useNavigate();
    const [age, setAge] = React.useState('');

    const handleChange = (event) => {
        setAge(event.target.value);
    };

    const goToLogin = (event) => {
        event.preventDefault();
        navigate("/login")
    }
    return (
        <Card sx={style.card}>
            <CardContent>
                <Box sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginBottom: "1.5rem"
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
                        PSYCHOLOGY
                    </Typography>
                </Box>
                <Grid container spacing={3}>
                    <Grid item xs={12}>
                        <TextField placeholder={"Digite aqui"} label={"Nome Completo"} fullWidth type={"text"} />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField placeholder={"Digite aqui"} label={"Email"} fullWidth type="email" />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField placeholder={"Digite aqui"} label={"Telefone/Celular:"} fullWidth type="tel" />
                    </Grid>
                    <Grid item xs={12}>
                        {/* eslint-disable-next-line react/jsx-no-undef */}
                        <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label">Conte um pouco sobre você</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={age}
                                label="Conte um pouco sobre você"
                                onChange={handleChange}>
                                <MenuItem value={10}>Sou profissional individual</MenuItem>
                                <MenuItem value={20}>Sou administrador de clinica</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid item xs={12}>
                        <LoadingButton variant={"contained"} fullWidth size={"large"} loading={false} className={"button-save"}>Próximo</LoadingButton>
                    </Grid>
                    <Grid item xs={12} sx={{ textAlign: "center" }}>
                        <Typography>
                            Ao informar meus dados, eu concordo com a {" "}
                            <Link href="https://example.com/politica-de-privacidade">Política de Privacidade</Link> {" "}
                            e {" "}
                            <Link href="https://example.com/termos-de-uso">Termos de Uso</Link> {" "}
                            do PsicoManager.
                        </Typography>
                    </Grid>
                    <Grid item xs={12} sx={{ textAlign: "center" }}>
                        <Typography>
                            Já possui uma conta? <Link onClick={goToLogin}>Fazer Login</Link>
                        </Typography>
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    )
}

const style = {
    container: {
        width: "100vw",
        height: "100vh",
        backgroundImage: `url(${bg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
    },
    card: {
        height: "100%"
    }
}