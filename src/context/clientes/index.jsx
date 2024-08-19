import React, { createContext, useEffect, useState } from "react";

export const ClientesContext = createContext(null);

const ClientesProvider = ({ children }) => {
    const [createTab, setCreateTab] = useState("0");
    const [optionsGrupo, setOptionsGrupo] = useState(['Option 1', 'Option 2', 'Option 3']);
    const [loadingAddGrupo, setLoadingAddGrupo] = useState(false)

    const [formCreate, setFormCreate] = useState({
        pessoais: {
            nome: '',
            nomeSocial: false,
            grupo: ''
        }
    })

    const handleChangeCreateTab = (event, newValue) => {
        setCreateTab(newValue);
    };

    const handleSubmit = async () => {

    }

    const handleAddOptions = () => {
        setLoadingAddGrupo(true)

        //Simular uma requisição
        setTimeout(() => {
            setOptionsGrupo((prev) => {
                if (!prev.includes(formCreate.pessoais.grupo)) {
                    return [
                        ...prev,
                        formCreate.pessoais.grupo
                    ];
                }
                return prev;
            });

            setLoadingAddGrupo(false)
        }, 2000);
    }

    useEffect(() => {
        console.log(formCreate)
    }, [formCreate])


    return (
        <ClientesContext.Provider
            value={{
                createTab,
                handleChangeCreateTab,
                handleSubmit,
                formCreate,
                setFormCreate,
                setOptionsGrupo,
                optionsGrupo,
                handleAddOptions,
                loadingAddGrupo
            }}
        >
            {children}
        </ClientesContext.Provider>
    );
};

export default ClientesProvider;