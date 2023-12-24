import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    chosenCloudFall: '',
}

const CloudFallSlice = createSlice({
    name: 'cloudfall',
    initialState,
    reducers: {
        selectedCloudFall: (state, action) => {
            state.glitter = action.payload
        }
    }
}) 

export default CloudFallSlice.reducer
export const { selectedCloudFall } = CloudFallSlice.actions