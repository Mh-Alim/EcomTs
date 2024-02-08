import React, { useEffect, useState } from "react";
import { MdErrorOutline } from "react-icons/md";
import CartItem from "../components/CartItem";
import { useNavigate } from "react-router-dom";

const subtotal = 343443;
const tax = Math.round(subtotal * 0.18);
const discount = 400;
const shippingCharges = 300;
const total = subtotal + tax + shippingCharges;

const cartItems = [
  {
    productId: "13434",
    img: "https://m.media-amazon.com/images/I/71eXNIDUGjL._SL1500_.jpg",
    name: "Macbook",
    price: 3434,
    quantity: 23,
  },
  {
    productId: "13434",
    img: "https://m.media-amazon.com/images/I/71eXNIDUGjL._SL1500_.jpg",
    name: "Macbook",
    price: 3434,
    quantity: 23,
  },
  {
    productId: "13434",
    img: "https://m.media-amazon.com/images/I/71eXNIDUGjL._SL1500_.jpg",
    name: "Macbook",
    price: 3434,
    quantity: 23,
  },
  {
    productId: "13434",
    img: "https://m.media-amazon.com/images/I/71eXNIDUGjL._SL1500_.jpg",
    name: "Macbook",
    price: 3434,
    quantity: 23,
  },
  {
    productId: "13434",
    img: "https://m.media-amazon.com/images/I/71eXNIDUGjL._SL1500_.jpg",
    name: "Macbook",
    price: 3434,
    quantity: 23,
  },
  {
    productId: "13434",
    img: "https://m.media-amazon.com/images/I/71eXNIDUGjL._SL1500_.jpg",
    name: "Macbook",
    price: 3434,
    quantity: 23,
  },
  {
    productId: "13434",
    img: "https://m.media-amazon.com/images/I/71eXNIDUGjL._SL1500_.jpg",
    name: "Macbook",
    price: 3434,
    quantity: 23,
  },
  {
    productId: "13434",
    img: "https://m.media-amazon.com/images/I/71eXNIDUGjL._SL1500_.jpg",
    name: "Macbook",
    price: 3434,
    quantity: 23,
  },
  {
    productId: "13434",
    img: "https://m.media-amazon.com/images/I/71eXNIDUGjL._SL1500_.jpg",
    name: "Macbook",
    price: 3434,
    quantity: 23,
  },
  {
    productId: "13434",
    img: "https://m.media-amazon.com/images/I/71eXNIDUGjL._SL1500_.jpg",
    name: "Macbook",
    price: 3434,
    quantity: 23,
  },
];
const Cart = () => {
  const [coupenCode, setCoupenCode] = useState<string>("");
  const [isValidCoupenCode, setIsValidCoupenCode] = useState<boolean>(false);

  const navigate = useNavigate();

  useEffect(() => {
    let timeoutId = setTimeout(() => {
      if (Math.random() > 0.5) {
        setIsValidCoupenCode(true);
      }
    }, 1000);

    return () => {
      clearTimeout(timeoutId);
      setIsValidCoupenCode(false);
    };
  }, [coupenCode]);
  return (
    <div className=" flex p-4 h-[100vh] ">
      <main className=" flex-[0.7]  pr-16 overflow-y-scroll no-scrollbar  ">
        {cartItems.map((item) => {
          return <CartItem item={item} key={item.productId} />;
        })}
      </main>
      <aside className=" flex-[0.3]   items-center my-auto ">
          <p className="mb-4">Subtotal : ${subtotal}</p>
          <p className="mb-4">tax : ${tax}</p>
          <p className="mb-4 text-green-400 ">discount : ${discount}</p>
          <p className="mb-4">shippingCharges : ${shippingCharges}</p>
          <p className="mb-4 font-medium">Total : ${total}</p>
          <div className=" mb-4 flex flex-col  ">
            <input
              className=" rounded-sm flex-1 border-2 border-slate-300 outline-1 p-1 w-3/4  "
              placeholder="coupen code"
            type="text"
            value={coupenCode}
            onChange={(e) => {
              setCoupenCode(e.target.value.trim())
            }}
            />
            <p>
              {coupenCode.length ? (
                isValidCoupenCode ? (
                  <span className=" ml-1 text-green-500 ">
                    {" "}
                    ${discount} off using the coupen <code>{coupenCode}</code>{" "}
                  </span>
                ) : (
                  <span className=" ml-1 text-red-500 flex justify-center items-center ">
                    invalid <MdErrorOutline />
                  </span>
                )
              ) : null}
            </p>
        </div>
        <button onClick={() => navigate("/shipping")} className=" w-3/4 bg-blue-950 p-2 rounded-sm text-white ">CHECKOUT</button>
      </aside>
    </div>
  );
};

export default Cart;
