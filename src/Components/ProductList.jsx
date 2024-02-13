import { useState } from "react";
import Card from "./Card";

const ProductList = ({ setCartCount }) => {
  var productList = [
    { productName: "Special Item 1", description: " This Product cost $19 " },
    { productName: "Special Item 2", description: " This Product cost $20 " },
    { productName: "Special Item 3", description: " This Product cost $21 " },
    { productName: "Special Item 4", description: " This Product cost $22 " },
    { productName: "Special Item 5", description: " This Product cost $23 " },
    { productName: "Special Item 6", description: " This Product cost $24 " },
    { productName: "Special Item 7", description: " This Product cost $25 " },
    { productName: "Special Item 8", description: " This Product cost $26 " },
    { productName: "Special Item 9", description: " This Product cost $27 " },
    { productName: "Special Item 10", description: " This Product cost $28 " },
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
