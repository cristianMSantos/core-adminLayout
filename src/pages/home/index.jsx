import { Grid, Paper } from "@mui/material"

export const Home = () => {
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
                    <h1>HOME</h1>
                </Paper>
            </Grid>
        </Grid>
    )
}