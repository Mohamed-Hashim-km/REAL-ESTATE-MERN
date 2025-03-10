import { configureStore } from '@reduxjs/toolkit'
import { apiSlice } from './slices/apiSlice'
import { authSliceReducer } from './slices/authSlice'



export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    auth:authSliceReducer,
  },
})
 

