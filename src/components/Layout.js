import React, { useState } from "react";
import { Backdrop } from "@material-ui/core";
import Header from "./Header";
import Footer from "./Footer";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    backdrop: { zIndex: theme.zIndex.drawer + 1, color: "#fff" },
}));
const Layout = (props) => {
    const classes = useStyles();
    const [shopDrawer, setShopDrawer] = useState(false);
    const handleShopDrawer = () => {
        setShopDrawer(!shopDrawer);
    };
    return (
        <>
            <Header
                shopDrawer={shopDrawer}
                handleShopDrawer={handleShopDrawer}
            />
            <main>
                {props.children}
                <Backdrop
                    className={classes.backdrop}
                    open={shopDrawer}
                ></Backdrop>
            </main>
            <Footer />
        </>
    );
};

export default Layout;
