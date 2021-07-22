import React from "react";
import { Grid, Typography, IconButton } from "@material-ui/core";
import QuantitySelectionButton from "../../../components/common/QuantitySelectionButton";
import { useDispatch } from "react-redux";
import { addToCart, removeFromCart } from "../../../actions/cartItemsActions";
import ClearIcon from "@material-ui/icons/Clear";
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles({
    gridItem: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
    imageSize: {
        height: "180px",
        width: "100%",
        padding: "1rem",
    },
});

const CartItemCard = ({ cartItem }) => {
    const classes = useStyles();
    const { name, image, qty, countInStock, productId, price } = cartItem;
    const dispatch = useDispatch();

    const updateCartItemQuantity = (quantitySelected) => {
        if (quantitySelected !== qty) {
            dispatch(addToCart(productId, quantitySelected));
        }
    };

    const removeCartItem = () => {
        dispatch(removeFromCart(productId));
    };

    return (
        <>
            <Grid container direction="row" alignItems="stretch">
                <Grid item xs={3} className={classes.gridItem}>
                    <img
                        src={image}
                        alt="productImage"
                        className={classes.imageSize}
                    />
                </Grid>
                <Grid item xs={3} className={classes.gridItem}>
                    <Typography>{name}</Typography>
                </Grid>
                <Grid item xs={3} className={classes.gridItem}>
                    <QuantitySelectionButton
                        quantitySelected={qty}
                        countInStock={countInStock}
                        setQuantitySelected={updateCartItemQuantity}
                    />
                </Grid>
                <Grid item xs={2} className={classes.gridItem}>
                    <Typography>${price}</Typography>
                </Grid>
                <Grid item xs={1} className={classes.gridItem}>
                    <IconButton onClick={removeCartItem}>
                        <ClearIcon />
                    </IconButton>
                </Grid>
            </Grid>
        </>
    );
};

export default CartItemCard;
