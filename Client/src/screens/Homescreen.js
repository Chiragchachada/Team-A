import React,{useEffect} from "react";
import Product from "../component/Product";
import products from "../component/data";
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../store/product-reducer'
export default function Homescreen() {
  
  const ShopData= []
  
  // ShopData.push(shop.)
  const shop = useSelector((state) => {
    return state.pr.products
  })
  
  // for(i = 0; i < shop.length ; i++){
  //   const st = shop[i].products
  //   for(i=0; i<st.length; i++){
  //     // console.log("st", st[i])
  //     ShopData.push(st[i])
  //   }
  //   }
  
  
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
        {ShopData.map((item) => {
          return (
            <div className="col-md-4">
              <div>
                {/* <Product product={item[0]} /> */}
                {ShopData.map((item)=>{console.log(item);
                  return(<>{item.products}</>)
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
