import { configureStore } from "@reduxjs/toolkit";
import ItemReducer from '../features/Item/ItemSlice'
import GlitterReducer from '../features/glitter/glitterSlice'
import LetterReducer from '../features/letter/LetterSlice'

const store = configureStore({
    reducer: {
        Item: ItemReducer,
        glitter: GlitterReducer,
        Letter: LetterReducer,
    },

})

export default store