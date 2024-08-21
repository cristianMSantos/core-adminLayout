import {
    Box, Button,
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
import bg from "../../assets/clone.png"
import React from "react";
import {useNavigate} from "react-router-dom";
import {LoadingButton} from "@mui/lab";
import {CadastroCard} from "./form-card/index.jsx";
export const Cadastro = () =>{


    return(
        <Grid container sx={style.container}>
            <Grid item xs={6}>
               <CadastroCard />
            </Grid>
        </Grid>
    )
}

const style = {
    container:{
        width: "100vw",
        height: "100vh",
        backgroundImage: `url(${bg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
    },
    card:{
        height: "100%"
    }
}