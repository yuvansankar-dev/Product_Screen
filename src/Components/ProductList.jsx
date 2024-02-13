import { useState } from "react";
import Card from "./Card";

const ProductList = ({ setCartCount }) => {
  var productList = [
    { productName: "Special Item 1", price: 19 },
    { productName: "Special Item 2", price: 20 },
    { productName: "Special Item 3", price: 21 },
    { productName: "Special Item 4", price: 22 },
    { productName: "Special Item 5", price: 23 },
    { productName: "Special Item 6", price: 24 },
    { productName: "Special Item 7", price: 25 },
    { productName: "Special Item 8", price: 26 },
    { productName: "Special Item 9", price: 27 },
    { productName: "Special Item 10", price: 28 },
  ];
  return (
    <section className='py-5'>
      <div className='container px-4 px-lg-5 mt-5'>
        <div className='row gx-4 gx-lg-5 row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-xl-4 justify-content-center'>
          {productList.map((productDetail) => (
            <Card
              setCartCount={setCartCount}
              productDetail={productDetail}
              key={productDetail.productName}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductList;
