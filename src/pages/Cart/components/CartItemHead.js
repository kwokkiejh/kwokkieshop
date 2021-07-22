import React from "react";
import { Divider, Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
    gridItem: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
    imageSize: {
        height: "100%",
        width: "100%",
        padding: "1rem",
    },
});
const CartItemHead = () => {
    const classes = useStyles();

    return (
        <>
            <Grid container direction="row">
                <Grid item xs={6} className={classes.gridItem}>
                    <Typography variant="caption">Item</Typography>
                </Grid>
                <Grid item xs={3} className={classes.gridItem}>
                    <Typography variant="caption">Quantity</Typography>
                </Grid>
                <Grid item xs={2} className={classes.gridItem}>
                    <Typography variant="caption">Price</Typography>
                </Grid>
            </Grid>
            <Divider style={{ margin: "0.5rem" }} />
        </>
    );
};

export default CartItemHead;
