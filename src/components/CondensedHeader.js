import React from "react";
import {
    Container,
    Paper,
    Grid,
    Typography,
    Button,
    Box,
    Badge,
} from "@material-ui/core";
import { NavLink } from "react-router-dom";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import MenuIcon from "@material-ui/icons/Menu";
import { useSelector } from "react-redux";

const CondensedHeader = () => {
    const cart = useSelector((state) => state.cart);
    const { cartItems } = cart;

    return (
        <>
            <Paper
                square
                variant="outlined"
                style={{ zIndex: "1400", position: "relative" }}
            >
                <Container>
                    <Grid container alignItems="center" justify="space-between">
                        <Grid item xs={3}>
                            <Box
                                display="flex"
                                justifyContent="flex-start"
                                alignItems="center"
                            >
                                <MenuIcon></MenuIcon>
                            </Box>
                        </Grid>
                        <Grid item xs={6}>
                            <Box justifyContent="center" display="flex">
                                <NavLink
                                    to="/"
                                    style={{
                                        textDecoration: "none",
                                        color: "unset",
                                    }}
                                >
                                    <Typography
                                        variant="h6"
                                        style={{ fontWeight: "bold" }}
                                    >
                                        KwokkieShop
                                    </Typography>
                                </NavLink>
                            </Box>
                        </Grid>
                        <Grid item xs={3}>
                            <Box display="flex" justifyContent="flex-end">
                                <Button
                                    component={NavLink}
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
