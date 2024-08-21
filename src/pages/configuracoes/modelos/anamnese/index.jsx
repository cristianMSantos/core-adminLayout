import React from "react";
import {Alert, Box, Button, Tab, Tabs} from "@mui/material";

import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import AddIcon from '@mui/icons-material/Add';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import {a11yProps, RefactorDialog, TabPanel} from "../../../../components";
import useCustomContext from "../../../../context/useCustomContext/index.jsx";
import {AnamneseContext} from "../../../../context/index.jsx";
import "./index.css"

export const ModeloAnamnese = () => {
    const {handleToggleDialog, openCreate} = useCustomContext(AnamneseContext);
    return (
        <>
            {!openCreate && (
                <>
                    <Box sx={{borderBottom: 1, borderColor: 'divider'}}>
                        <Tabs value={0} onChange={() => {
                        }} aria-label="basic tabs example">
                            <Tab label="Anamnese" {...a11yProps(0)} />
                        </Tabs>
                    </Box>
                    <TabPanel value={0} index={0}>
                        <Alert icon={<InfoOutlinedIcon fontSize="inherit"/>} severity="info">
                            Nesse módulo você encontra grupos e formulários padrões de anamnese, basta importar os
                            modelos no
                            botão Importar Novos modelos.

                            Caso você queira criar um formulário de anamnese do zero, clique no botão Adicionar grupo de
                            anamnese e siga os passos.
                        </Alert>
                        <Box sx={{marginTop: "1rem", width: "100%", display: "flex", justifyContent: "space-between"}}>
                            <Button variant="contained" startIcon={<AddIcon/>} onClick={handleToggleDialog}>Adicionar
                                Grupo de
                                Anamnese</Button>
                            <Button variant="outlined" startIcon={<CloudUploadIcon/>} disabled>Importar Modelos</Button>
                        </Box>
                    </TabPanel>
                </>
            )}
            <RefactorDialog/>
        </>
    );
};