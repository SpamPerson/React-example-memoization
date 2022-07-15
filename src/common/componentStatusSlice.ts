import { defaultStatus } from "./data";
import { ComponentStatus } from "./type";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";


const initialState:ComponentStatus[] = defaultStatus;

export const componentStatusSlice = createSlice({
    name:'componetsStatus',
    initialState,
    reducers:{
        isView: (state:ComponentStatus[], actions:PayloadAction<string>) => {
            let newState:ComponentStatus[] = [];
            state.forEach(x => {
                if(x.kinds === actions.payload){
                    newState.push({
                        kinds:x.kinds,
                        isView:!x.isView
                    })
                }else{
                    newState.push({
                        kinds:x.kinds,
                        isView:x.isView
                    })
                }
            });
            return newState;
        }
    }
});

export const {isView} = componentStatusSlice.actions;
export default componentStatusSlice.reducer;