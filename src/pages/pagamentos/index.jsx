import PagamentosProvider from "../../context/pagamentos"
import { PagamentosContainer } from "./pagamentos-container"


export const Pagamentos = () => {
    return (
        <PagamentosProvider>
            <PagamentosContainer />
        </PagamentosProvider>
    )
}