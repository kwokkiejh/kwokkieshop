import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Grid, Typography, Container, useMediaQuery } from "@material-ui/core";
import LoadingSpinner from "../../components/LoadingSpinner";
import ErrorMessage from "../../components/ErrorMessage";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import {
    getProductDetails,
    clearProductDetails,
} from "../../actions/productActions";
import ProductDetailsActionButtons from "./components/ProductDetailsActionButtons";
import ProductDetailsContent from "./components/ProductDetailsContent";
import ImageComponent from "../../components/common/ImageComponent";

const useStyles = makeStyles((theme) => ({
    root: {
        paddingTop: "2rem",
        paddingBottom: "2rem",
    },
    image: {
        height: "60vh",
        width: "100%",
    },
    gridProduct: {
        [theme.breakpoints.up("sm")]: {
            paddingLeft: "2rem",
        },
    },
    gridContent: {
        marginBottom: "2rem",
    },
}));

const ProductDetails = ({ match }) => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const productDetails = useSelector((state) => state.productDetails);
    const { loading, error, product } = productDetails;
    const theme = useTheme();
    const matchesSmallScreen = useMediaQuery(theme.breakpoints.down("xs"));

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
                    <Grid item xs={matchesSmallScreen ? 12 : 6}>
                        <ImageComponent
                            source={product.image}
                            imageStyle={{ height: "60vh", width: "100%" }}
                        />
                    </Grid>
                    <Grid
                        item
                        xs={matchesSmallScreen ? 12 : 6}
                        container
                        direction="column"
                        justify="space-between"
                        className={classes.gridProduct}
                    >
                        <Grid item className={classes.gridContent}>
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
