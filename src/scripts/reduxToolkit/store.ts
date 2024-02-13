import { configureStore } from "@reduxjs/toolkit";
import sliceTableReducer from './slice';

export const store = configureStore({
    reducer: {
        tableData: sliceTableReducer
    }
});