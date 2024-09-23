import { CssBaseline, ThemeProvider } from "@mui/material"
import RoutesProvider from "./context/routes"
import Router from "./routes"
import LayoutProvider from "./context/layout"
import { defaultTheme } from "./constantes/MUITHEME"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import api from "./axios"
import { setLogout } from "./store/features/Login"
import axios from "axios"

function App() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const token = useSelector((state) => state.login.isAuthenticated);
  const isAuthenticated = !!token;

  let isRefreshing = false;
  let failedRequestsQueue = [];

  const refreshToken = async () => {
    if (isRefreshing) {
      // Retorna uma Promise que será resolvida quando o token for atualizado
      return new Promise((resolve, reject) => {
        failedRequestsQueue.push({ resolve, reject });
      });
    }

    isRefreshing = true;
    try {
      const response = await api.post('/auth/refresh', { refreshToken: localStorage.getItem('refreshToken') }, {
        headers: { Authorization: `Bearer ${localStorage.getItem('refreshToken')}` }
      });
      localStorage.setItem('token', response.data.token);
      if (response.data.refresh_token) {
        localStorage.setItem('refreshToken', response.data.refresh_token);
      }
      // Resolve todas as requisições que falharam
      failedRequestsQueue.forEach(({ resolve }) => resolve(response.data.token));
      failedRequestsQueue = [];
      return response.data.token;
    } catch (error) {
      // Rejeita todas as requisições que falharam
      failedRequestsQueue.forEach(({ reject }) => reject(error));
      failedRequestsQueue = [];
      // Log out ou redireciona para a página de login
      console.error('Refresh token falhou', error);
      throw error;
    } finally {
      isRefreshing = false;
    }
  };

  api.interceptors.response.use(
    response => response,
    async error => {
      const { response } = error;
      if (response && response.status === 401 && !originalRequest.url.includes('/login')) {
        // Tenta refresh token
        try {
          const token = await refreshToken();
          // Atualiza o token no cabeçalho da requisição original
          const originalRequest = error.config;
          console.log(originalRequest)
          originalRequest.headers.Authorization = `Bearer ${token}`;
          return axios(originalRequest);
        } catch (refreshError) {
          // Redireciona para a página de login ou trate o erro de refresh
          console.error('Erro ao tentar atualizar o token', refreshError);
        }
      }
      return Promise.reject(error);
    }
  );

  return (
    <>
      <ThemeProvider theme={defaultTheme}>
        <CssBaseline />
        <RoutesProvider>
          <LayoutProvider>
            <Router />
          </LayoutProvider>
        </RoutesProvider>
      </ThemeProvider>
    </>
  )
}

export default App
