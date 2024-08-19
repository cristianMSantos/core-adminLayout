import { Box, Grid, Paper, Tab, Tabs } from "@mui/material"
import FaceIcon from '@mui/icons-material/Face';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import PostAddIcon from '@mui/icons-material/PostAdd';
import useCustomContext from "../../../context/useCustomContext";
import { ClientesContext } from "../../../context";
import { TabContext, TabPanel } from "@mui/lab";
import { Pessoais } from "./forms/pessoais";
import { Financeira } from "./forms/financeira";
import { Adicionais } from "./forms/adicionais";

export const ClientesContainer = () => {
    const {
        createTab,
        handleChangeCreateTab
    } = useCustomContext(ClientesContext)

    return (

        <Grid container spacing={3}>
            <Grid item xs={12} md={12} lg={12}

            >
                {/* <Paper
                    sx={{
                        p: 2,
                        display: 'flex',
                        flexDirection: 'column',
                        height: 240,
                    }}
                > */}
                {/* </Paper> */}
                <TabContext value={createTab}>
                    <Box sx={{ display: 'flex', justifyContent: 'start', borderBottom: 1, borderColor: 'divider' }}>
                        <Tabs value={createTab} onChange={handleChangeCreateTab} aria-label="icon label tabs example">
                            <Tab label="Informações Pessoais"
                                sx={{ textTransform: 'capitalize' }} value="0" />
                            <Tab label="Informações Financeira"
                                sx={{ textTransform: 'capitalize' }} value="1" />
                            <Tab label="Dados Adicionais"
                                sx={{ textTransform: 'capitalize' }} value="2" />
                        </Tabs>
                    </Box>
                    <TabPanel value="0">
                        <Pessoais />
                    </TabPanel>
                    <TabPanel value="1">
                        <Financeira />
                    </TabPanel>
                    <TabPanel value="2">
                        <Adicionais />
                    </TabPanel>
                </TabContext>
            </Grid>
        </Grid>
    )
}