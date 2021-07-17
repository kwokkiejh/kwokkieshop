import React from "react";
import { CircularProgress, Box } from "@material-ui/core";

const LoadingSpinner = () => {
    return (
        <Box display="flex" justifyContent="center" alignItems="center">
            <CircularProgress />
        </Box>
    );
};

export default LoadingSpinner;
