import {createSlice} from '@reduxjs/toolkit'


const checkoutReducer = createSlice({
    name: "checkout",
    initialState: {checkout: {} },
    reducers: {
        FETCH_DATA(state, action){
            return {checkout : action.payload};
          },
          ADD_DATA(state, action){
            let newFilter = [...state.checkout, action.payload]
            return {checkout: newFilter};
          
      },
    }
  })

  export const {FETCH_DATA, ADD_DATA} = checkoutReducer.actions
  export default checkoutReducer.reducer

   
  const baseUrl = 'http://localhost:4321/checkout/'


  export const addcheckout = (billingAddress, userid ,cart) =>{
    console.log("qqq", billingAddress, userid ,cart);
    return async dispatch=>{
      let response = await fetch(baseUrl,{
        method: 'POST',
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify({billingAddress, userid ,cart})
      });
    
    }
    
  }