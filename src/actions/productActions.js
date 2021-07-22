import axios from "axios";

export const listProducts = () => async (dispatch) => {
    try {
        dispatch({ type: "PRODUCT_LIST_REQUEST" });
        const { data } = await axios.get("/api/products");
        dispatch({
            type: "PRODUCT_LIST_SUCCESS",
            payload: data,
        });
    } catch (error) {
        dispatch({
            type: "PRODUCT_LIST_ERROR",
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
        });
    }
};

export const getProductDetails = (id) => async (dispatch) => {
    try {
        dispatch({ type: "PRODUCT_DETAILS_REQUEST" });
        const { data } = await axios.get(`/api/products/${id}`);
        dispatch({
            type: "PRODUCT_DETAILS_SUCCESS",
            payload: data,
        });
    } catch (error) {
        dispatch({
            type: "PRODUCT_DETAILS_ERROR",
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
        });
    }
};

export const clearProductDetails = () => async (dispatch) => {
    dispatch({ type: "CLEAR_PRODUCT_DETAILS", payload: {} });
};
