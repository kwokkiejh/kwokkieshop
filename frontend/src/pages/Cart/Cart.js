import React, { useEffect } from "react";
import { Grid, Typography, Container, Box } from "@material-ui/core";
import CartItemCard from "./components/CartItemCard";
import { useSelector } from "react-redux";
import CartItemHead from "./components/CartItemHead";
import CartSummary from "./components/CartSummary";

const Cart = () => {
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
        <>
            <Container>
                <Typography variant="h5">Shopping Cart</Typography>
            </Container>
            {cartItems.length > 0 ? (
                <Grid item container direction="row" alignItems="stretch">
                    <Grid item xs={8}>
                        <Container>
                            <CartItemHead />
                            {cartItems.map((cartItem) => (
                                <CartItemCard cartItem={cartItem} />
                            ))}
                        </Container>
                    </Grid>
                    <Grid item container xs={4}>
                        <Container
                            style={{
                                display: "flex",
                                minHeight: "60vh",
                            }}
                        >
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
        </>
    );
};

export default Cart;
