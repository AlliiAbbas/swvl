import { configureStore } from "@reduxjs/toolkit";
import headerSlice from "./headerSlice";

const store = configureStore({
    reducer : {
       langHandl : headerSlice
    }
})


export default store