import React from "react";
import { Grid, Typography, IconButton } from "@material-ui/core";
import QuantitySelectionButton from "../../../components/common/QuantitySelectionButton";
import { useDispatch } from "react-redux";
import { addToCart, removeFromCart } from "../../../actions/cartItemsActions";
import ClearIcon from "@material-ui/icons/Clear";
import { makeStyles } from "@material-ui/core/styles";
import ImageComponent from "../../../components/common/ImageComponent";
import { Link } from "react-router-dom";
const useStyles = makeStyles({
    gridMiddle: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "flex-start",
    },
    gridImage: {
        paddingRight: "1rem",
        height: "100%",
    },
    imageSize: {
        height: "100%",
        width: "100%",
    },
    gridRight: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "flex-end",
    },
    root: {
        paddingTop: "1rem",
        paddingBottom: "1.25rem",
        alignItems: "stretch",
        height: "150px",
    },
    removeButton: {
        padding: 0,
    },
    bold: {
        fontWeight: "bold",
    },
    typographyLink: {
        fontWeight: "bold",
        textDecoration: "none",
        color: "unset",
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
            <Grid container className={classes.root}>
                <Grid item xs className={classes.gridImage}>
                    <Link to={`/product/${productId}`}>
                        <ImageComponent
                            source={image}
                            imageStyle={{ height: "100%", width: "100%" }}
                        />
                    </Link>
                </Grid>
                <Grid
                    item
                    xs={6}
                    className={classes.gridMiddle}
                    container
                    direction="column"
                >
                    <Grid item>
                        <Typography
                            className={classes.typographyLink}
                            component={Link}
                            to={`/product/${productId}`}
                        >
                            {name}
                        </Typography>

                        <Typography>${price}</Typography>
                    </Grid>
                    <Grid item>
                        <QuantitySelectionButton
                            quantitySelected={qty}
                            countInStock={countInStock}
                            setQuantitySelected={updateCartItemQuantity}
                        />
                    </Grid>
                </Grid>
                <Grid
                    item
                    xs
                    className={classes.gridRight}
                    container
                    direction="column"
                >
                    <IconButton
                        onClick={removeCartItem}
                        className={classes.removeButton}
                    >
                        <ClearIcon />
                    </IconButton>
                </Grid>
            </Grid>
        </>
    );
};

export default CartItemCard;
