import React, { useEffect } from "react";
import { Button, Grid, Typography, useMediaQuery } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../../actions/cartItemsActions";
import DoneIcon from "@material-ui/icons/Done";
import Grow from "@material-ui/core/Grow";
import QuantitySelectionButton from "../../../components/common/QuantitySelectionButton";
import { makeStyles, useTheme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    gridItem: {
        display: "flex",
        [theme.breakpoints.down("sm")]: {
            marginBottom: "1rem",
        },
    },
}));
const ProductDetailsActionButtons = ({ productId, countInStock }) => {
    const [quantitySelected, setQuantitySelected] = React.useState(1);
    const [addedToCart, SetAddedToCart] = React.useState(false);
    const cart = useSelector((state) => state.cart);
    const { cartItems } = cart;
    const theme = useTheme();
    const matchesSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
    const classes = useStyles();

    const dispatch = useDispatch();

    // To update quantity selected if product is in cart already
    useEffect(() => {
        const currentProduct = cartItems.find((x) => x.productId === productId);
        if (currentProduct?.qty) {
            setQuantitySelected(currentProduct.qty);
        }
    }, [cartItems, productId]);

    const addToCartHandler = () => {
        dispatch(addToCart(productId, quantitySelected));
        SetAddedToCart(true);
    };

    // Show DoneIcon when adding to cart and reset back the icon subsequently
    useEffect(() => {
        if (addedToCart) {
            setTimeout(() => {
                SetAddedToCart(false);
            }, 1000);
        }
    }, [addedToCart]);

    return (
        <>
            <Grid
                item
                xs={matchesSmallScreen ? 12 : 4}
                className={classes.gridItem}
            >
                <QuantitySelectionButton
                    quantitySelected={quantitySelected}
                    countInStock={countInStock}
                    setQuantitySelected={setQuantitySelected}
                />
            </Grid>
            <Grid
                item
                xs={matchesSmallScreen ? 12 : 8}
                className={classes.gridItem}
            >
                {addedToCart ? (
                    <Button
                        fullWidth
                        variant="contained"
                        onClick={addToCartHandler}
                    >
                        <Grow in={addedToCart} timeout={500}>
                            <DoneIcon />
                        </Grow>
                    </Button>
                ) : (
                    <Button
                        onClick={addToCartHandler}
                        fullWidth
                        variant="contained"
                        style={{ backgroundColor: "#dfafa7" }}
                    >
                        <Typography>Add to Cart</Typography>
                    </Button>
                )}
            </Grid>
        </>
    );
};

export default ProductDetailsActionButtons;
