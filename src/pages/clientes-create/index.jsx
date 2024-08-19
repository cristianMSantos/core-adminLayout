import ClientesProvider from "../../context/clientes"
import { ClientesContainer } from "./clientes-container"


export const ClientesCreate = () => {
    return (
        <ClientesProvider>
            <ClientesContainer />
        </ClientesProvider>
    )
}