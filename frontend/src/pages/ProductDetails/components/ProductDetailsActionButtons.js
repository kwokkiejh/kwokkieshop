import React, { useEffect } from "react";
import { ButtonGroup, Button, Grid, Typography } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
import { useDispatch } from "react-redux";
import { addToCart } from "../../../actions/cartItemsActions";
import DoneIcon from "@material-ui/icons/Done";
import Grow from "@material-ui/core/Grow";

const QuantityButton = ({ quantity, ...props }) => {
    return (
        <Button
            {...props}
            size="large"
            disableRipple={true}
            disableFocusRipple={true}
            style={{ backgroundColor: "transparent" }}
        >
            {quantity}
        </Button>
    );
};

const ProductDetailsActionButtons = ({ productId, countInStock }) => {
    const [quantity, setQuantity] = React.useState(1);
    const dispatch = useDispatch();
    const [addedToCart, SetAddedToCart] = React.useState(false);
    const addToCartHandler = () => {
        dispatch(addToCart(productId, quantity));
        SetAddedToCart(true);
    };

    useEffect(() => {
        if (addedToCart) {
            setTimeout(() => {
                SetAddedToCart(false);
            }, 1500);
        }
    }, [addedToCart]);

    return (
        <>
            <Grid item xs={6}>
                <ButtonGroup>
                    <Button
                        size="small"
                        onClick={() => {
                            setQuantity(Math.max(quantity - 1, 1));
                        }}
                    >
                        <RemoveIcon />
                    </Button>
                    <QuantityButton quantity={quantity} />
                    <Button
                        size="small"
                        onClick={() => {
                            setQuantity(Math.min(quantity + 1, countInStock));
                        }}
                    >
                        <AddIcon />
                    </Button>
                </ButtonGroup>
            </Grid>
            <Grid item xs={6}>
                {addedToCart ? (
                    <Button
                        fullWidth
                        variant="contained"
                        style={{ height: "100%" }}
                    >
                        <Grow in={addedToCart} timeout={1000}>
                            <DoneIcon />
                        </Grow>
                    </Button>
                ) : (
                    <Button
                        onClick={addToCartHandler}
                        fullWidth
                        variant="contained"
                        style={{ height: "100%" }}
                    >
                        <Typography>Add to Cart</Typography>
                    </Button>
                )}
            </Grid>
        </>
    );
};

export default ProductDetailsActionButtons;
