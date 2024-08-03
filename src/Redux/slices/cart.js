import { createSlice } from "@reduxjs/toolkit";


export const cartSlice=createSlice({
    name:"cart",
     initialState:{
        addedToCart:0 ,
        total:0,
        addedProducts:[]
     },
     reducers:{
        addedToCart :(state,action)=>{

        },
        removeFromCart:(state,action)=>{

        }
     }
})
console.log(cartSlice);

export const{addedToCart,removeFromCart}=cartSlice.actions
export default cartSlice.reducer