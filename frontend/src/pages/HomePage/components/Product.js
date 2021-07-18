import React from "react";
import {
    Typography,
    Card,
    Divider,
    CardContent,
    Grid,
    CardMedia,
    Button,
    Box,
} from "@material-ui/core";
import { Link } from "react-router-dom";

const Product = ({ product }) => {
    return (
        <Card style={{ height: "100%" }} variant="outlined">
            <Link to={`/product/${product._id}`}>
                <CardMedia component="img" image={product.image}></CardMedia>
            </Link>

            <CardContent>
                <Box margin="1rem 0rem">
                    <Typography
                        style={{
                            height: "2rem",
                            whiteSpace: "nowrap",
                            textOverflow: "ellipsis",
                            overflow: "hidden",
                        }}
                        variant="body1"
                    >
                        {product.name}
                    </Typography>
                </Box>
                <Divider />
                <Box margin="1rem 0rem">
                    <Grid container direction="row" justify="space-between">
                        <Grid item xs>
                            <Typography variant="h6" component="p">
                                ${product.price}
                            </Typography>
                        </Grid>
                        <Grid item xs>
                            <Button
                                style={{ float: "right" }}
                                component={Link}
                                variant="contained"
                                to={`/product/${product._id}`}
                            >
                                View Item
                            </Button>
                        </Grid>
                    </Grid>
                </Box>
                <Divider />
                <Box margin="1rem 0rem">
                    <Typography variant="body2" component="p">
                        {product.rating} stars from {product.numReviews} reviews
                    </Typography>
                </Box>
            </CardContent>
        </Card>
    );
};

export default Product;
