import { configureStore } from "@reduxjs/toolkit";
import ItemReducer from '../features/Item/ItemSlice'
import GlitterReducer from '../features/glitter/glitterSlice'
import LetterReducer from '../features/letter/LetterSlice'
import CrystalPaintReducer from "../features/crystalPaint/CrystalPaintSlice";
import CloudFallReducer from "../features/cloudFall/CloudFallSlice";

const store = configureStore({
    reducer: {
        Item: ItemReducer,
        glitter: GlitterReducer,
        Letter: LetterReducer,
        Paint: CrystalPaintReducer,
        Cloud: CloudFallReducer
    },

})

export default store