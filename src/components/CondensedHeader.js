import React from "react";
import {
    Container,
    Paper,
    Grid,
    Typography,
    Button,
    Box,
    Badge,
    IconButton,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import MenuIcon from "@material-ui/icons/Menu";
import { useSelector } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    menuButton: { padding: 0 },
    link: { textDecoration: "none", color: "unset" },
    root: { zIndex: theme.zIndex.appBar, position: "relative" },
    bold: { fontWeight: "bold" },
}));

const CondensedHeader = ({ handleTempDrawer }) => {
    const cart = useSelector((state) => state.cart);
    const { cartItems } = cart;
    const classes = useStyles();

    return (
        <>
            <Paper square variant="outlined" className={classes.root}>
                <Container>
                    <Grid container alignItems="center" justify="space-between">
                        <Grid item xs={3}>
                            <Box
                                display="flex"
                                justifyContent="flex-start"
                                alignItems="center"
                            >
                                <IconButton
                                    className={classes.menuButton}
                                    onClick={handleTempDrawer}
                                >
                                    <MenuIcon />
                                </IconButton>
                            </Box>
                        </Grid>
                        <Grid item xs={6}>
                            <Box justifyContent="center" display="flex">
                                <Link to="/" className={classes.link}>
                                    <Typography
                                        variant="h6"
                                        className={classes.bold}
                                    >
                                        KwokkieShop
                                    </Typography>
                                </Link>
                            </Box>
                        </Grid>
                        <Grid item xs={3}>
                            <Box display="flex" justifyContent="flex-end">
                                <Button
                                    component={Link}
                                    to="/cart"
                                    endIcon={
                                        <Badge
                                            badgeContent={cartItems.length}
                                            color="primary"
                                        >
                                            <ShoppingCartIcon />
                                        </Badge>
                                    }
                                >
                                    <Typography variant="caption">
                                        Cart
                                    </Typography>
                                </Button>
                            </Box>
                        </Grid>
                    </Grid>
                </Container>
            </Paper>
        </>
    );
};

export default CondensedHeader;
