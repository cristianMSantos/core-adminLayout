import { Collapse, List, ListItemButton, ListItemIcon, ListItemText, ListSubheader } from "@mui/material";
import * as Icons from "@mui/icons-material";
import { useEffect } from "react";

const IconComponent = ({ iconName }) => {
    const Icon = Icons[iconName];
    return (
        <Icon
            sx={{
                minWidth: "1.2em",
                minHeight: "1.2em",
                marginRight: ".5rem",
            }}
        />
    );
}

export const MenuItem = (
    {
        onClick,
        openMenu,
        menuItem,
        onClickSubItem
    }
) => {
    return (
        <>
            <ListItemButton onClick={() => onClick(menuItem.id)}>
                <ListItemIcon>
                    <IconComponent iconName={menuItem.icon} />
                </ListItemIcon>
                <ListItemText
                    primary={menuItem.text}
                />
                {menuItem.hasSubItems &&
                    (openMenu?.[menuItem.id] ? (
                        <Icons.ExpandMore
                            sx={{
                                minWidth: 0,
                            }}
                        />
                    ) : (
                        <Icons.ChevronRight
                            sx={{
                                minWidth: 0,
                            }}
                        />
                    ))}
            </ListItemButton>

            {menuItem.hasSubItems && (
                <Collapse in={openMenu?.[menuItem.id]} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding sx={{ paddingLeft: { xs: 'none', md: '15px' } }}>
                        {menuItem.subItems.map((subItem) => (
                            <ListItemButton
                                key={subItem.id}
                                onClick={() => onClickSubItem(menuItem.id, subItem)}
                            >
                                <IconComponent iconName={subItem.icon} />
                                <ListItemText
                                    primary={subItem.text}
                                    sx={{ opacity: "0.7" }}
                                />
                            </ListItemButton>
                        ))}
                    </List>
                </Collapse>
            )}

            {/* <div>

                <ListItemButton onClick={() => handleRouteSelected('/clientes')}>
                    <ListItemIcon>
                        <GroupsIcon />
                    </ListItemIcon>
                    <ListItemText primary="Clientes" />
                    {openMenu ? <ExpandLess /> : <ExpandMore />}
                </ListItemButton>
                <Collapse in={openMenu} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                        <ListItemButton sx={{ pl: 4 }}>
                            <ListItemIcon>
                                <GroupsIcon />
                            </ListItemIcon>
                            <ListItemText primary="TESTE" />
                        </ListItemButton>
                    </List>
                </Collapse>
                <ListItemButton onClick={() => handleRouteSelected('/agenda')}>
                    <ListItemIcon>
                        <CalendarMonthIcon />
                    </ListItemIcon>
                    <ListItemText primary="Agenda" />
                </ListItemButton>
                <ListItemButton onClick={() => handleRouteSelected('/financeiro')}>
                    <ListItemIcon>
                        <AttachMoneyIcon />
                    </ListItemIcon>
                    <ListItemText primary="Financeiro" />
                </ListItemButton>
                <ListItemButton onClick={() => handleRouteSelected('/relatorio')}>
                    <ListItemIcon>
                        <AssessmentIcon />
                    </ListItemIcon>
                    <ListItemText primary="Relatório" />
                </ListItemButton>
                <ListItemButton onClick={() => handleRouteSelected('/myclinica')}>
                    <ListItemIcon>
                        <BusinessIcon />
                    </ListItemIcon>
                    <ListItemText primary="Minha clínica" />
                </ListItemButton>
            </div> */}
        </>
    )
}