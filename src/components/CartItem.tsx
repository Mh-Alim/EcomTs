import React from "react";
import { MdDelete } from "react-icons/md";

type CartItemProps = {
  item: any;
};
const CartItem = ({ item }: CartItemProps) => {
  const { productId, img, name, price, quantity } = item;
  return (
    <div className=" flex  justify-between items-center mb-2 h-fit ">
      <div className=" flex justify-between  ">
        <div className=" my-auto mr-10 ">
          <img className=" w-48 object-cover  " src={img} alt={name} />
        </div>
        <div className=" my-auto ">
          <p>{name}</p>
          <p>${price}</p>
        </div>
      </div>
      <div className=" flex justify-between " >
        <div className=" my-auto flex items-center ">
          <button className=" px-4 py-1 rounded-sm bg-slate-200 mr-3 ">
            -
          </button>
          <p>{quantity}</p>
          <button className="  py-1 px-4 rounded-sm bg-slate-200 ml-3 ">
            +
          </button>
        </div>
        <p className=" text-2xl ml-10 my-auto ">
          <MdDelete />
        </p>
      </div>
    </div>
  );
};

export default CartItem;
