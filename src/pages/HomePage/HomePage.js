import React, { useEffect } from "react";
import { Grid, Typography, Container } from "@material-ui/core";
import Product from "./components/Product";
import { useDispatch, useSelector } from "react-redux";
import { listProducts } from "../../actions/productActions";
import LoadingSpinner from "../../components/LoadingSpinner";
import ErrorMessage from "../../components/ErrorMessage";
import TopBannerSection from "./components/TopBannerSection";

const HomePage = () => {
    const dispatch = useDispatch();

    const productList = useSelector((state) => state.productList);
    const { loading, error, products } = productList;

    useEffect(() => {
        dispatch(listProducts());
    }, [dispatch]);

    return (
        <>
            <Grid container direction="column">
                <Grid item>
                    <TopBannerSection />
                </Grid>
                <Grid item>
                    <Container>
                        {loading ? (
                            <LoadingSpinner />
                        ) : error ? (
                            <ErrorMessage />
                        ) : (
                            <Grid container alignItems="stretch" spacing={2}>
                                <Grid item xs={12}>
                                    <Typography
                                        variant="h4"
                                        style={{ textAlign: "center" }}
                                    >
                                        Latest Products
                                    </Typography>
                                </Grid>

                                {products.map((product) => (
                                    <Grid
                                        item
                                        key={product._id}
                                        xs={6}
                                        sm={4}
                                        md={3}
                                        lg={3}
                                        xl={3}
                                    >
                                        <Product product={product} />
                                    </Grid>
                                ))}
                            </Grid>
                        )}
                    </Container>
                </Grid>
            </Grid>
        </>
    );
};

export default HomePage;
