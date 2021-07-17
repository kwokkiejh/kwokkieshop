import React from "react";
import { Typography, Divider } from "@material-ui/core";

const ProductDetailsContent = ({ product }) => {
    return (
        <>
            <Typography variant="h5">{product.name}</Typography>
            <Divider />
            <Typography variant="h5">{product.price}</Typography>
            <Divider />
            <Typography variant="body1" style={{ fontWeight: "bold" }}>
                Description
            </Typography>
            <Typography variant="body1">{product.description}</Typography>
            <Divider />
        </>
    );
};

export default ProductDetailsContent;
