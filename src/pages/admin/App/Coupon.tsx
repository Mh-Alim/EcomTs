import React, { FormEvent, useState } from "react";
import AdminSidebar from "../../../components/admin/AdminSidebar";


const allDigits = "0123456789";
const allCharacters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
const allSymbols = "!@#$%^&*()_+|\}]{[?/><";
const Coupon = () => {

  const [includeText, setIncludeText] = useState<string>("");
  const [couponLength, setCouponLength] = useState<number>();
  const [includeNumbers, setIncludeNumbers] = useState<boolean>(false);
  const [includeCharacters, setIncludeCharacters] = useState<boolean>(false);
  const [includeSymbols, setIncludeSymbols] = useState<boolean>(false);
  const [coupon, setCoupon] = useState<string>("");

  const submitHandler = (e:FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!couponLength || couponLength < 8) {
      alert("Coupon Length must be >= 8");
      return;
    }
    let coupon = includeText;
    let allValidString:string ="";
    if (includeNumbers) allValidString += allDigits;
    if (includeCharacters) allValidString += allCharacters;
    if (includeSymbols) allValidString += allSymbols;
    console.log(allValidString);
    let reqLength = couponLength - includeText.length;

    for (let i = 0; i < reqLength; i++) {
      coupon += allValidString[Math.floor(Math.random() * allValidString.length)];
    }
 
    setCoupon(coupon);
    return coupon;
    
  }
  const copyCouponHandler = async () => {
    try {
      await navigator.clipboard.writeText(coupon);
    } catch (error) {
      console.error('Failed to copy coupon: ', error);
    }
    setCoupon("Copied!")
  }
  return (
    <div className="flex gap-5 h-[100vh] ">
      <AdminSidebar />
      <main className=" w-full p-5 overflow-y-scroll  bg-slate-100  ">
        <h1 className=" text-2xl font-medium ">Coupon</h1>
        <div className=" w-full h-[90vh]  flex justify-center items-center ">
          <form onSubmit={submitHandler} className=" rounded-lg bg-white p-5 w-2/5 ">
            <div className=" flex mb-5 ">
              <input
                className="m-1 w-full p-2 outline-none border-2 border-slate-500 rounded-sm "
                type="text"
                placeholder="Text To Include"
                value={includeText}
                onChange={(e) => setIncludeText(e.target.value)}
              />
              <input
                type="number"
                className=" remove-arrow m-1 w-16 p-2 outline-none border-2 border-slate-500 rounded-sm  "
                value={couponLength}
                onChange={(e) => setCouponLength(Number(e.target.value))}
              />
            </div>

            <fieldset className=" flex justify-center  mb-5 w-full p-3 outline-none border-2 border-slate-500 rounded-sm ">
              <legend>Include</legend>
              <input onChange={() => setIncludeNumbers(prev => !prev) } checked={includeNumbers} className=" mr-2 " id="numbers" type="checkbox" />
              <label className=" mr-5 " htmlFor="numbers">
                Numbers
              </label>

              <input checked={includeCharacters} onChange={() => setIncludeCharacters(prev => !prev)} className=" mr-2 " id="characters" type="checkbox" />
              <label className=" mr-5 " htmlFor="characters">
                Characters
              </label>

              <input checked={includeSymbols} onChange={() => setIncludeSymbols(prev => !prev)} className=" mr-2 " id="symbols" type="checkbox" />
              <label htmlFor="symbols">Symbols</label>
            </fieldset>
            <button
              className=" mt-10 bg-blue-500 px-8 py-3 w-full rounded-lg text-white  "
              type="submit"
              
            >
              Generate
            </button>
            <div className=" mt-4 flex justify-center items-center">  <p onClick={copyCouponHandler}  className={` ${coupon === "Copied!" ? "bg-slate-500 text-white" : "" } w-fit px-5 py-2 cursor-pointer transition-all duration-300  rounded-lg hover:bg-slate-500 hover:text-white  `} >{ coupon }</p></div>
          </form>
        </div>
      </main>
    </div>
  );
};

export default Coupon;
