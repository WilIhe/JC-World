import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    glitter: '',
    letter: '',
    crystalPaint: '',
    cloudFall: '',
}

const ItemSlice = createSlice({
    name: 'keychain',
    initialState,
    reducers: {
        selectedGlitter: (state, action) => {
            state.glitter = action.payload
        },
        selectedLetter: (state, action) => {
            state.letter = action.payload
        },
        selectedCrystalPaint: (state, action) => {
            state.crystalPaint = action.payload
        },
        selectedCloudFall: (state, action) => {
            state.cloudFall = action.payload
        }
    }
})

export default ItemSlice.reducer
export const { selectedGlitter, selectedLetter, selectedCrystalPaint, selectedCloudFall } = ItemSlice.actions