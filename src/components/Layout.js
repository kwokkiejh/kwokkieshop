import React, { useState, useEffect } from "react";
import { Backdrop } from "@material-ui/core";
import Header from "./Header";
import Footer from "./Footer";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { useMediaQuery } from "@material-ui/core";
import CondensedHeader from "./CondensedHeader";

const useStyles = makeStyles((theme) => ({
    backdrop: { zIndex: theme.zIndex.drawer + 1, color: "#fff" },
}));

const Layout = (props) => {
    const classes = useStyles();
    const theme = useTheme();
    const matchesSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

    const [shopDrawer, setShopDrawer] = useState(false);
    const handleShopDrawer = () => {
        setShopDrawer(!shopDrawer);
    };

    useEffect(() => {
        if (matchesSmallScreen) {
            setShopDrawer(false);
        }
    }, [matchesSmallScreen]);
    return (
        <>
            {matchesSmallScreen ? (
                <CondensedHeader />
            ) : (
                <Header
                    shopDrawer={shopDrawer}
                    handleShopDrawer={handleShopDrawer}
                />
            )}

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
