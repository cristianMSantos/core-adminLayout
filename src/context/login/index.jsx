import React, { createContext } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setLogin } from "../../store/features/Login";
import api from "../../axios";

export const LoginContext = createContext(null);

const LoginProvider = ({ children }) => {
    const [loading, setLoading] = React.useState(false);
    const [error, setError] = React.useState({
        confirmPassword: false,
        email: false,
        senha: false
    });
    const [messageError, setMessageError] = React.useState({
        confirmPassword: null,
        email: null,
        senha: null
    });

    const [errorLogin, setErrorLogin] = React.useState(false);
    const [showPassword, setShowPassword] = React.useState(false);
    const [showPasswordConfirm, setShowPasswordConfirm] = React.useState(false);
    const [showResetPassword, setShowResetPassword] = React.useState(false);

    const dispatch = useDispatch()
    const navigate = useNavigate();

    const handleClickShowPassword = () => setShowPassword(!showPassword);

    const handleClickShowPasswordConfirm = () => setShowPasswordConfirm(!showPasswordConfirm);

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    const handleMouseDownPasswordConfirm = (event) => {
        event.preventDefault();
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);

        const options = {
            url: showResetPassword ? `/auth/reset` : `/authentication/login/`,
            method: 'POST',
            data: {
                de_nome_usuario: data.get('email'),
                de_senha: data.get('password'),
            },
            // headers: {
            //     'Access-Control-Allow-Origin': '*'
            // }
        }

        if (showResetPassword && document.getElementById('password').value === 'plansul123') {
            setError({ ...error, ['senha']: true });
            setMessageError({ ...messageError, ['senha']: 'A senha não pode ser a padrão!' });
            return
        }

        // if (!Object.values(error).includes(true)) {
            setLoading(true);
            return await api(options)
                .then(async (response) => {
                    if (showResetPassword) {
                        setShowResetPassword(false)
                        setLoading(false);
                        setErrorLogin(false);
                        moveLogin()
                    } else {
                        dispatch(setLogin(response.data.token))
                        setLoading(false);
                        setErrorLogin(false);

                        const options = {
                            url: `/auth/me`,
                            method: "POST",
                            headers: {
                                "Access-Control-Allow-Origin": "*",
                                Authorization: response.data.access_token ? `Bearer ${response.data.access_token}` : "",
                            },
                        };
                        await api(options)
                            .then((response) => {
                                dispatch(setUser(response.data));

                            })
                            .catch((error) => {
                                console.error("Erro ao buscar o usuário:", error.response);
                            });
                        navigate('/');
                    };


                })
                .catch((error) => {
                    if (error.response.status === 401) {
                        setLoading(false);
                        setErrorLogin(true);
                    }

                    if (error.response.status === 403 && error.response.data.error === 'Reset Password') {
                        moveLogin()

                        //delay para mostrar as mudanças após a animação
                        setTimeout(() => {
                            setShowResetPassword(true)
                            setLoading(false);
                        }, 500);
                    }
                })
        // }
    };

    const handleRules = (event, field) => {
        setErrorLogin(false)
        if (!event) {
            setError({ ...error, [field]: true });
            setMessageError({ ...messageError, [field]: 'Campo é Obrigatório' });
            return
        }

        if (field === 'email') {
            if (event && event.length < 6 || event && event.length > 6) {
                setError({ ...error, [field]: true });
                setMessageError({ ...messageError, [field]: 'Matrícula Inválida' });
                return
            } else {
                setError({ ...error, [field]: false });
                setMessageError({ ...messageError, [field]: null });
                return
            }
        }

        if (field === 'senha') {

            if (event && document.getElementById('confirmPassword') && event !== document.getElementById('confirmPassword').value) {
                if (showResetPassword && event === 'plansul123') {
                    setError({ ...error, ['senha']: true });
                    setMessageError({ ...messageError, ['senha']: 'A senha não pode ser a padrão!' });
                } else {
                    setError({ ...error, [field]: false, ['confirmPassword']: true });
                    setMessageError({ ...messageError, [field]: null, ['confirmPassword']: 'As senhas não conferem' });
                }

                return
            }

            if (event && document.getElementById('confirmPassword') && event === document.getElementById('confirmPassword').value) {

                if (showResetPassword && event === 'plansul123') {
                    setError({ ...error, ['senha']: true, ['confirmPassword']: false, [field]: false });
                    setMessageError({ ...messageError, ['senha']: 'A senha não pode ser a padrão!' });
                } else {
                    setError({ ...error, [field]: false });
                    setMessageError({ ...messageError, [field]: null, ['confirmPassword']: null, [field]: null });
                }
                return
            }


            setError({ ...error, [field]: false });
            setMessageError({ ...messageError, [field]: null });
            return

        }

        if (field === 'confirmPassword') {
            if (event !== document.getElementById('password').value) {
                setError({ ...error, [field]: true });
                setMessageError({ ...messageError, [field]: 'As senhas não conferem' });
                return
            } else {
                setError({ ...error, [field]: false });
                setMessageError({ ...messageError, [field]: null });
                return
            }
        }
    }

    return (
        <LoginContext.Provider
            value={{
                error,
                messageError,
                handleRules,
                showResetPassword,
                showPassword,
                handleSubmit,
                handleClickShowPassword,
                handleMouseDownPassword,
                loading
            }}
        >
            {children}
        </LoginContext.Provider>
    )
}

export default LoginProvider;