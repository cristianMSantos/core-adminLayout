import { Autocomplete, Box, Button, FormControlLabel, Grid, IconButton, InputAdornment, Switch, TextField, Tooltip } from "@mui/material"
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { ClientesContext } from "../../../../context"
import useCustomContext from "../../../../context/useCustomContext"
import CircularProgress from '@mui/material/CircularProgress';
import React from "react";

export const Pessoais = () => {
    const {
        handleSubmit,
        formCreate,
        setFormCreate,
        optionsGrupo,
        handleAddOptions,
        loadingAddGrupo
    } = useCustomContext(ClientesContext)
    return (
        <>
            <Box component="form" onSubmit={handleSubmit}>
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            variant="outlined"
                            label={formCreate.pessoais.nomeSocial ? "Nome Social" : "Nome"}
                            required
                            size="small"
                            value={formCreate.pessoais.nome}
                            onChange={(event) => setFormCreate((prev) => ({
                                ...prev,
                                pessoais: {
                                    nome: event.target.value
                                }
                            }))}
                            InputProps={{
                                endAdornment: (
                                    <InputAdornment position="end">
                                        <FormControlLabel
                                            control={
                                                <Switch
                                                    checked={formCreate.pessoais.nomeSocial}
                                                    onChange={(event) => setFormCreate((prev) => ({
                                                        ...prev,
                                                        pessoais: {
                                                            ...prev.pessoais,
                                                            nomeSocial: event.target.checked
                                                        }
                                                    }))}
                                                />
                                            }
                                            label="Nome Social"
                                            labelPlacement="end"
                                        />
                                    </InputAdornment>
                                ),
                            }}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Autocomplete
                            freeSolo
                            options={optionsGrupo}
                            value={formCreate.pessoais.grupo}
                            loading={loadingAddGrupo}
                            loadingText={`Carregando o grupo ${formCreate.pessoais.grupo} ...`}
                            onInputChange={(event, newInputValue) => setFormCreate((prev) => ({
                                ...prev,
                                pessoais: {
                                    ...prev.pessoais,
                                    grupo: newInputValue
                                }
                            }))}
                            renderInput={(params) => (
                                <TextField
                                    {...params}
                                    placeholder="Selecione o Grupo"
                                    size="small"
                                    label="Grupo"
                                    variant="outlined"
                                    InputProps={{
                                        ...params.InputProps,
                                        endAdornment: (
                                            <>
                                                {params.InputProps.endAdornment}
                                                {
                                                    loadingAddGrupo ? (
                                                        <React.Fragment>
                                                            {loadingAddGrupo ? <CircularProgress color="inherit" size={20} /> : null}
                                                        </React.Fragment>
                                                    )
                                                        : formCreate.pessoais.grupo !== '' && !optionsGrupo.includes(formCreate.pessoais.grupo) ? (
                                                            <InputAdornment position="end">
                                                                <Tooltip title="Adicionar Grupo">
                                                                    <Button
                                                                        onClick={() => handleAddOptions()}
                                                                        aria-label="toggle add options"
                                                                        // onClick={handleClickShowPassword}
                                                                        edge="end"
                                                                    >
                                                                        Criar
                                                                    </Button>
                                                                </Tooltip>
                                                            </InputAdornment>
                                                        )
                                                            : null
                                                }
                                            </>
                                        ),
                                    }}
                                />
                            )}

                            onChange={(event, newValue) => {
                                if (newValue === undefined || newValue === '') return;
                                if (!optionsGrupo.includes(newValue)) {
                                    setNewGrupoOpenDialog(true);
                                }
                            }}
                        />
                    </Grid>
                </Grid>
            </Box >
        </>
    )
}