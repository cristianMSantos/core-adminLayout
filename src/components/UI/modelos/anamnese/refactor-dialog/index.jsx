import useCustomContext from "../../../../../context/useCustomContext/index.jsx";
import {AnamneseContext} from "../../../../../context/index.js";
import React from "react";
import {SurveyCreatorWidget} from "../../../../survey/index.jsx";

export const RefactorDialog = () => {
    const {
        openCreate,
        handleToggleDialog,
        isGrupoSetted,
    } = useCustomContext(AnamneseContext);

    return (
        <>
            {/*<Dialog onClose={handleToggleDialog} open={openCreate} fullScreen TransitionComponent={Transition}>*/}
            {/*    <AnamneseAppBar/>*/}
            {/*    {!isGrupoSetted ? <InitialState/> : (*/}
            {/*        <>*/}
            {/*            /!*<FormCard/>*!/*/}
            {openCreate && <SurveyCreatorWidget/>}
            {/*    </>*/}
            {/*)}*/}

            {/*</Dialog>*/}
        </>
    )
}