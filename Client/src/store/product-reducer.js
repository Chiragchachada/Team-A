
import {createSlice} from '@reduxjs/toolkit'
import globalFetch from '../Addons/globalfetch';


const productReducer = createSlice({
  name: "products",
  initialState: {products: [
  ]},
  reducers: {
    FETCH_PRODUCTS(state, action){
      return {products : action.payload.data};
    },
    ADD_PRODUCT(state, action){
      let newProducts = [...state.products, action.payload]
      return {products: newProducts};
    },
    DELETE_PRODUCT(state,action){
      let newProducts = state.products.filter(e => e._id !== action.payload.id)
      return {products: newProducts};
    }
  }
})

export const {FETCH_PRODUCTS, ADD_PRODUCT, DELETE_PRODUCT} = productReducer.actions
export default productReducer.reducer



const baseUrl = 'http://localhost:4321/category/'

export const addProduct = (product) => {
    return async(dispatch) => {
       
        let response = await globalFetch(baseUrl, "POST", product
           );
        let data = await response.json();
        console.log(data);
        dispatch(fetchProducts())
        dispatch(ADD_PRODUCT(product));

    }
}


export const fetchProducts = () => {
  return async(dispatch) => {
      let response = await fetch(baseUrl);
      let data = await response.json();
      dispatch(FETCH_PRODUCTS(data));

  }
}







  export const deleteProduct = (id) => {
    // http communication
    console.log(id);
    return async dispatch=> {
      let response= await globalFetch(baseUrl +id, "DELETE")
        let data = await response.json
        console.log("delete data", data);

        dispatch(fetchProducts())
        dispatch(DELETE_PRODUCT({id}));

          
    }
  }

export const addreview = (id, productid) =>{
  return async dispatch=>{
    let response = await fetch(baseUrl + 'addreview/' + id, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify( productid)
    });
    
   dispatch(fetchProducts())

  }
}