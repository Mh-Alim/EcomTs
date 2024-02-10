import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc";

type TextFieldsType = {
  gender: string;
  dob: String;
};
const Login = () => {
  const [textFields, setTextFields] = useState<TextFieldsType>({
    gender: "",
    dob: "",
  });
  return (
    <div className="h-[90vh] flex justify-center items-center  ">
      <main className=" flex flex-col  shadow-black  shadow-md min-h-[50vh] min-w-96 p-5 ">
        <h1 className=" font-serif text-center uppercase tracking-widest font-medium text-3xl ">
          Login
        </h1>
        <br />
        <label htmlFor="gender">Gender</label>
        <select
          className="mb-5 w-full p-2 outline-none border-2 border-slate-500 rounded-sm"
          id="gender"
          onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
            setTextFields((prev: TextFieldsType) => ({
              ...prev,
              gender: e.target.value,
            }))
          }
        >
          <option value="">Select Gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
        <br />
        <label htmlFor="date">Date of birth</label>
        <input
          className="mb-5 w-full p-2 outline-none border-2 border-slate-500 rounded-sm"
          id="date"
          type="date"
          onChange={(e:React.ChangeEvent<HTMLInputElement>) => (setTextFields((prev:TextFieldsType) => ({...prev, dob: e.target.value})))}
        />
        <p className=" text-center font-semibold ">Already Signed in Once</p>
        <div className=" cursor-pointer mt-5 flex items-center justify-center ">
          <p className=" border-blue-500 border-2 rounded-s bg-white text-3xl p-[0.44rem] ">
            <FcGoogle />
          </p>
          <p className="  p-3 bg-blue-500 text-white rounded-e ">
            Sign in with google
          </p>
        </div>
      </main>
    </div>
  );
};

export default Login;
