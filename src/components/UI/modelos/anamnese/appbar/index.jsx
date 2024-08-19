import {AppBar, Button, IconButton, Toolbar, Typography} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close.js";
import React from "react";
import useCustomContext from "../../../../../context/useCustomContext/index.jsx";
import {AnamneseContext} from "../../../../../context/index.jsx";

export const AnamneseAppBar = () => {
    const {
        handleToggleDialog,
        isGrupoSetted,
        grupo
    } = useCustomContext(AnamneseContext);
    return (
        <AppBar sx={{position: 'relative'}}>
            <Toolbar>
                <IconButton edge="start" color="inherit" onClick={handleToggleDialog} aria-label="close">
                    <CloseIcon/>
                </IconButton>
                <Typography sx={{ml: 2, flex: 1}} variant="h6" component="div">
                    {!isGrupoSetted ? " Novo Grupo de Anamnese" : grupo}
                </Typography>
                <Button autoFocus color="inherit" onClick={() => {
                }} disabled>
                    Salvar
                </Button>
            </Toolbar>
        </AppBar>
    )
}