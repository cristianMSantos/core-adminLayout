import React from "react";

export const AnamneseContext = React.createContext(null);


const AnamneseProvider = ({ children }) => {
    const [openCreate, setOpenCreate] = React.useState(false);
    const [grupo, setGrupo] = React.useState(null);
    const [isGrupoSetted, setIsGrupoSetted] = React.useState(false);
    const [bloco, setBloco] = React.useState([]);
    const [iniciar, setIniciar] = React.useState(false);
    const [adicionarBloco, setAdicionarBloco] = React.useState(false);

    const [newBloco, setNewBloco] = React.useState(null);
    const handleToggleDialog = () =>{
        if (openCreate) {
            setGrupo(null);
            setIsGrupoSetted(false);
            setIniciar(false);
            setBloco([]);
        }
        setOpenCreate(!openCreate);
    }

    const handleCriarNovoBloco = () =>{
        setNewBloco(null);
        setAdicionarBloco(true);
    }

    const handleCancelarNewBloco = () =>{
        setNewBloco(null);
        setAdicionarBloco(false);
        if (bloco.length <= 0){
            setIniciar(false);
        }
    }

    const handleGrupoChange = (event) =>{
        setGrupo(event.target.value);
    }

    const handleSetGroup = () =>{
        setIsGrupoSetted(true);
    }
    const handleAddBloco = () =>{
        setBloco([...bloco, newBloco]);
        setAdicionarBloco(false);
    }
    const handleIniciar = () =>{
        setIniciar(true);
        setAdicionarBloco(true);

    }

    const handleChangeNewBloco = (event) =>{
        setNewBloco(event.target.value);
    }
    return (
        <AnamneseContext.Provider value={{
            openCreate,
            handleToggleDialog,
            grupo,
            handleGrupoChange,
            isGrupoSetted,
            handleSetGroup,
            bloco,
            handleAddBloco,
            iniciar,
            handleIniciar,
            adicionarBloco,
            newBloco,
            handleChangeNewBloco,
            handleCriarNovoBloco,
            handleCancelarNewBloco
        }}>
            {children}
        </AnamneseContext.Provider>
    );
}

export default AnamneseProvider;