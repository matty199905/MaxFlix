import { configureStore } from '@reduxjs/toolkit'
import { generosSlice } from './Generos/generosSlice';
import { SearchValueSlice } from './SearchValue/SearchValueSlice';









export const store = configureStore({

    reducer: {
        
        generos: generosSlice.reducer,
        searchValue: SearchValueSlice.reducer,
        
    },

    middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false }),

})


