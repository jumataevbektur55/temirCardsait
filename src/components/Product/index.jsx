import React from "react";
import ProductCard from "./ProductCard";
import { data } from "../../Data/index";

const Product = () => {
  console.log(data);
  return (
    <div id="product">
      <div className="container">
        <div className="flex  justify-center items-center ">
          {data.map((el) => (
            <ProductCard el={el} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Product;
