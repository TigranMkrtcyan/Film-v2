import { createSlice } from "@reduxjs/toolkit";

const globalSlice = createSlice({
    name : "globalSlice",
    initialState : {
        language : "en-Us",
        loading : false
    },
    reducers : {
        changeLanguage(state,action) {
            state.language = action.payload
        },
        changeLoading(state,action) {
            state.language = action.payload
        }
    }
})

export const {changeLanguage} = globalSlice.actions
export default globalSlice.reducer