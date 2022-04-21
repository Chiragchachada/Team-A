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

  // export const addfilterdata=(items)=>{
  //   return async(dispatch) =>{
  //     dispatch(ADD_DATA(items))
  //   }
  // }

  // export const fetchfilterdata = (items) => {
  //   return async(dispatch) =>{
  //       dispatch(FETCH_DATA(items));
  //   }
    
  //   }
  