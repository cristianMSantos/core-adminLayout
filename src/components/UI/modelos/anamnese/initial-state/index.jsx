import {Box, Button, DialogContent, TextField, Typography} from "@mui/material";
import React from "react";
import {AlertInfo} from "../alert-info/index.jsx";
import useCustomContext from "../../../../../context/useCustomContext/index.jsx";
import {AnamneseContext} from "../../../../../context/index.js";

export const InitialState = () => {
    const {
        grupo,
        handleGrupoChange,
        handleSetGroup,
    } = useCustomContext(AnamneseContext);

    const isGroupNameEmpty = grupo === null || grupo === "";
    return (
        <>
            <AlertInfo>
                <ul>
                    <li>O grupo de anamnese é uma classificação do formulário que está criando. Preencha-o
                        abaixo.
                    </li>
                    <li>Efetue o cadastro de um nome de grupo de anamnese para iniciar o processo de
                        construção
                        dos blocos e campos da mesma.
                    </li>
                </ul>
            </AlertInfo>
            <DialogContent>
                <Box sx={{marginBottom: "1rem"}}>
                    <Typography component="h4" sx={{fontSize: "1.25rem"}}>
                        Novo Grupo de Anamnese
                    </Typography>
                    <Typography component="div" sx={{fontSize: "0.75rem"}}>
                        Digite o nome do Grupo no campo abaixo e depois, clique em Continuar.
                    </Typography>
                </Box>
                <TextField
                    autoFocus
                    margin="dense"
                    id="group-name"
                    label="Nome do Grupo de Anamnese"
                    type="text"
                    fullWidth
                    value={grupo}
                    onChange={handleGrupoChange}
                />
                <Box sx={{display: "flex", justifyContent: "flex-end", marginTop: "1rem"}}>
                    <Button variant="contained" disabled={isGroupNameEmpty}
                            onClick={handleSetGroup}>Continuar</Button>
                </Box>
            </DialogContent>
        </>
    )
}