import React, { ChangeEvent, FormEvent, useState } from "react";
import AdminSidebar from "../../../components/admin/AdminSidebar";

const img1 = "https://m.media-amazon.com/images/I/71cflgAolqL._SY695_.jpg";
const img2 = "https://m.media-amazon.com/images/I/61MnrUAKACL._SL1500_.jpg";

const ProductManagement = () => {
  const [name, setName] = useState<string>();
  const [price, setPrice] = useState<number>();
  const [stock, setStock] = useState<number>();
  const [imgUrl, setImgUrl] = useState<string | undefined>();

  // this
  const [availableProduct, setAvailableProduct] = useState<number>(0);

  const submitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  const changeImageHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const file: File | undefined = e.target.files?.[0];

    const reader = new FileReader();

    if (file) {
      reader.readAsDataURL(file);
      reader.onload = () => {
        if (typeof reader.result === "string") {
          setImgUrl(reader.result);
        }
        //
      };
    }
  };
  return (
    <div className=" flex gap-5 h-[100vh] ">
      <AdminSidebar />
      <main className=" h-[100vh]  w-full p-5   flex justify-center items-center gap-5 bg-slate-100 ">
        <div className=" no-scrollbar rounded-md h-3/4 bg-white shadow-md shadow-slate-600 p-5  overflow-y-scroll ">
          {availableProduct > 0 ? (
            <p className=" mb-10 text-green-500 font-medium text-right ">
              {availableProduct} Available
            </p>
          ) : (
            <p className=" mb-10 text-red-500 font-medium text-right ">
              Not Available
            </p>
          )}
          <div>
            <p className=" font-normal text-slate-600 mb-4 ">
              ID - 23hfsdfslhf34hksf
            </p>
            {imgUrl ? (
              <img className=" w-96 h-96 object-cover " src={imgUrl} alt="" />
            ) : (
              <img className=" w-full h-96 object-cover " src={img2} alt="" />
            )}
          </div>
          <div className="text-center uppercase  mt-10 ">
            <p className=" text-sm font-medium mb-4 ">puma shoes</p>
            <p className=" text-5xl font-bold ">$2000</p>
          </div>
        </div>
        <div className=" h-3/4 bg-white shadow-md shadow-slate-600 p-5 rounded-md ">
          <h2 className=" text-2xl font-medium mb-5 ">New Product</h2>
          <form onSubmit={submitHandler}>
            <label htmlFor="name">Name</label>
            <input
              placeholder="Name"
              className=" mb-5 w-full p-2 outline-none border-2 border-slate-500 rounded-sm "
              type="text"
              id="name"
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setName(e.target.value)
              }
            />
            <br />
            <label htmlFor="price">Price</label>
            <input
              placeholder="Price"
              className=" remove-arrow mb-5 w-full p-2 outline-none border-2 border-slate-500 rounded-sm  "
              type="number"
              id="price"
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setPrice(Number(e.target.value))
              }
            />
            <br />
            <label htmlFor="stock">Stock</label>
            <input
              placeholder="Stock"
              className=" remove-arrow mb-5 w-full p-2 outline-none border-2 border-slate-500 rounded-sm "
              type="number"
              id="stock"
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setStock(Number(e.target.value))
              }
            />
            <br />
            <label htmlFor="photo">Photo</label>
            <input
              className=" mb-5 w-full p-2 outline-none border-2 border-slate-500 rounded-sm "
              type="file"
              onChange={changeImageHandler}
            />
            <br />
            {imgUrl && (
              <div className="flex justify-center items-center ">
                {" "}
                <img
                  className=" w-28 h-28 object-cover rounded-lg "
                  src={imgUrl}
                />
              </div>
            )}
            <br />
            <button
              className=" bg-blue-600 mb-5 w-full p-2 outline-none border-2 border-slate-500 rounded-sm text-white uppercase tracking-widest "
              type="submit"
            >
              Update
            </button>
          </form>
        </div>
      </main>
    </div>
  );
};

export default ProductManagement;
