import { createSlice } from "@reduxjs/toolkit";
import { selectedGlitter } from "../glitter/glitterSlice";
import { selectedLetter } from "../letter/LetterSlice";
import { selectedCrystalPaint } from "../crystalPaint/CrystalPaintSlice";
import { selectedCloudFall } from "../cloudFall/CloudFallSlice";
import { add as keychainAdded } from "../Cart/CartSlice";

const initialState = {
    glitter: '',
    letter: '',
    crystalPaint: '',
    cloudFall: '',
}

const ItemSlice = createSlice({
    name: 'keychain',
    initialState,
    extraReducers: (builder) => {
        builder.addCase(keychainAdded, state => {
            state.glitter = selectedGlitter,
            state.letter = selectedLetter,
            state.crystalPaint = selectedCrystalPaint,
            state.cloudFall = selectedCloudFall
        })
    }
})

export default ItemSlice.reducer
//export const { currentGlitter, currentLetter, currentCrystalPaint, currentCloudFall } = ItemSlice.actions