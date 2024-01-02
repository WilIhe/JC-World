import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    chosenCrystalPaint: '',
}

const CrystalPaintSlice = createSlice({
    name: 'crystalpaint',
    initialState,
    reducers: {
        selectedCrystalPaint: (state, action) => {
            state.chosenCrystalPaint = action.payload
        }
    }
})  

export default CrystalPaintSlice.reducer
export const { selectedCrystalPaint } = CrystalPaintSlice.actions