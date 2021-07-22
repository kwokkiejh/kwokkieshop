import React from "react";
import { Typography } from "@material-ui/core";

const ProductDetailsContent = ({ product }) => {
    return (
        <>
            <Typography variant="h5">{product.name}</Typography>
            <Typography variant="h6">${product.price}</Typography>
            <Typography
                variant="body2"
                style={{ fontWeight: "bold", marginTop: "2rem" }}
            >
                Description
            </Typography>
            <Typography variant="body2">{product.description}</Typography>
        </>
    );
};

export default ProductDetailsContent;
