import { createSlice } from "@reduxjs/toolkit";



const initialState = {

    value: null,

}


export const SearchValueSlice = createSlice({
    name:'searchValue',
    initialState: initialState,
    reducers: {

setValue: (state, action) => {

    
    return {
        ...state,
        value: action.payload,
    }
}
    }

})



export const {setValue} = SearchValueSlice.actions

export default SearchValueSlice.reducer