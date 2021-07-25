import React, { useState, useEffect } from "react";
import { Drawer, Typography } from "@material-ui/core";
import Header from "./Header";
import Footer from "./Footer";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { useMediaQuery } from "@material-ui/core";
import CondensedHeader from "./CondensedHeader";
import TempDrawer from "./TempDrawer";

const Layout = (props) => {
    const theme = useTheme();
    const matchesSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

    const [tempDrawer, setTempDrawer] = useState(false);
    const handleTempDrawer = () => {
        setTempDrawer(!tempDrawer);
    };

    const [shopMenu, setShopMenu] = useState(false);
    const handleShopMenu = () => {
        setShopMenu(!shopMenu);
    };

    useEffect(() => {
        if (matchesSmallScreen) {
            setShopMenu(false);
        } else {
            setTempDrawer(false);
            setShopMenu(false);
        }
    }, [matchesSmallScreen]);

    return (
        <>
            {matchesSmallScreen ? (
                <CondensedHeader handleTempDrawer={handleTempDrawer} />
            ) : (
                <Header shopMenu={shopMenu} handleShopMenu={handleShopMenu} />
            )}

            <main>{props.children}</main>
            <Footer />
            <TempDrawer
                tempDrawer={tempDrawer}
                handleTempDrawer={handleTempDrawer}
                shopMenu={shopMenu}
                handleShopMenu={handleShopMenu}
            />
        </>
    );
};

export default Layout;
