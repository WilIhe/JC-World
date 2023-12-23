import { configureStore } from "@reduxjs/toolkit";
import ItemReducer from '../features/Item/ItemSlice'
import GlitterReducer from '../features/glitter/glitterSlice'

const store = configureStore({
    reducer: {
        Item: ItemReducer,
        glitter: GlitterReducer,
    },

})

export default store