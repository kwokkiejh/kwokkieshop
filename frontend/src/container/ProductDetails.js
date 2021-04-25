import React from "react";
import { Link } from "react-router-dom";
import products from "../products";
import { Button, Grid, Box, Divider, Typography } from "@material-ui/core";

const ProductDetails = ({ match }) => {
  const product = products.find((p) => p._id === match.params.id);

  return (
    <>
      <Box padding="2em 0em">
        <Button component={Link} variant="outlined" to="/">
          Go Back
        </Button>
      </Box>
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
            <Typography variant="h5">{product.name}</Typography>
            <Divider />
            <Typography variant="h5">{product.price}</Typography>
            <Divider />
            <Typography variant="body1" style={{ fontWeight: "bold" }}>
              Description
            </Typography>
            <Typography variant="body1">{product.description}</Typography>
            <Divider />
          </Grid>
          <Grid item>
            <Button fullWidth variant="contained">
              Add to Cart
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default ProductDetails;
