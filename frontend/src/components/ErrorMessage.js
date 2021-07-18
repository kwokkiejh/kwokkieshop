import React from "react";
import { Typography, Box } from "@material-ui/core";

const ErrorMessage = () => {
    return (
        <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            padding="2rem"
        >
            <Typography variant="h3">
                Sorry, this page isn't available
            </Typography>
        </Box>
    );
};

export default ErrorMessage;
