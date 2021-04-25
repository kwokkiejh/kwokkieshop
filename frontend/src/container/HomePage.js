import React from "react";
import products from "../products";
import { Grid, Typography } from "@material-ui/core";
import Product from "../component/Product";
const HomePage = () => {
  return (
    <>
      <Typography variant="h4">Latest Products</Typography>
      <Grid container direction="row" alignItems="stretch" spacing={2}>
        {products.map((product) => (
          <Grid item key={product._id} xs={12} sm={6} md={3} lg={3} xl={3}>
            <Product product={product} />
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default HomePage;
