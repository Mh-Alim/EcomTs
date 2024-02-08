import React from "react";
import ProductCard from "../components/ProductCard";
import { Link } from "react-router-dom";

const Home = () => {
  const addToCart = () => {};
  return (
    <div className="" >
      <section>
        <img
          className="w-[100%] h-[60vh] object-cover"
          src="https://images.unsplash.com/photo-1537498425277-c283d32ef9db?q=80&w=1178&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
        />
      </section>

      <main className="px-4">
        <div className="flex justify-between p-1 ">
          <h1 className=" tracking-wider text-xl  ">LATEST PRODUCTS</h1>
          <Link to="/search" className=" text-sm text-slate-600 ">MORE</Link>
        </div>
        <div className=" flex flex-wrap ">
        <ProductCard
          product_id="134"
          img="https://m.media-amazon.com/images/I/81fxjeu8fdL._SL1500_.jpg"
          name="iphone 15"
          price={334}
          stock={23}
          handler={addToCart}
        />
        <ProductCard
          product_id="134"
          img="https://m.media-amazon.com/images/I/71eXNIDUGjL._SL1500_.jpg"
          name="Apple 2022 MacBook Air"
          price={10000000}
          stock={23}
          handler={addToCart}
        />
        <ProductCard
          product_id="134"
          img="https://m.media-amazon.com/images/I/61F1tu4eWoL._SL1500_.jpg"
          name="Blaupunkt BTW100 LITE Truly Wireless Bluetooth Earbuds I"
          price={1000}
          stock={23}
          handler={addToCart}
        />
      
          </div>
      </main>
    </div>
  );
};

export default Home;
