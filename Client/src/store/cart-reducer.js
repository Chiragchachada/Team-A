import { createSlice } from '@reduxjs/toolkit'



const cartReducer = createSlice({
  name: "cart",
  initialState: {
    cart: [
    ]
  },
  reducers: {
    FETCH_CART(state, action) {
      return { cart: action.payload.data };
    },
    ADD_TO_CART(state, action) {
      let newCart = [...state.cart, action.payload]
      return { cart: newCart };
    },
    DELETE_FROM_CART(state, action) {
      let newCart = state.cart.filter(e => e._id != action.payload.id)
      return { cart: newCart };
    }
  }
})

export const { FETCH_CART, ADD_TO_CART, DELETE_FROM_CART } = cartReducer.actions
export default cartReducer.reducer



const baseUrl = 'http://localhost:4321/cart/'





export const fetchCart = (id) => {
  return async (dispatch) => {
    //  console.log("id of user", id);

    let response = await fetch(baseUrl + 'user', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(id)
    });
    let data = await response.json();
    // console.log("res data",data);



    dispatch(FETCH_CART(data));

  }
}





export const addtoCart = (product, userid, quantity) => {
  return async (dispatch) => {
    //  console.log("userid", userid);
    let response = await fetch(baseUrl + "create", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        title: product.title,
        productid: product._id,
        price: product.price,
        description: product.description,
        quantity: quantity,
        image: product.image,
        user: userid
      })
    });
    let data = await response.json();

    dispatch(ADD_TO_CART(product));
    


  }
}
// 


export const deleteFromCart = (id) => {
  // http communication
  console.log(id);

  return dispatch => {
    fetch(baseUrl + id, {
      method: 'DELETE'
    })
      .then(response => response.json())
      .then(json => {
        console.log("jsonhere", json);
        dispatch(DELETE_FROM_CART({ id }));
      })
      .catch(err => console.log(err));
  }
}



export const updatequantity = (productid,quant) => {
  console.log("lll", productid );
  return async(dispatch) => {
    let response = await fetch(baseUrl + 'updatecart/' + productid, {
      method: 'PATCH',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(quant )
      });


  }
}
// 
