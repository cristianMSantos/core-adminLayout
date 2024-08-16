import AnamneseProvider from "../../../../context/modelos/anamnese/index.jsx";
import {ModeloAnamnese} from "./index.jsx";

export const AnamneseContainer = () =>{
    return (
        <AnamneseProvider>
            <ModeloAnamnese />
        </AnamneseProvider>
    )
}