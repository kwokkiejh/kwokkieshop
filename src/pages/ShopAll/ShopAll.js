import React, { useEffect } from "react";
import { Box, Typography, Container, Grid } from "@material-ui/core";
import Product from "../../components/common/Product";
import { useDispatch, useSelector } from "react-redux";
import { listProducts } from "../../actions/productActions";
import ImageComponent from "../../components/common/ImageComponent";
import LoadingSpinner from "../../components/LoadingSpinner";
import ErrorMessage from "../../components/ErrorMessage";

const ShopAll = () => {
    const dispatch = useDispatch();

    const productList = useSelector((state) => state.productList);
    const { loading, error, products } = productList;

    useEffect(() => {
        dispatch(listProducts());
    }, [dispatch]);

    return (
        <>
            <Box height="40vh" position="relative">
                <ImageComponent
                    source="/images/shopAllBanner.jpg"
                    imageStyle={{ width: "100%", height: "100%" }}
                />
                <div
                    style={{
                        position: "absolute",
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                        textAlign: "center",
                    }}
                >
                    <Typography variant="h4" style={{ fontWeight: "bold" }}>
                        Shop All
                    </Typography>
                </div>
            </Box>
            <Container>
                {loading ? (
                    <LoadingSpinner />
                ) : error ? (
                    <ErrorMessage />
                ) : (
                    <Grid container alignItems="stretch" spacing={2}>
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
        </>
    );
};

export default ShopAll;
