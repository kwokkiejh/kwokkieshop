import React, { useRef } from "react";
import {
    Container,
    Grid,
    Button,
    Typography,
    Paper,
    Badge,
    ClickAwayListener,
    Popper,
} from "@material-ui/core";
import { NavLink } from "react-router-dom";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { useSelector } from "react-redux";

import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";

const Header = ({ shopDrawer, handleShopDrawer }) => {
    const cart = useSelector((state) => state.cart);
    const { cartItems } = cart;
    const inputEl = useRef(null);

    return (
        <>
            <Paper
                ref={inputEl}
                square
                variant="outlined"
                style={{ zIndex: "1400", position: "relative" }}
            >
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
                        </Grid>
                        <Grid
                            item
                            xs={6}
                            spacing={4}
                            container
                            direction="row"
                            justify="center"
                        >
                            <Grid item>
                                <Button
                                    disableRipple
                                    onClick={handleShopDrawer}
                                    style={{
                                        backgroundColor: "transparent",
                                        padding: "0",
                                        textTransform: "none",
                                    }}
                                    endIcon={
                                        shopDrawer ? (
                                            <ExpandLess />
                                        ) : (
                                            <ExpandMore />
                                        )
                                    }
                                >
                                    <Typography variant="body1">
                                        Shop
                                    </Typography>
                                </Button>
                            </Grid>

                            <Grid item>
                                <Typography variant="body1">Gifting</Typography>
                            </Grid>
                            <Grid item>
                                <Typography variant="body1">Blog</Typography>
                            </Grid>
                            <Grid item>
                                <Typography variant="body1">Others</Typography>
                            </Grid>
                        </Grid>

                        <Grid
                            item
                            xs
                            container
                            direction="row"
                            justify="flex-end"
                        >
                            <Grid item>
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
                            </Grid>
                        </Grid>
                    </Grid>
                </Container>
            </Paper>
            <Popper
                open={shopDrawer}
                anchorEl={inputEl.current}
                placement="bottom-left"
                container={inputEl.current}
                style={{ width: "100vw", height: "80px" }}
                popperOptions={{
                    modifiers: {
                        offset: {
                            enabled: true,
                            offset: "5,0",
                        },
                    },
                }}
            >
                <ClickAwayListener onClickAway={handleShopDrawer}>
                    <Paper
                        square
                        elevation={0}
                        style={{
                            width: "100%",
                            height: "100%",
                            display: "flex",
                            alignItems: "center",
                        }}
                    >
                        <Container>
                            <Grid
                                container
                                direction="row"
                                spacing={6}
                                justify="center"
                                style={{
                                    textAlign: "center",
                                }}
                            >
                                <Grid item>
                                    <Typography variant="h6">All</Typography>
                                </Grid>

                                <Grid item>
                                    <Typography variant="h6">
                                        Apparels
                                    </Typography>
                                </Grid>
                                <Grid item>
                                    <Typography variant="h6">Toys</Typography>
                                </Grid>
                                <Grid item>
                                    <Typography variant="h6">Crafts</Typography>
                                </Grid>
                            </Grid>
                        </Container>
                    </Paper>
                </ClickAwayListener>
            </Popper>
        </>
    );
};
export default Header;
