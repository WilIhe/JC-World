import { configureStore } from "@reduxjs/toolkit";
import ItemReducer from '../features/Item/ItemSlice'


const store = configureStore({
    reducer: {
        Item: ItemReducer,
    },

})

export default store