import { CssBaseline, ThemeProvider } from "@mui/material"
import RoutesProvider from "./context/routes"
import Router from "./routes"
import LayoutProvider from "./context/layout"
import { defaultTheme } from "./constantes/MUITHEME"

function App() {
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
