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
    Backdrop,
} from "@material-ui/core";
import { NavLink } from "react-router-dom";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { useSelector } from "react-redux";

import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    root: { zIndex: theme.zIndex.appBar, position: "relative" },
    popper: {
        width: "100%",
        height: "80px",
    },
    popperPaper: {
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
    },
    headerButton: {
        backgroundColor: "transparent",
        padding: "0",
        textTransform: "none",
    },
    link: {
        textDecoration: "none",
        color: "unset",
    },
    bold: {
        fontWeight: "bold",
    },
    centerText: {
        textAlign: "center",
    },
    backdrop: { zIndex: theme.zIndex.appBar - 1, color: "#fff" },
}));

const Header = ({ shopMenu, handleShopMenu }) => {
    const classes = useStyles();
    const cart = useSelector((state) => state.cart);
    const { cartItems } = cart;
    const inputEl = useRef(null);

    return (
        <>
            <Paper ref={inputEl} square className={classes.root} elevation={0}>
                <Container>
                    <Grid container alignItems="center" justify="space-between">
                        <Grid item xs>
                            <NavLink to="/" className={classes.link}>
                                <Typography
                                    variant="h6"
                                    className={classes.bold}
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
                            justify="center"
                        >
                            <Grid item>
                                <Button
                                    disableRipple
                                    onClick={handleShopMenu}
                                    className={classes.headerButton}
                                    endIcon={
                                        shopMenu ? (
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
                        </Grid>

                        <Grid item xs container justify="flex-end">
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
            <div id="popperHere">
                <Popper
                    open={shopMenu}
                    anchorEl={inputEl.current}
                    placement="bottom-left"
                    container={inputEl.current}
                    className={classes.popper}
                    popperOptions={{
                        modifiers: {
                            preventOverflow: {
                                padding: 0,
                            },
                        },
                    }}
                >
                    <ClickAwayListener onClickAway={handleShopMenu}>
                        <Paper
                            square
                            elevation={0}
                            className={classes.popperPaper}
                        >
                            <Container>
                                <Grid
                                    container
                                    spacing={6}
                                    justify="center"
                                    className={classes.centerText}
                                >
                                    <Grid item>
                                        <Typography variant="h6">
                                            All
                                        </Typography>
                                    </Grid>

                                    <Grid item>
                                        <Typography variant="h6">
                                            Living
                                        </Typography>
                                    </Grid>
                                    <Grid item>
                                        <Typography variant="h6">
                                            Apparel
                                        </Typography>
                                    </Grid>
                                    <Grid item>
                                        <Typography variant="h6">
                                            Toys
                                        </Typography>
                                    </Grid>
                                </Grid>
                            </Container>
                        </Paper>
                    </ClickAwayListener>
                </Popper>
            </div>
            <Backdrop className={classes.backdrop} open={shopMenu}></Backdrop>
        </>
    );
};
export default Header;
