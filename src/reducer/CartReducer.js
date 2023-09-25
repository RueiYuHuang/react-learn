export const initialState = []

export const ACTIONS = {
    ADD_TO_CART: "ADD_TO_CART",
    UPDATE_COUNT: "UPDATE_COUNT",
    DELETE_PRODUCT: "DELETE_PRODUCT",
}

const CartReducer = (state, action) => {
    const {type, payload} = action
    switch(type){
        case ACTIONS.ADD_TO_CART:
            return payload
        case ACTIONS.UPDATE_COUNT:
            return payload
        case ACTIONS.DELETE_PRODUCT:
            return payload
        default:
            return state
    }
}
export default CartReducer
