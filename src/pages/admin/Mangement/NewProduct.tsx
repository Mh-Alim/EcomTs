import React, { ChangeEvent, FormEvent, useState } from "react";
import AdminSidebar from "../../../components/admin/AdminSidebar";

const NewProduct = () => {

  const [name, setName] = useState<string>();
  const [price, setPrice] = useState<number>();
  const [stock, setStock] = useState<number>();
  const [imgUrl, setImgUrl] = useState<string | undefined>();
  
  const submitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  const changeImageHandler = (e:ChangeEvent<HTMLInputElement>) => {
    const file: File | undefined = e.target.files?.[0]
    
    const reader = new FileReader();

    if (file) {
      reader.readAsDataURL(file);
      reader.onload = () => {
        if (typeof reader.result === 'string') {
           setImgUrl(reader.result);
         }
        // 
      }
    }
  
  }
  return (
    <div className=" flex gap-5 h-[100vh] ">
      <AdminSidebar />
      <main className=" h-[100vh]  w-full p-5   flex justify-center items-center bg-slate-100 ">
        <div className="  bg-white shadow-md shadow-slate-600 p-5 rounded-md ">
          <h2 className=" text-2xl font-medium mb-5 ">New Product</h2>
          <form onSubmit={submitHandler}>
            <label htmlFor="name">Name</label>
            <input
              placeholder="Name"
              className=" mb-5 w-full p-2 outline-none border-2 border-slate-500 rounded-sm "
              type="text"
              id="name"
              onChange={(e:React.ChangeEvent<HTMLInputElement>) => setName(e.target.value)}
            />
            <br />
            <label htmlFor="price">Price</label>
            <input
              placeholder="Price"
              className=" remove-arrow mb-5 w-full p-2 outline-none border-2 border-slate-500 rounded-sm  "
              type="number"
              id="price"
              onChange={(e:React.ChangeEvent<HTMLInputElement>) => setPrice(Number(e.target.value))}
            />
            <br />
            <label htmlFor="stock">Stock</label>
            <input
              placeholder="Stock"
              className=" remove-arrow mb-5 w-full p-2 outline-none border-2 border-slate-500 rounded-sm "
              type="number"
              id="stock"
              onChange={(e:React.ChangeEvent<HTMLInputElement>) => setStock(Number(e.target.value))}
            />
            <br />
            <label htmlFor="photo">Photo</label>
            <input
              className=" mb-5 w-full p-2 outline-none border-2 border-slate-500 rounded-sm "
              type="file"
              onChange={changeImageHandler}
            />
            <br /> 
            {imgUrl && <div className="flex justify-center items-center " > <img className=" w-28 h-28 object-cover rounded-lg " src={imgUrl} /></div>}
            <br />
            <button
              className=" bg-blue-600 mb-5 w-full p-2 outline-none border-2 border-slate-500 rounded-sm text-white uppercase tracking-widest "
              type="submit"
            >
              Create
            </button>
          </form>
        </div>
      </main>
    </div>
  );
};

export default NewProduct;
