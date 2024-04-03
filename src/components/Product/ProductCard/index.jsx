import React from "react";
const ProductCard = ({ el }) => {
  console.log(el.image, "img");

  return (
    <div id="product">
      <div className="container">
          <div className=" w-[200px] rounded-[10px] h-[330px] bg-[#3b3b3b] flex items-center  flex-col gap-7">
            <img src={el.image} alt="img" />
            <h1>{el.title}</h1>
            <h3>{el.price}</h3>
            <button className="  w-[150px] h-[50px] text-center text-[25px] text-blue-50 bg-black-900 border-[3px] rounded-[10px]">
              Create
            </button>
          </div>
        </div>
      </div>
  );
};

export default ProductCard;
