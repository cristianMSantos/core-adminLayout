import LoginProvider from "../../context/login";
import { LoginContainer } from "./fields";

export const Login = () => {
    return (
        <LoginProvider>
            <LoginContainer />
        </LoginProvider>
    )
}