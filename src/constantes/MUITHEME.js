import { createTheme } from "@mui/material";

// export const temaMUI = createTheme({
//     typography: {
//         fontFamily: ["Inter", "sans-serif"].join(","),
//         fontSize: 12,
//         h1: {
//             fontFamily: ["Inter", "sans-serif"].join(","),
//             fontSize: 40,
//         },
//         h2: {
//             fontFamily: ["Inter", "sans-serif"].join(","),
//             fontSize: 32,
//         },
//         h3: {
//             fontFamily: ["Inter", "sans-serif"].join(","),
//             fontSize: 24,
//         },
//         h4: {
//             fontFamily: ["Inter", "sans-serif"].join(","),
//             fontSize: 20,
//         },
//         h5: {
//             fontFamily: ["Inter", "sans-serif"].join(","),
//             fontSize: 16,
//         },
//         h6: {
//             fontFamily: ["Inter", "sans-serif"].join(","),
//             fontSize: 14,
//         },
//         InterBold: {
//             fontFamily: "Inter-Bold",
//             fontSize: 36,
//         },
//     },
// });

export const defaultTheme = createTheme({
    palette: {
        mode: 'light'
    },
    components: {
        MuiListItemButton: {
            styleOverrides: {
                root: ({ theme }) => ({
                    "&.Mui-selected": {
                        backgroundColor: theme.palette.mode === 'light'
                            ? 'rgb(25 118 210 / 21%)'
                            : theme.palette.primary.main,
                        color: theme.palette.primary.contrastText,
                        '&:hover': {
                            backgroundColor: theme.palette.mode === 'light'
                                ? 'rgba(25, 118, 210, 0.3)' // um pouco mais escuro ao passar o mouse
                                : theme.palette.primary.dark,
                        },
                        // Altera a cor do texto e do ícone quando selecionado
                        '& .MuiListItemText-root': {
                            color: theme.palette.mode === 'light'
                                ? '#0d68c5'
                                : theme.palette.primary.contrastText,

                        },
                        '& .MuiTypography-root': {
                            fontWeight: 600
                        },
                        '& .MuiSvgIcon-root': {
                            color: theme.palette.mode === 'light'
                                ? '#0d68c5'
                                : theme.palette.primary.contrastText,
                        },
                    },
                }),
            },
        }
    }
});