import React,{useEffect} from "react";
import Product from "./Product";
// import '../../css/Style.css'
import products from "../data";
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../../store/product-reducer'
export default function Homescreen() {
  
  const ShopData= []

  
  // ShopData.push(shop.)
  const shop = useSelector((state) => {
    return state.pr.products
  })

for(let i = 0; i< shop.length ; i++){
  let dt = shop[i].products
   for(let j = 0; j < dt.length; j++){
     ShopData.push(dt[j])
   }
 
 }
  console.log("shopdata", ShopData);
 
  
  const user = useSelector((state) => {
      return state.au.auth
    })

  const dispatch = useDispatch();
  
  // for (let i=0; i< shop.length ; i++){
  //  for(const data in shop.products){
  //    console.log(data);
  //  }
    
  // }


  useEffect(() => {
    console.log('Init ... View Products .... ');
    dispatch(fetchProducts())
  }, [dispatch])

  return (
    <div>
      <div className="row">
        {ShopData.map((products) => {
          return (
            <div className="col-md-4">
              <div>
                <Product product={products} />
                {/* {products.title} */}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
