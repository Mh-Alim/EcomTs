import React from "react";
import AdminSidebar from "../../../components/admin/AdminSidebar";
import { LineChart } from "../../../components/admin/Charts";


const months = ["jan", "feb", "mar", "apr", "may", "jun", "jul", "aug", "sep", "oct", "nov", "dec"];
const LineCharts = () => {
  return (
    <div className="flex gap-5 h-[100vh] ">
      <AdminSidebar />
      <main className=" w-full p-5 overflow-y-scroll  bg-slate-100  ">
        <h1 className=" text-2xl font-medium  "> Line Charts </h1>
        <section className=" mt-10 ">
          <div className=" mt-10 p-5 w-3/4 flex justify-center items-center flex-col mx-auto ">
            <LineChart
              label="users"
              labels={months}
              data={months.map((m) => Math.floor(Math.random()*1000))}
              bgColor="rgba(54, 162, 235, 0.5)"
              borderColor="rgba(54, 162, 235, 1)"
            />
          </div>
          <h1 className=" text-center uppercase tracking-widest text-2xl mt-5 ">
            Active Users
          </h1>
        </section>
        <section className=" mt-10 ">
          <div className=" mt-10 p-5 w-3/4 flex justify-center items-center flex-col mx-auto ">
            <LineChart
              label="Product"
              labels={months}
              data={months.map((m) => Math.floor(Math.random()*1000))}
              bgColor="rgba(104, 20, 235, 0.5)"
              borderColor="rgba(104, 20, 235, 1)"
            />
          </div>
          <h1 className=" text-center uppercase tracking-widest text-2xl mt-5 ">
            Total Products (SKV)
          </h1>
        </section>
        <section className=" mt-10 ">
          <div className=" mt-10 p-5 w-3/4 flex justify-center items-center flex-col mx-auto ">
            <LineChart
              label="Revenue"
              labels={months}
              data={months.map((m) => Math.floor(Math.random()*1000))}
              bgColor="rgba(104, 200, 10, 0.5)"
              borderColor="rgba(104, 200, 10, 1)"
            />
          </div>
          <h1 className=" text-center uppercase tracking-widest text-2xl mt-5 ">
            Total Revenue
          </h1>
        </section>
        <section className=" mt-10 ">
          <div className=" mt-10 p-5 w-3/4 flex justify-center items-center flex-col mx-auto ">
            <LineChart
              label="Discount"
              labels={months}
              data={months.map((m) => Math.floor(Math.random()*1000))}
              bgColor="rgba(104, 200, 200, 0.5)"
              borderColor="rgba(104, 200, 200, 1)"
            />
          </div>
          <h1 className=" text-center uppercase tracking-widest text-2xl mt-5 ">
            Discount Allotted 
          </h1>
        </section>
      </main>
    </div>
  );
};

export default LineCharts;
