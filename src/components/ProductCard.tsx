import React from "react";
import { FaPlus } from "react-icons/fa";

type ProductTypes = {
  product_id: string;
  img: string;
  name: string;
  price: number;
  stock: number;
  handler: () => void;
};
const ProductCard = (product: ProductTypes) => {
  return (
    <div className=" group  mx-2 transition-all  w-80 p-2 relative mt-5 mb-5 cursor-pointer ">
      <div className=" absolute w-full bg-black h-full opacity-0 group-hover:opacity-35 left-0 top-0 "></div>
      <p>
        <img className="w-80" src={product.img} alt="" />
      </p>
      <p className="flex justify-center">{product.name}</p>
      <p className="flex justify-center font-medium">${product.price}</p>
      <p className="absolute opacity-0 group-hover:opacity-100 top-[42%] left-[42%] text-4xl bg-blue-500  text-white  p-2 rounded-[50%] rotate-45 transition-all hover:rotate-0 ">
        <FaPlus />
      </p>
    </div>
  );
};

export default ProductCard;
