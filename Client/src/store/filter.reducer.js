import {createSlice} from '@reduxjs/toolkit'


const filterReducer = createSlice({
    name: "filter",
    initialState: {filter: {} },
    reducers: {
        FETCH_DATA(state, action){
            return {filter : action.payload};
          },
          ADD_DATA(state, action){
            let newFilter = [...state.filter, action.payload]
            return {filter: newFilter};
          
      },
    }
  })

  export const {FETCH_DATA, ADD_DATA} = filterReducer.actions
  export default filterReducer.reducer

  export const addfilterdata=(items)=>{
    return async(dispatch) =>{
      dispatch(ADD_DATA(items))
    }
  }

  export const fetchfilterdata = (items) => {
    return async(dispatch) =>{
        dispatch(FETCH_DATA(items));
    }
    
    }
  