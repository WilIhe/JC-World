import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    cartCount: 0
}

const CartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        add: state => {
            state.cartCount++
        },
        remove: state => {
            state.cartCount--
        },
    }
});

export default CartSlice.reducer
export const { add, remove } = CartSlice.actions