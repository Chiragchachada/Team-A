import React from "react";
import Product from "../component/Product";
import products from "../component/data";
export default function Homescreen() {
  return (
    <div>
      <div className="row">
        {products.map((product) => {
          return (
            <div className="col-md-4">
              <div>
                <Product product={product} />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
