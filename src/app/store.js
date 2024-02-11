import { configureStore } from "@reduxjs/toolkit";
import ItemReducer from '../features/Item/ItemSlice'
import GlitterReducer from '../features/glitter/glitterSlice'
import LetterReducer from '../features/letter/LetterSlice'
import CrystalPaintReducer from "../features/crystalPaint/CrystalPaintSlice";
import CloudFallReducer from "../features/cloudFall/CloudFallSlice";
import CartReducer from "../features/Cart/CartSlice";

const store = configureStore({
    reducer: {
        item: ItemReducer,
        glitter: GlitterReducer,
        letter: LetterReducer,
        paint: CrystalPaintReducer,
        cloud: CloudFallReducer,
        cart: CartReducer,
    },

})

export default store