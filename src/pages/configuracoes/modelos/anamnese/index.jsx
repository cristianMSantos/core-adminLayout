import React from "react";
import {Alert, Box, Button, Tab, Tabs, Typography} from "@mui/material";
import * as PropTypes from "prop-types";
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import AddIcon from '@mui/icons-material/Add';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

function TabPanel(props) {
    const { children, value, index, ...other } = props;
    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

function CheckIcon(props) {
    return null;
}

CheckIcon.propTypes = {fontSize: PropTypes.string};
export const ModeloAnamnese = () => {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                    <Tab label="Anamnese" {...a11yProps(0)} />
                </Tabs>
            </Box>
            <TabPanel value={value} index={0}>
                <Alert icon={<InfoOutlinedIcon fontSize="inherit" />} severity="info">
                    Nesse módulo você encontra grupos e formulários padrões de anamnese, basta importar os modelos no botão Importar Novos modelos.

                    Caso você queira criar um formulário de anamnese do zero, clique no botão Adicionar grupo de anamnese e siga os passos.
                </Alert>
                <Box sx={{marginTop:"1rem", width:"100%", display:"flex", justifyContent:"space-between"}}>
                    <Button  variant="contained" startIcon={<AddIcon />} >Adicionar Grupo de Anamnese</Button>
                    <Button variant="outlined" startIcon={<CloudUploadIcon />}>Importar Modelos</Button>
                </Box>
            </TabPanel>
        </>
    );
};