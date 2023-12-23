import { configureStore } from "@reduxjs/toolkit";
import ItemReducer from '../features/Item/ItemSlice'
import GlitterReducer from '../features/glitter/glitterSlice'
import LetterReducer from '../features/letter/LetterSlice'
import CrystalPaintReducer from "../features/crystalPaint/CrystalPaintSlice";

const store = configureStore({
    reducer: {
        Item: ItemReducer,
        glitter: GlitterReducer,
        Letter: LetterReducer,
        Paint: CrystalPaintReducer
    },

})

export default store