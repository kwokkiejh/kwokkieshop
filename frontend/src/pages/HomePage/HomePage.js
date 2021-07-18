import React, { useEffect } from "react";
import { Grid, Typography, Container } from "@material-ui/core";
import Product from "./components/Product";
import { useDispatch, useSelector } from "react-redux";
import { listProducts } from "../../actions/productActions";
import LoadingSpinner from "../../components/LoadingSpinner";
import ErrorMessage from "../../components/ErrorMessage";

const HomePage = () => {
    const dispatch = useDispatch();

    const productList = useSelector((state) => state.productList);
    const { loading, error, products } = productList;

    useEffect(() => {
        dispatch(listProducts());
    }, [dispatch]);

    return (
        <Container>
            {loading ? (
                <LoadingSpinner />
            ) : error ? (
                <ErrorMessage />
            ) : (
                <>
                    <Typography variant="h4">Latest Products</Typography>

                    <Grid
                        container
                        direction="row"
                        alignItems="stretch"
                        spacing={2}
                    >
                        {products.map((product) => (
                            <Grid
                                item
                                key={product._id}
                                xs={12}
                                sm={6}
                                md={3}
                                lg={3}
                                xl={3}
                            >
                                <Product product={product} />
                            </Grid>
                        ))}
                    </Grid>
                </>
            )}
        </Container>
    );
};

export default HomePage;
