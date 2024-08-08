import { useContext } from "react";

const useCustomContext = (contextContent) => {
    const context = useContext(contextContent);

    if (!context) {
        throw new Error("Component must be used within an custom");
    }

    return context; 
};

export default useCustomContext;