import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    chosenLetter: ''
}

const LetterSlice = createSlice({
    name: 'letter',
    initialState,
    reducers: {
        selectedLetter: (state, actions) => {
            state.chosenLetter = actions.payload
        }
    } 
})

export default LetterSlice.reducer
export const { selectedLetter } = LetterSlice.actions
