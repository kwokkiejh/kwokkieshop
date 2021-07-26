import React from "react";
import { Typography, Box } from "@material-ui/core";
import { Link } from "react-router-dom";
import ImageComponent from "./ImageComponent";

const Product = ({ product }) => {
    return (
        <Box>
            <Link to={`/product/${product._id}`}>
                <ImageComponent
                    source={product.image}
                    imageStyle={{ width: "100%", height: "220px" }}
                />
            </Link>

            <Typography
                style={{
                    height: "2rem",
                    whiteSpace: "nowrap",
                    textOverflow: "ellipsis",
                    overflow: "hidden",
                    textAlign: "center",
                }}
                variant="h6"
            >
                {product.name}
            </Typography>

            <Typography
                variant="body1"
                component="p"
                style={{ textAlign: "center" }}
            >
                ${product.price}
            </Typography>
        </Box>
    );
};

export default Product;
