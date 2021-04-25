import React from "react";
import {
  Typography,
  Card,
  CardActionArea,
  CardContent,
  CardActions,
  CardMedia,
  Box,
} from "@material-ui/core";

const Product = ({ product }) => {
  return (
    <Card style={{ height: "100%" }}>
      <CardActionArea>
        <CardMedia component="img" image={product.image}></CardMedia>
        <CardContent>
          <Typography
            style={{
              height: "2.0em",
              whiteSpace: "nowrap",
              textOverflow: "ellipsis",
              overflow: "hidden",
            }}
            variant="body1"
          >
            {product.name}
          </Typography>
          <Typography variant="body2" component="p">
            {product.rating} stars from {product.numReviews} reviews
          </Typography>
          <Typography variant="h6" component="p">
            ${product.price}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default Product;
