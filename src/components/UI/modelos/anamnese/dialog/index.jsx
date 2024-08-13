import {Transition} from "../transition/index.jsx";
import {
    Alert,
    AppBar,
    Box,
    Button,
    Dialog,
    DialogContent, Fab,
    IconButton, Stack,
    TextField,
    Toolbar, Tooltip,
    Typography
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close.js";
import AddIcon from '@mui/icons-material/Add';
import React from "react";
import useCustomContext from "../../../../../context/useCustomContext/index.jsx";
import {AnamneseContext} from "../../../../../context/index.js";
import CheckIcon from '@mui/icons-material/Check';
// eslint-disable-next-line react/prop-types
export const AnamneseDialog = () =>{
    const {openCreate,
        handleToggleDialog,
        grupo,
        handleGrupoChange,
        isGrupoSetted,
        handleSetGroup,
        iniciar,
        handleIniciar,
        adicionarBloco,
        newBloco,
        handleChangeNewBloco,
        handleAddBloco,
        bloco,
        handleCriarNovoBloco,
        handleCancelarNewBloco
    } = useCustomContext(AnamneseContext);
    return(
        <Dialog onClose={handleToggleDialog} open={openCreate} fullScreen  TransitionComponent={Transition}>
            <AppBar sx={{ position: 'relative' }}>
                <Toolbar>
                    <IconButton
                        edge="start"
                        color="inherit"
                        onClick={handleToggleDialog}
                        aria-label="close"
                    >
                        <CloseIcon />
                    </IconButton>
                    <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
                        {!isGrupoSetted ? " Novo Grupo de Anamnese" : grupo}
                    </Typography>
                    <Button autoFocus color="inherit" onClick={()=>{}} disabled>
                        Salvar
                    </Button>
                </Toolbar>
            </AppBar>
            {!isGrupoSetted && (
                <Alert severity="info" sx={{
                    display: 'flex',
                    alignItems: 'center'
                }}>
                    <ul>
                        <li>O grupo de anamnese é uma classificação do formulário que está criando. Preencha-o abaixo.</li>
                        <li>Efetue o cadastro de um nome de grupo de anamnese para iniciar o processo de construção dos blocos e campos da mesma.</li>
                    </ul>
                </Alert>
            )}


                {!isGrupoSetted && (
                    <>
                    <DialogContent>
                        <Box sx={{marginBottom:"1rem"}}>
                            <Typography component="h4" sx={{fontSize:"1.25rem"}}>
                                Novo Grupo de Anamnese
                            </Typography>
                            <Typography component="div" sx={{fontSize:"0.75rem"}}>
                                Digite o nome do Grupo no campo abaixo e depois, clique em Continuar.
                            </Typography>
                        </Box>
                        <TextField
                            autoFocus
                            margin="dense"
                            id="name"
                            label="Nome do Grupo de Anamnese"
                            type="text"
                            fullWidth
                            value={grupo}
                            onChange={handleGrupoChange}
                        />
                        <Box sx={{display:"flex", justifyContent:"flex-end", marginTop:"1rem"}}>
                            <Button variant="contained" disabled={grupo === null || grupo === ""} onClick={handleSetGroup}>Continuar</Button>
                        </Box>
                    </DialogContent>
                    </>
                )}
                {isGrupoSetted && (
                    <>
                        {!iniciar && (
                            <>
                                <Alert severity="info" sx={{
                                    display: 'flex',
                                    alignItems: 'center'
                                }}>
                                    <Typography>Blocos da Anamnese</Typography>
                                    <Typography sx={{fontSize:"0.75rem"}}>Os blocos da anamnese são compostos por um conjunto de perguntas que tem um mesmo tema em comum para facilitar o processo de preenchimento.</Typography>
                                </Alert>
                                <DialogContent>
                                    <Box sx={{width:"100%", display:"flex", justifyContent:"center", marginTop:"1rem"}}>
                                        <Tooltip title="Adicionar Bloco">
                                            <Fab color="primary" aria-label="add" onClick={handleIniciar}>
                                                <AddIcon sx={{fontSize:"3rem"}} />
                                            </Fab>
                                        </Tooltip>
                                    </Box>
                                </DialogContent>
                            </>
                        )}
                        {iniciar && (
                           <>
                               {bloco.lenght == 0 && (
                                   <Alert
                                       severity="info"
                                       sx={{
                                       display: 'flex',
                                       alignItems: 'center'
                                   }}
                                   >
                                       <Typography>Bloco é uma forma prática de organizar melhor o seu formulário de anamnese. Digite o nome do novo bloco abaixo e clique em salvar para adicioná-lo:</Typography>
                                   </Alert>
                               )}
                               {!adicionarBloco && (
                                   <Box sx={{width:"100%", display:"flex", justifyContent:"flex-end", marginTop:"1rem"}}>
                                       <Button startIcon={<AddIcon/>} variant={"contained"} color={"primary"} onClick={handleCriarNovoBloco}>
                                            Adicionar Bloco
                                        </Button>
                                   </Box>
                               )}
                           </>
                        )}
                        {
                            bloco.map((item, index) => (
                                <React.Fragment key={index}>
                                    <Alert severity="success" color="warning" sx={{marginTop:"1rem"}}>
                                        {item}
                                    </Alert>
                                </React.Fragment>
                            ))
                        }

                        {adicionarBloco && (
                            <>

                                <DialogContent>
                                <TextField
                                    autoFocus
                                    margin="dense"
                                    id="novoBloco"
                                    label="Nome do novo Bloco"
                                    type="text"
                                    fullWidth
                                    value={newBloco}
                                    onChange={handleChangeNewBloco}
                                />
                                    <Box sx={{width:"100%", display:"flex", justifyContent:"center"}}>
                                        <Stack spacing={2} direction="row">
                                            <Button
                                                disabled={newBloco === null || newBloco === ""}
                                                variant={"contained"}
                                                color={"primary"}
                                                startIcon={<CheckIcon/>}
                                                onClick={handleAddBloco}>Salvar Bloco</Button>
                                            <Button variant={"outlined"} color={"error"} sx={{color:"gray", borderColor:"gray"}} onClick={handleCancelarNewBloco}>Cancelar</Button>
                                        </Stack>
                                    </Box>
                                </DialogContent>
                            </>
                        )}
                    </>


                )}


        </Dialog>
    )
}