import { Grid, Paper } from "@mui/material"
// import { initMercadoPago, Payment } from "@mercadopago/sdk-react";
export const PagamentosContainer = () => {
    return (
        <Grid container spacing={3}>
            <Grid item xs={12} md={12} lg={12}>
                <Paper
                    sx={{
                        p: 2,
                        display: 'flex',
                        flexDirection: 'column',
                        height: 240,
                    }}
                >
                    <h1>PAGAMENTOS</h1>

                </Paper>
            </Grid>
        </Grid>
    )
}