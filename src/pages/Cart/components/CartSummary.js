import React from "react";
import { Box, Typography, Grid, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";

const useStyles = makeStyles({
    bold: {
        fontWeight: "bold",
    },
    price: {
        textAlign: "right",
    },
});
const CartSummary = ({ subTotalPrice, shippingPrice, totalPrice }) => {
    const classes = useStyles();
    return (
        <Grid container direction="column" justify="space-around">
            <Grid item container>
                <Grid item xs={12}>
                    <Box marginBottom="1rem">
                        <Typography variant="h6" className={classes.bold}>
                            Summary
                        </Typography>
                    </Box>
                </Grid>
                <Grid item xs={8}>
                    <Typography>Subtotal</Typography>
                </Grid>
                <Grid item xs={4}>
                    <Typography className={classes.price}>
                        ${subTotalPrice}
                    </Typography>
                </Grid>
                <Grid item xs={8}>
                    <Typography>Shipping</Typography>
                </Grid>
                <Grid item xs={4}>
                    <Typography className={classes.price}>
                        ${shippingPrice}
                    </Typography>
                </Grid>
            </Grid>
            <Grid item container>
                <Grid item xs={12}>
                    <Box marginBottom="1rem">
                        <Grid item container>
                            <Grid item xs={8}>
                                <Typography className={classes.bold}>
                                    Total
                                </Typography>
                            </Grid>
                            <Grid item xs={4}>
                                <Typography
                                    className={clsx(
                                        classes.bold,
                                        classes.price
                                    )}
                                >
                                    ${totalPrice}
                                </Typography>
                            </Grid>
                        </Grid>
                    </Box>
                </Grid>
                <Grid item xs={12}>
                    <Button
                        fullWidth
                        variant="contained"
                        size="large"
                        color="primary"
                    >
                        <Typography style={{ fontWeight: "bold" }}>
                            Checkout
                        </Typography>
                    </Button>
                </Grid>
            </Grid>
        </Grid>
    );
};

export default CartSummary;
