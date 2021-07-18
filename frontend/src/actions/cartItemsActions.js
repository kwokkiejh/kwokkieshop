import axios from "axios";

export const addToCart = (id, qty) => async (dispatch) => {
    try {
        const { data } = await axios.get(`/api/products/${id}`);
        const item = {
            name: data.name,
            qty: qty,
            image: data.image,
            price: data.price,
            countInStock: data.countInStock,
            productId: data._id,
        };
        dispatch({ type: "CART_ADD_ITEM", payload: item });
    } catch (error) {
        console.log(error);
        dispatch({ type: "CART_ERROR", payload: error });
    }
};

export const removeFromCart = (productId) => async (dispatch) => {
    dispatch({ type: "CART_REMOVE_ITEM", payload: productId });
};
