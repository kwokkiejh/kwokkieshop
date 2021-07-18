import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Button, Grid, Box, Typography, Container } from "@material-ui/core";
import LoadingSpinner from "../../components/LoadingSpinner";
import ErrorMessage from "../../components/ErrorMessage";

import {
    getProductDetails,
    clearProductDetails,
} from "../../actions/productActions";
import ProductDetailsActionButtons from "./components/ProductDetailsActionButtons";
import ProductDetailsContent from "./components/ProductDetailsContent";
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
        <Container>
            <Box padding="2rem 0rem">
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
                        style={{ paddingLeft: "2rem" }}
                    >
                        <Grid item>
                            <ProductDetailsContent product={product} />
                        </Grid>
                        {product.countInStock !== 0 ? (
                            <Grid item container direction="row">
                                <ProductDetailsActionButtons
                                    productId={product._id}
                                    countInStock={product.countInStock}
                                />
                            </Grid>
                        ) : (
                            <Grid item>
                                <Typography>Sorry, out of stock...</Typography>
                            </Grid>
                        )}
                    </Grid>
                </Grid>
            )}
        </Container>
    );
};

export default ProductDetails;
