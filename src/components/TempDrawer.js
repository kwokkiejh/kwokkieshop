import React from "react";
import {
    Drawer,
    List,
    ListItem,
    ListItemText,
    Collapse,
    ListItemSecondaryAction,
    IconButton,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import ClearIcon from "@material-ui/icons/Clear";

const useStyles = makeStyles((theme) => ({
    root: { width: "240px" },
    nested: { paddingLeft: "2rem" },
    title: { marginBottom: "1rem" },
}));

const TempDrawer = ({
    tempDrawer,
    handleTempDrawer,
    shopMenu,
    handleShopMenu,
}) => {
    const classes = useStyles();
    return (
        <Drawer anchor="left" open={tempDrawer} onClose={handleTempDrawer}>
            <List className={classes.root}>
                <ListItem className={classes.title}>
                    <ListItemText primary="Menu" />
                    <ListItemSecondaryAction>
                        <IconButton
                            edge="end"
                            aria-label="delete"
                            size="small"
                            onClick={handleTempDrawer}
                        >
                            <ClearIcon />
                        </IconButton>
                    </ListItemSecondaryAction>
                </ListItem>
                <ListItem button onClick={handleShopMenu}>
                    <ListItemText primary="Shop" />
                    {shopMenu ? <ExpandLess /> : <ExpandMore />}
                </ListItem>
                <Collapse in={shopMenu} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding dense={true}>
                        <ListItem button className={classes.nested}>
                            <ListItemText primary="All" />
                        </ListItem>
                        <ListItem button className={classes.nested}>
                            <ListItemText primary="Living" />
                        </ListItem>
                        <ListItem button className={classes.nested}>
                            <ListItemText primary="Apparel" />
                        </ListItem>
                        <ListItem button className={classes.nested}>
                            <ListItemText primary="Toys" />
                        </ListItem>
                    </List>
                </Collapse>
                <ListItem button>
                    <ListItemText primary="Gifting" />
                </ListItem>
                <ListItem button>
                    <ListItemText primary="Blog" />
                </ListItem>
            </List>
        </Drawer>
    );
};

export default TempDrawer;
