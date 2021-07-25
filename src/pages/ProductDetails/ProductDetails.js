import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Grid, Typography, Container } from "@material-ui/core";
import LoadingSpinner from "../../components/LoadingSpinner";
import ErrorMessage from "../../components/ErrorMessage";
import { makeStyles } from "@material-ui/core/styles";
import {
    getProductDetails,
    clearProductDetails,
} from "../../actions/productActions";
import ProductDetailsActionButtons from "./components/ProductDetailsActionButtons";
import ProductDetailsContent from "./components/ProductDetailsContent";

const useStyles = makeStyles({
    root: {
        paddingTop: "2rem",
        paddingBottom: "2rem",
    },
    image: {
        height: "60vh",
        width: "100%",
    },
});

const ProductDetails = ({ match }) => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const productDetails = useSelector((state) => state.productDetails);
    const { loading, error, product } = productDetails;

    useEffect(() => {
        dispatch(getProductDetails(match.params.id));

        return () => {
            dispatch(clearProductDetails());
        };
    }, [dispatch, match.params.id]);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <Container className={classes.root}>
            {loading ? (
                <LoadingSpinner />
            ) : error ? (
                <ErrorMessage />
            ) : (
                <Grid container>
                    <Grid item xs={6}>
                        <img
                            src={product.image}
                            alt="productImage"
                            className={classes.image}
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
                        <Grid item style={{ marginBottom: "2rem" }}>
                            <ProductDetailsContent product={product} />
                        </Grid>
                        {product.countInStock !== 0 ? (
                            <Grid item container>
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