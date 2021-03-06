export const productListReducer = (state = { products: [] }, action) => {
    switch (action.type) {
        case "PRODUCT_LIST_REQUEST":
            return { loading: true, products: [] };
        case "PRODUCT_LIST_SUCCESS":
            return { loading: false, products: action.payload };
        case "PRODUCT_LIST_ERROR":
            return { loading: false, error: action.payload };
        default:
            return state;
    }
};

export const productDetailsReducer = (state = { product: [] }, action) => {
    switch (action.type) {
        case "PRODUCT_DETAILS_REQUEST":
            return { loading: true, product: [] };
        case "PRODUCT_DETAILS_SUCCESS":
            return { loading: false, product: action.payload };
        case "PRODUCT_DETAILS_ERROR":
            return { loading: false, error: action.payload };
        case "CLEAR_PRODUCT_DETAILS":
            return { loading: true, product: { reviews: [] } };
        default:
            return state;
    }
};
