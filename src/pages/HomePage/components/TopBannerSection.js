import React from "react";
import { Box, Button, Typography } from "@material-ui/core";
import ImageComponent from "../../../components/common/ImageComponent";
import { Link } from "react-router-dom";

const TopBannerSection = () => {
    return (
        <Box height="70vh" position="relative">
            <ImageComponent
                source="/images/topBannerOne.jpg"
                imageStyle={{ opacity: "0.8", width: "100%", height: "100%" }}
            />
            <div
                style={{
                    position: "absolute",
                    top: "65%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    textAlign: "center",
                }}
            >
                <Typography
                    variant="h4"
                    style={{ marginBottom: "0.5rem", fontWeight: "bold" }}
                >
                    Lovely things for your pets
                </Typography>
                <Button
                    variant="contained"
                    size="large"
                    disableElevation
                    color="primary"
                    component={Link}
                    to={"/shop/all"}
                >
                    <Typography variant="h6" style={{ fontWeight: "bold" }}>
                        Shop All
                    </Typography>
                </Button>
            </div>
        </Box>
    );
};

export default TopBannerSection;
