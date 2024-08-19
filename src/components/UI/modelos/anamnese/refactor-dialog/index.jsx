import useCustomContext from "../../../../../context/useCustomContext/index.jsx";
import {AnamneseContext} from "../../../../../context/index.jsx";
import {Transition} from "../transition/index.jsx";
import {Dialog} from "@mui/material";
import {AnamneseAppBar} from "../appbar/index.jsx";
import React from "react";
import {InitialState} from "../initial-state/index.jsx";
import {SurveyCreatorWidget} from "../../../../survey/index.jsx";

export const RefactorDialog = () => {
    const {
        openCreate,
        handleToggleDialog,
        isGrupoSetted,
    } = useCustomContext(AnamneseContext);

    return (
        <>
            <Dialog onClose={handleToggleDialog} open={openCreate} fullScreen TransitionComponent={Transition}>
                <AnamneseAppBar/>
                {!isGrupoSetted ? <InitialState/> : (
                    <>
                        {/*<FormCard/>*/}
                        <SurveyCreatorWidget/>
                    </>
                )}

            </Dialog>
        </>
    )
}