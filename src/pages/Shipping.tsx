import React, { useState } from "react";
import { IoMdArrowRoundBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";

type ShippingInfoType = {
  address: string;
  city: string;
  state: string;
  country: string;
  pinCode: number;
};
const Shipping = () => {
  const navigate = useNavigate();
  const [shippingInfo, setShippingInfo] = useState<ShippingInfoType>({
    address: "",
    city: "",
    state: "",
    country: "",
    pinCode: 0,
  });

  const changeHandler = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLSelectElement>
  ) => {
    setShippingInfo((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };
  return (
    <div className=" relative ">
      <div
        onClick={() => navigate("/cart")}
        className=" absolute cursor-pointer group ml-3 mt-4 w-12 h-12 bg-slate-800 rounded-full "
      >
        <IoMdArrowRoundBack className=" text-white text-2xl absolute top-3 left-3 transition-all group-hover:-translate-x-2 " />
      </div>
      <form className=" w-full h-[90vh]  flex justify-center items-center ">
        <div className=" w-72 ">
          <h1 className=" text-center  uppercase tracking-wide text-4xl mb-10  ">
            shipping <br /> address
          </h1>
          <input
            className=" mb-5 w-full p-2 outline-none border-2 border-slate-500 rounded-sm  "
            type="text"
            placeholder="Address"
            name="address"
            onChange={changeHandler}
            required
          />
          <br />
          <input
            className="mb-5 w-full p-2 outline-none border-2 border-slate-500 rounded-sm "
            type="text"
            placeholder="City"
            name="city"
            onChange={changeHandler}
            required
          />
          <br />
          <input
            className="mb-5 w-full p-2 outline-none border-2 border-slate-500 rounded-sm "
            type="text"
            placeholder="State"
            name="state"
            onChange={changeHandler}
            required
          />
          <br />
          <select
            className="mb-5 w-full p-2 outline-none border-2 border-slate-500 rounded-sm "
            name="country"
            onChange={changeHandler}
            required
          >
            <option value="">Choose Country</option>
            <option value="india">India</option>
          </select>
          <br />
          <input
            className=" remove-arrow mb-5 w-full p-2 outline-none border-2 border-slate-500 rounded-sm "
            type="number"
            placeholder="PinCode"
            name="pinCode"
            onChange={changeHandler}
            required
          />
          <br />
          <button
            className=" bg-violet-600 mb-5 w-full p-2 outline-none border-2 border-slate-500 rounded-sm text-white uppercase tracking-widest "
            type="submit"
          >
            pay now
          </button>
        </div>
      </form>
    </div>
  );
};

export default Shipping;
