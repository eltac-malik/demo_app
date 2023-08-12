import { createSlice } from "@reduxjs/toolkit";

import { Filter } from "@common/models";



export const initialFilter: Filter = { price: 0, rating: 1, title: "" };


const productSlice = createSlice({
  name: "product",
  initialState: {
    filter: initialFilter,
  },
  reducers: {
    setFilter:(state,action)=>{
        state.filter = action.payload   
    }
  },
});


export default productSlice.reducer

export const {setFilter} = productSlice.actions