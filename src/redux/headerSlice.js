import { createSlice } from "@reduxjs/toolkit";

export const headerSlice = createSlice ({
name:'langHandl' ,
initialState :{

    lang : true

},
reducers:{
    setOff : (state) => {
        state.lang = true
    },
    setOn : (state) => {
        state.lang = false
    }
}

})

export const {handelLang , setOff , setOn} = headerSlice.actions;
export default headerSlice.reducer