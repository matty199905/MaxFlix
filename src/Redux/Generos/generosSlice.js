import { createSlice } from "@reduxjs/toolkit";



const initialState = {

activeFilter: null,

}

export const generosSlice = createSlice({

    name: 'generos',
    initialState: initialState,
    reducers: {

        selectedFilter: (state, action) => {
            const isSameFilter = state.activeFilter?.id === action.payload?.id && state.activeFilter?.name === action.payload?.name
            return {
                ...state,
                activeFilter: isSameFilter ? null : action.payload
            }
        },

    }

})


export const {selectedFilter} = generosSlice.actions

export default generosSlice.reducer
