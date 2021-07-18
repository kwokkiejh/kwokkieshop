import * as React from "react";
import {
    Container,
    Grid,
    Button,
    Typography,
    Paper,
    Badge,
} from "@material-ui/core";
import { Link, NavLink } from "react-router-dom";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { useSelector } from "react-redux";

const Header = () => {
    const cart = useSelector((state) => state.cart);
    const { cartItems } = cart;

    return (
        <Paper style={{ position: "relative", backgroundColor: "#f7f7f7" }}>
            <Container>
                <Grid
                    container
                    direction="row"
                    alignItems="center"
                    justify="space-between"
                >
                    <Grid item xs>
                        <NavLink
                            to="/"
                            style={{ textDecoration: "none", color: "unset" }}
                        >
                            <Typography
                                variant="h6"
                                style={{ fontWeight: "bold" }}
                            >
                                KwokkieShop
                            </Typography>
                        </NavLink>
                    </Grid>

                    <Grid
                        item
                        xs
                        container
                        direction="row"
                        spacing={2}
                        justify="flex-end"
                    >
                        <Grid item>
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
                                <Typography variant="caption">Cart</Typography>
                            </Button>
                        </Grid>
                    </Grid>
                </Grid>
            </Container>
        </Paper>
    );
};
export default Header;
