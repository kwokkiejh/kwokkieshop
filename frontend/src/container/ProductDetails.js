import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Button, Grid, Box } from "@material-ui/core";
import LoadingSpinner from "../component/LoadingSpinner";
import ErrorMessage from "../component/ErrorMessage";

import {
    getProductDetails,
    clearProductDetails,
} from "../actions/productActions";
import ProductDetailsActionButtons from "../component/ProductDetailsActionButtons";
import ProductDetailsContent from "../component/ProductDetailsContent";
const ProductDetails = ({ match }) => {
    const dispatch = useDispatch();

    const productDetails = useSelector((state) => state.productDetails);
    const { loading, error, product } = productDetails;

    useEffect(() => {
        dispatch(getProductDetails(match.params.id));

        return () => {
            dispatch(clearProductDetails());
        };
    }, [dispatch, match.params.id]);

    return (
        <>
            <Box padding="2em 0em">
                <Button component={Link} variant="outlined" to="/">
                    Go Back
                </Button>
            </Box>
            {loading ? (
                <LoadingSpinner />
            ) : error ? (
                <ErrorMessage />
            ) : (
                <Grid container direction="row">
                    <Grid item xs={6} style={{ maxHeight: "60vh" }}>
                        <img
                            src={product.image}
                            alt="productImage"
                            width="100%"
                            height="100%"
                        />
                    </Grid>
                    <Grid
                        item
                        xs={6}
                        container
                        direction="column"
                        justify="space-between"
                        style={{ paddingLeft: "2em" }}
                    >
                        <Grid item>
                            <ProductDetailsContent product={product} />
                        </Grid>
                        <Grid item container direction="row">
                            <ProductDetailsActionButtons
                                productId={product._id}
                                countInStock={product.countInStock}
                            />
                        </Grid>
                    </Grid>
                </Grid>
            )}
        </>
    );
};

export default ProductDetails;
