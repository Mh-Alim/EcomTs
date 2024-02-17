import React, { useState } from "react";
import AdminSidebar from "../../../components/admin/AdminSidebar";

type OrderItemProps = {
  photo: string;
  name: string;
  quantity: number;
  price: number;
};

type OrderInfoType = {
  name: string;
  city: string;
  district: string;
  state: string;
  country: string;
  pinCode: number;
  subtotal: number;
  shippingCharges: number;
  discount: number;
  tax: number;
  total: number;
  status: "Processing" | "Delivered" | "Shipped";
};

const img1 = "https://m.media-amazon.com/images/I/71cflgAolqL._SY695_.jpg";
const img2 = "https://m.media-amazon.com/images/I/61MnrUAKACL._SL1500_.jpg";

const orderInfoInitial: OrderInfoType = {
  name: "Alim Khan",
  city: "Akaltara",
  district: "Janjgir-champa",
  state: "C.G.",
  country: "India",
  pinCode: 495552,
  subtotal: 1000,
  shippingCharges: 200,
  discount: 100,
  tax: 100,
  total: 1000 + 200 - 100 + 100,
  status: "Delivered",
};
const TransactionManagement = () => {
  const [orderInfo, setOrderInfo] = useState<OrderInfoType>(orderInfoInitial);

  const updateHandler = () => {
    setOrderInfo((prev: OrderInfoType) => ({
      ...prev,
      status: prev.status === "Shipped" ? "Delivered" : "Shipped",
    }));
  };
  return (
    <div className=" flex gap-5 h-[100vh] ">
      <AdminSidebar />
      <main className=" bg-slate-100 w-full flex justify-center items-center gap-5 ">
        <div className=" overflow-y-scroll no-scrollbar w-2/6 h-3/4  p-5 shadow-md shadow-slate-500 rounded-md bg-white ">
          <h1 className=" uppercase  text-3xl tracking-widest text-center  ">
            Order Items
          </h1>
          <div className=" p-5 " >
            <OrderItems
              photo={img1}
              name="puma shoes"
              quantity={3}
              price={2000}
            />
            <OrderItems
              photo={img2}
              name="Digital Watch"
              quantity={5}
              price={400}
            />
          </div>
        </div>
        <div className=" h-3/4 shadow-md shadow-slate-500 w-2/6 p-3 bg-white rounded-md ">
          <h1 className="uppercase mb-5 text-3xl tracking-widest text-center  ">
            Order Info
          </h1>
          <div className=" p-5 ">
            <div className=" mt-5">
              <h1 className=" font-bold my-3 mt-5 ">User Info</h1>
              <p className=" text-slate-900 "> Name: {orderInfo.name} </p>
              <p className=" text-slate-900 ">
                {" "}
                Address:{" "}
                {`${orderInfo.city}, ${orderInfo.district}, ${orderInfo.state}, ${orderInfo.country}, ${orderInfo.pinCode}`}
              </p>
            </div>
            <div className=" mt-5 ">
              <h1 className=" font-bold my-3 ">Amount Info</h1>
              <p className=" text-slate-900 ">
                {" "}
                Subtotal : {orderInfo.subtotal}{" "}
              </p>
              <p className=" text-slate-900 ">
                {" "}
                Shipping : {orderInfo.shippingCharges}{" "}
              </p>
              <p className=" text-slate-900 "> Tax : {orderInfo.tax} </p>
              <p className=" text-slate-900 ">
                {" "}
                Discount : {orderInfo.discount}{" "}
              </p>
              <p className=" text-slate-900 "> Total : {orderInfo.total} </p>
            </div>
            <div className=" mt-5 ">
              <h1 className=" font-bold  my-3 "> Status Info </h1>
              <p className=" text-slate-900 ">
                {" "}
                status :{" "}
                {orderInfo.status === "Processing" ? (
                  <span className=" text-red-500 font-medium ">
                    {orderInfo.status}
                  </span>
                ) : orderInfo.status === "Delivered" ? (
                  <span className=" text-purple-500 font-medium ">
                    {orderInfo.status}
                  </span>
                ) : (
                  <span className=" text-green-500 font-medium ">
                    {orderInfo.status}
                  </span>
                )}{" "}
              </p>
            </div>
            <div className="  mt-8 flex justify-center  ">
              <button
                onClick={updateHandler}
                className="w-3/4 p-4 bg-blue-600 rounded-md text-white"
              >
                Process Status
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

const OrderItems = ({ photo, name, quantity, price }: OrderItemProps) => {
  return (
    <div className=" font-medium text-slate-700  flex justify-between m-2 items-center p-2 rounded-md ">
      <div className=" flex items-center ">
        <img
          className=" w-16 h-16 object-cover rounded-lg mr-3 "
          src={photo}
          alt=""
        />
        <p>{name}</p>
      </div>
      <p>
        {" "}
        ${price} X {quantity} = ${price * quantity}{" "}
      </p>
    </div>
  );
};

export default TransactionManagement;
