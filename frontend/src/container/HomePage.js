import React from "react";
import products from "../products";
import { Grid, Container } from "@material-ui/core";
import Product from "../component/Product";
const HomePage = () => {
  return (
    <>
      <Container>
        <h1>Latest Products</h1>
        <Grid container direction="row" alignItems="stretch" spacing={2}>
          {products.map((product) => (
            <Grid item key={product._id} xs={12} sm={6} md={3} lg={3} xl={3}>
              <Product product={product} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
};

export default HomePage;
