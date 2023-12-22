import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    glitter: '',
}

const glitterSlice = createSlice({
    name: 'glitter',
    initialState,
    reducers: {
        selectedGlitter: (state, action) => {
            state.glitter = action.payload
        }
    }
})

export default glitterSlice.reducer
export const { selectedGlitter } = glitterSlice.actions