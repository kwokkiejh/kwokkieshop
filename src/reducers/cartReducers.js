export const cartReducer = (state = { cartItems: [] }, action) => {
    switch (action.type) {
        case "CART_ADD_ITEM": {
            const item = action.payload;
            const itemExists = state.cartItems.find(
                (currentItem) => currentItem.productId === item.productId
            );
            if (itemExists) {
                return {
                    ...state,
                    cartItems: state.cartItems.map((x) =>
                        x.productId === item.productId ? item : x
                    ),
                };
            } else {
                return {
                    ...state,
                    cartItems: [...state.cartItems, item],
                };
            }
        }
        case "CART_REMOVE_ITEM":
            return {
                ...state,
                cartItems: state.cartItems.filter(
                    (x) => x.productId !== action.payload
                ),
            };
        case "CART_ERROR":
            return { ...state, error: action.payload };
        default:
            return state;
    }
};
