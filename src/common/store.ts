import {configureStore} from '@reduxjs/toolkit';
import componentsStatusReducer from '../common/componentStatusSlice';



export const componentStatusStore = configureStore({
    reducer:{
        componetsStatus:componentsStatusReducer,
    },
})

export type RootState = ReturnType<typeof componentStatusStore.getState>
export type AppDispatch = typeof componentStatusStore.dispatch