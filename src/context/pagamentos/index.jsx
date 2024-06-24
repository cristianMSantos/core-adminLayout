
import { createContext, useEffect } from "react";
import api from "../../axios";

export const PagamentosContext = createContext(null);

const PagamentosProvider = ({ children }) => {

    useEffect(() => {
        handleGetPayments()
        handleGetPaymentMethods()
    }, [])


    const handleGetPayments = async () => {
        const options = {
            url: `/search_payments`,
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },

        };
        return await api(options)
            .then((response) => {
                console.log(response.data)
            })
            .catch((error) => {
                console.error(error.response);
            });
    }

    const handleGetPaymentMethods = async () => {
        const options = {
            url: `/payment_methods`,
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },

        };
        return await api(options)
            .then((response) => {
                console.log(response.data)
            })
            .catch((error) => {
                console.error(error.response);
            });
    }

    return (
        <PagamentosContext.Provider
            value={{

            }}
        >
            {children}
        </PagamentosContext.Provider>
    )
}

export default PagamentosProvider;


