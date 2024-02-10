import React, { useState } from "react";
import ProductCard from "../components/ProductCard";

const Search = () => {
  const addToCart = () => {};
  let isNextExist = false;
  let isPrevExist = false;

  const [sort, setSort] = useState<string>("");
  const [maxPrice, setMaxPrice] = useState<number>(1000000);
  const [category, setCategory] = useState<string>("");

  return (
    <div className=" flex  h-[90vh]  ">
      <aside className=" shadow-black shadow-lg  m-8 p-4  w-80 ">
        <h1 className=" uppercase text-2xl tracking-widest mb-5 ">Filters</h1>
        <div>
          <label htmlFor="sort">Sort</label> <br />
          <select
            className=" mt-2  mb-6 w-full p-2 outline-none border-2 border-slate-500 rounded-sm  "
            name="sort"
            id="sort"
            onChange={(e) => setSort(e.target.value)}
          >
            <option value="">None</option>
            <option value="asc">Price (Low to High) </option>
            <option value="desc">Price (Hight to Low) </option>
          </select>
          <div>
            <label htmlFor="priceRange">Max Price : 1000000</label>
            <input
              onChange={(e) => setMaxPrice(Number(e.target.value))}
              value={maxPrice}
              id="priceRange"
              className=" mb-5 w-full p-2 border-2  "
              type="range"
              min={20}
              max={1000000}
            />
          </div>
          <div>
            <label htmlFor="category"> Category </label> <br />
            <select
              className=" mt-2 mb-5 w-full p-2 outline-none border-2 border-slate-500 rounded-sm  "
              name=""
              id="category"
              onChange={(e) => setCategory(e.target.value)}
            >
              <option value="">All</option>
              <option value="laptop"> Laptop </option>
              <option value="mobile"> Mobile </option>
              <option value="camera"> Camera </option>
            </select>
          </div>
        </div>
      </aside>
      <div className="  my-8 p-2  flex-1  flex flex-col justify-between ">
        <main className=" no-scrollbar  overflow-y-scroll      ">
          <div>
            <h1 className=" mb-5 text-2xl  ">Products</h1>
            <input
              placeholder="Search by Name"
              className="  mb-5 w-[50%] p-2 outline-none border-2 border-slate-100 rounded-sm  "
              type="text"
            />
          </div>
          <div className=" flex flex-wrap ">
            <ProductCard
              product_id="134"
              img="https://m.media-amazon.com/images/I/71eXNIDUGjL._SL1500_.jpg"
              name="Apple 2022 MacBook Air"
              price={10000000}
              stock={23}
              handler={addToCart}
            />
          </div>

        </main>
        <div className=" flex justify-center ">
            <button
              disabled={!isPrevExist}
              className=" cursor-pointer bg-sky-700 px-4 py-1 rounded-lg text-white mr-4 disabled:bg-slate-400 "
            >
              Prev
            </button>
            <p>
              {1} of {4}
            </p>
            <button
              disabled={!isNextExist}
              className=" cursor-pointer bg-sky-700 px-4 py-1 rounded-lg text-white ml-4 disabled:bg-slate-400   "
            >
              Next
            </button>
          </div>
      </div>
    </div>
  );
};

export default Search;
