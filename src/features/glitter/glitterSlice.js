import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    glitterName: '',
}

const GlitterSlice = createSlice({
    name: 'glitter',
    initialState,
    reducers: {
        selectedGlitter: (state, action) => {
            state.glitterName = action.payload
        }
    }
}) 

export default GlitterSlice.reducer
export const { selectedGlitter } = GlitterSlice.actions