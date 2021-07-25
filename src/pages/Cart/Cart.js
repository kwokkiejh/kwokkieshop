import React, { useEffect } from "react";
import {
    Grid,
    Typography,
    Container,
    Divider,
    useMediaQuery,
} from "@material-ui/core";
import CartItemCard from "./components/CartItemCard";
import { useSelector } from "react-redux";
import CartSummary from "./components/CartSummary";
import { makeStyles, useTheme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    root: {
        paddingTop: "2rem",
        paddingBottom: "2rem",
    },
    cartSummary: {
        display: "flex",
        height: "60vh",
        [theme.breakpoints.down("xs")]: {
            paddingLeft: 0,
        },
    },
    cart: {
        paddingLeft: 0,
    },
    divider: {
        backgroundColor: theme.palette.text.primary,
        marginBottom: "1rem",
        width: "80px",
    },
}));
const Cart = () => {
    const theme = useTheme();
    const matchesSmallScreen = useMediaQuery(theme.breakpoints.down("xs"));
    const classes = useStyles();

    const cart = useSelector((state) => state.cart);
    const { cartItems } = cart;

    const [subTotalPrice, setSubTotalPrice] = React.useState(null);
    const [shippingPrice, setShippingPrice] = React.useState(null);
    const [totalPrice, setTotalPrice] = React.useState(null);

    useEffect(() => {
        if (cartItems) {
            let subTotal = cartItems.reduce(
                (acc, item) => acc + item.price * item.qty,
                0
            );

            let totalQuantity = cartItems.reduce(
                (acc, item) => acc + item.qty,
                0
            );

            let currShippingPrice = totalQuantity < 5 ? 10 : 5;

            setSubTotalPrice(subTotal.toFixed(2));
            setShippingPrice(currShippingPrice.toFixed(2));

            setTotalPrice((currShippingPrice + subTotal).toFixed(2));
        }
    }, [cartItems, shippingPrice]);

    return (
        <Container className={classes.root}>
            <Typography variant="h5">Shopping Cart</Typography>
            {cartItems.length > 0 ? (
                <Grid item container alignItems="stretch">
                    <Grid item xs={matchesSmallScreen ? 12 : 8}>
                        <Container className={classes.cart}>
                            <Divider
                                variant="fullWidth"
                                className={classes.divider}
                            />
                            {cartItems.map((cartItem) => (
                                <CartItemCard cartItem={cartItem} />
                            ))}
                        </Container>
                    </Grid>
                    <Grid item container xs={matchesSmallScreen ? 12 : 4}>
                        <Container className={classes.cartSummary}>
                            <CartSummary
                                subTotalPrice={subTotalPrice}
                                shippingPrice={shippingPrice}
                                totalPrice={totalPrice}
                            />
                        </Container>
                    </Grid>
                </Grid>
            ) : (
                <Typography>Your cart is empty!</Typography>
            )}
        </Container>
    );
};

export default Cart;
