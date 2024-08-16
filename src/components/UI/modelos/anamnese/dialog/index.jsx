import {
    Alert,
    AppBar,
    Box,
    Button,
    Dialog,
    DialogContent,
    DialogTitle,
    Fab,
    FormControl,
    FormControlLabel,
    FormLabel,
    Grid,
    IconButton,
    Radio,
    RadioGroup,
    Stack,
    TextField,
    Toolbar,
    Tooltip,
    Typography
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import AddIcon from '@mui/icons-material/Add';
import CheckIcon from '@mui/icons-material/Check';
import React from "react";
import useCustomContext from "../../../../../context/useCustomContext";
import {AnamneseContext} from "../../../../../context";
import {Transition} from "../transition";
import * as PropTypes from "prop-types";
import checkBoxIcon from "../../../../../assets/checkbox.svg";
import textIcon from "../../../../../assets/textfield.svg";
import selectIcon from "../../../../../assets/select.svg";

const AlertInfo = ({children}) => (
    <Alert severity="info" sx={{display: 'flex', alignItems: 'center'}}>
        {children}
    </Alert>
);

function DialogNewField(props) {
    const [campo, setCampo] = React.useState(null);
    const [showOptions, setShowOptions] = React.useState(false);
    const handleChangeTypeField = (event) => {
        setCampo(event.target.value);

        if (event.target.value === "select" || event.target.value === "multiselect") {
            setShowOptions(true);
        } else {
            setShowOptions(false);
        }
    };
    return <Dialog onClose={props.onClose} open={props.open}>
        <DialogTitle sx={{display: "flex", justifyContent: "space-between", alignItems: "center"}}>
            <Typography>
                Adicionar campo de questões
            </Typography>
            <IconButton onClick={props.onClose}><CloseIcon/></IconButton>
        </DialogTitle>
        <Alert severity="info" sx={{marginTop: "1rem"}}>
            Informe a questão
        </Alert>
        <DialogContent>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <TextField autoFocus={true} label={"Pergunta/Orientações"} name={"Pergunta/Orientações"} fullWidth/>
                </Grid>
                <Grid item xs={12}>
                    <FormControl>
                        <FormLabel id="demo-radio-buttons-group-label">Escolha o tipo de campo de resposta:</FormLabel>
                        <RadioGroup
                            aria-labelledby="demo-radio-buttons-group-label"
                            name="radio-buttons-group"
                            value={campo}
                            onChange={handleChangeTypeField}
                        >
                            <FormControlLabel value="text" control={<Radio/>}
                                              label={<div style={{display: "flex", alignItems: "center"}}>
                                                  <img src={textIcon} alt={"checkbox icon"}
                                                       style={{width: "1.5rem"}}/>
                                                  <Typography>Campo de Texto Menor</Typography>
                                              </div>}/>
                            <FormControlLabel value="textMultiline" control={<Radio/>}
                                              label={<div style={{display: "flex", alignItems: "center"}}>
                                                  <img src={textIcon} alt={"checkbox icon"}
                                                       style={{width: "1.5rem"}}/>
                                                  <Typography>Campo de Texto Maior</Typography>
                                              </div>}/>
                            <FormControlLabel value="selectBit" control={<Radio/>}
                                              label={<div style={{display: "flex", alignItems: "center"}}>
                                                  <img src={selectIcon} alt={"checkbox icon"}
                                                       style={{width: "1.5rem"}}/>
                                                  <Typography>Selecionar apenas 1 item (sim e não)</Typography>
                                              </div>}/>
                            <FormControlLabel value="select" control={<Radio/>}
                                              label={<div style={{display: "flex", alignItems: "center"}}>
                                                  <img src={selectIcon} alt={"checkbox icon"}
                                                       style={{width: "1.5rem"}}/>
                                                  <Typography>Selecionar apenas 1 item</Typography>
                                              </div>}/>
                            {/*a*/}
                            <FormControlLabel value="multiselect" control={<Radio/>} label={
                                <div style={{display: "flex", alignItems: "center"}}>
                                    <img src={checkBoxIcon} alt={"checkbox icon"} style={{width: "1.5rem"}}/>
                                    <Typography>Selecionar vários itens</Typography>
                                </div>
                            }/>
                        </RadioGroup>
                    </FormControl>
                </Grid>
                {showOptions && (
                    <>
                        <Grid item xs={12}>
                            <Alert severity="warning"> Informe as opções do campo</Alert>
                        </Grid>
                        <Grid item xs={12} sx={{display: "flex", justifyContent: "flex-end"}}>
                            <Button variant={"contained"} color={"warning"}>Adicionar Opção</Button>
                        </Grid>
                    </>
                )}
                <Grid item xs={12}>
                    <Grid container spacing={2}>
                        <Grid item xs={8}></Grid>
                        <Grid item xs={2}><Button onClick={props.onClose}>Fechar</Button></Grid>
                        <Grid item xs={2}> <Button variant={"contained"}>Salvar</Button></Grid>
                    </Grid>
                </Grid>
            </Grid>

        </DialogContent>
    </Dialog>;
}

DialogNewField.propTypes = {
    onClose: PropTypes.func,
    open: PropTypes.bool
};
export const AnamneseDialog = () => {
    const {
        openCreate,
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

    const isGroupNameEmpty = grupo === null || grupo === "";
    const isBlockNameEmpty = newBloco === null || newBloco === "";


    const [openTeste, setOpenTeste] = React.useState(false);

    const handleCloseTeste = () => {
        setOpenTeste(false);
    }
    return (
        <>
            <Dialog onClose={handleToggleDialog} open={openCreate} fullScreen TransitionComponent={Transition}>
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
                {!isGrupoSetted ? (
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
                ) : (
                    <>
                        {!iniciar && (
                            <>
                                <AlertInfo>
                                    <Typography>Blocos da Anamnese</Typography>
                                    <Typography sx={{fontSize: "0.75rem"}}>
                                        Os blocos da anamnese são compostos por um conjunto de perguntas que tem um
                                        mesmo
                                        tema em comum para facilitar o processo de preenchimento.
                                    </Typography>
                                </AlertInfo>
                                <DialogContent>
                                    <Box sx={{
                                        width: "100%",
                                        display: "flex",
                                        justifyContent: "center",
                                        marginTop: "1rem"
                                    }}>
                                        <Tooltip title="Adicionar Bloco">
                                            <Fab color="primary" aria-label="add" onClick={handleIniciar}>
                                                <AddIcon sx={{fontSize: "3rem"}}/>
                                            </Fab>
                                        </Tooltip>
                                    </Box>
                                </DialogContent>
                            </>
                        )}
                        {iniciar && (
                            <>
                                {bloco.length === 0 && (
                                    <AlertInfo>
                                        <Typography>
                                            Bloco é uma forma prática de organizar melhor o seu formulário de anamnese.
                                            Digite o nome do novo bloco abaixo e clique em salvar para adicioná-lo:
                                        </Typography>
                                    </AlertInfo>
                                )}
                                {!adicionarBloco && (
                                    <Box sx={{
                                        width: "100%",
                                        display: "flex",
                                        justifyContent: "flex-end",
                                        marginTop: "1rem"
                                    }}>
                                        <Button startIcon={<AddIcon/>} variant="contained" color="primary"
                                                onClick={handleCriarNovoBloco}>
                                            Adicionar Bloco
                                        </Button>
                                    </Box>
                                )}
                                {bloco.map((item, index) => (
                                    <React.Fragment key={index}>
                                        <Alert severity="success" color="warning" sx={{marginTop: "1rem"}}>
                                            {item.bloco}
                                        </Alert>
                                        <Box sx={{display: "flex", justifyContent: "flex-end", padding: "0.25rem"}}>
                                            <Button onClick={() => {
                                                setOpenTeste(true);
                                            }}>Adicionar Questão</Button>
                                        </Box>
                                    </React.Fragment>
                                ))}
                                {adicionarBloco && (
                                    <DialogContent>
                                        <TextField
                                            autoFocus
                                            margin="dense"
                                            id="new-block-name"
                                            label="Nome do novo Bloco"
                                            type="text"
                                            fullWidth
                                            value={newBloco}
                                            onChange={handleChangeNewBloco}
                                        />
                                        <Box sx={{width: "100%", display: "flex", justifyContent: "center"}}>
                                            <Stack spacing={2} direction="row">
                                                <Button
                                                    disabled={isBlockNameEmpty}
                                                    variant="contained"
                                                    color="primary"
                                                    startIcon={<CheckIcon/>}
                                                    onClick={handleAddBloco}
                                                >
                                                    Salvar Bloco
                                                </Button>
                                                <Button variant="outlined" color="error"
                                                        sx={{color: "gray", borderColor: "gray"}}
                                                        onClick={handleCancelarNewBloco}>
                                                    Cancelar
                                                </Button>
                                            </Stack>
                                        </Box>
                                    </DialogContent>
                                )}
                            </>
                        )}
                    </>
                )}
            </Dialog>
            <DialogNewField onClose={handleCloseTeste} open={openTeste}/>
        </>

    );
};