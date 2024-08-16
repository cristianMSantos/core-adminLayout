import {Card, Divider, FormControl, Grid, InputLabel, MenuItem, Select, TextField} from "@mui/material";
import React from "react";
import SegmentIcon from '@mui/icons-material/Segment';
import ViewHeadlineIcon from '@mui/icons-material/ViewHeadline';
import RadioButtonCheckedIcon from '@mui/icons-material/RadioButtonChecked';
import CheckBoxOutlinedIcon from '@mui/icons-material/CheckBoxOutlined';
import ArrowCircleDownRoundedIcon from '@mui/icons-material/ArrowCircleDownRounded';
import CloudUploadOutlinedIcon from '@mui/icons-material/CloudUploadOutlined';

const styles = {
    card: {
        borderLeft: "8px solid #4285f4",
        padding: "1rem"
    },
    menuItem: {
        display: "flex",
        alignItems: "center"
    },
    icon: {
        marginRight: "5px"
    }
};

const menuItemsData = [
    {value: "shortAnswer", label: "Resposta curta", icon: SegmentIcon},
    {value: "paragraph", label: "Parágrafo", icon: ViewHeadlineIcon},
    {value: "multipleChoice", label: "Múltipla escolha", icon: RadioButtonCheckedIcon},
    {value: "checkbox", label: "Caixa de seleção", icon: CheckBoxOutlinedIcon},
    {value: "dropdown", label: "Lista suspensa", icon: ArrowCircleDownRoundedIcon},
    {value: "fileUpload", label: "Upload de arquivo", icon: CloudUploadOutlinedIcon}
];

const renderMenuItem = ({value, label, icon: IconComponent}) => (
    <MenuItem key={value} value={value} sx={styles.menuItem}>
        <IconComponent sx={styles.icon}/> {label}
    </MenuItem>
);

export const FormCard = () => (
    <Card sx={styles.card}>
        <Grid container spacing={2}>
            <Grid item xs={6}>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <TextField placeholder={"Pergunta sem título"} fullWidth size={"small"}/>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item xs={6}>
                <FormControl fullWidth size={"small"}>
                    <InputLabel htmlFor="grouped-select">Tipo</InputLabel>
                    <Select defaultValue="" id="grouped-select" label="tipo">
                        <Divider/>
                        {menuItemsData.slice(0, 2).map(renderMenuItem)}
                        <Divider/>
                        {menuItemsData.slice(2, 5).map(renderMenuItem)}
                        <Divider/>
                        {renderMenuItem(menuItemsData[5])}
                    </Select>
                </FormControl>
            </Grid>
        </Grid>
    </Card>
);