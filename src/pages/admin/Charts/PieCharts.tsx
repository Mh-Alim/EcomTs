import AdminSidebar from "../../../components/admin/AdminSidebar";
import { DoughnutChart, PieChart } from "../../../components/admin/Charts";

const label = ["Processing", "Shipped", "Delivered"];
const dataSet = [12, 19, 3];
const bgColor = [
  "rgba(255, 99, 132, 0.2)",
  "rgba(54, 162, 235, 0.2)",
  "rgba(255, 206, 86, 0.2)",
  "rgba(75, 192, 192, 0.2)",
  "rgba(153, 102, 255, 0.2)",
  "rgba(255, 159, 64, 0.2)",
];
const borderColor = [
  "rgba(255, 99, 132, 1)",
  "rgba(54, 162, 235, 1)",
  "rgba(255, 206, 86, 1)",
  "rgba(75, 192, 192, 1)",
  "rgba(153, 102, 255, 1)",
  "rgba(255, 159, 64, 1)",
];

const Category = [
  {
    heading: "laptop",
    value: 29,
  },
  {
    heading: "Camera",
    value: 10,
  },
  {
    heading: "ear buds",
    value: 299,
  },
  {
    heading: "shoes",
    value: 200,
  },
];

const PieCharts = () => {
  return (
    <div className="flex gap-5 h-[100vh] ">
      <AdminSidebar />
      <main className=" w-full p-5 overflow-y-scroll  bg-slate-100  ">
        <h1 className=" text-2xl font-medium  ">
          Pie Charts & Doughnut Charts{" "}
        </h1>
        <div >
          <div className=" mt-10 p-5 w-1/4 flex justify-center items-center flex-col mx-auto ">
            <PieChart
              dataSet={dataSet}
              labels={label}
              bgColor={[
                "rgba(255, 99, 132, 0.2)",
                "rgba(54, 162, 235, 0.2)",
                "rgba(255, 206, 86, 0.2)",
              ]}
              borderColor={[
                "rgba(255, 99, 132, 1)",
                "rgba(54, 162, 235, 1)",
                "rgba(255, 206, 86, 1)",
              ]}
            />
          </div>
          <h1 className=" text-center uppercase tracking-widest text-2xl mt-5 ">
            Order fullfillement ratio
          </h1>
        </div>
        <div  className=" mt-16 " >
          <div className=" mt-10 p-5 w-1/4 flex justify-center items-center flex-col mx-auto ">
            <DoughnutChart
              labels={Category.map((e) => e.heading)}
              dataset={Category.map((e) => e.value)}
              bgColor={Category.map((e, i) => `hsl(${e.value * 5},70%,70%)`)}
              legend={false}
            />
          </div>
          <h1 className=" text-center uppercase tracking-widest text-2xl mt-5 ">
            Product Category Ratio
          </h1>
        </div>
        <div  className=" mt-16 " >
          <div className=" mt-10 p-5 w-1/4 flex justify-center items-center flex-col mx-auto ">
            <DoughnutChart
              labels={["In Stock", "Out of Stock"]}
              dataset={[10, 20]}
              bgColor={["rgba(255, 99, 132, 0.5)", "rgba(54, 162, 235, 0.5)"]}
              legend={false}
              cutout={120}
            />
          </div>
          <h1 className=" text-center uppercase tracking-widest text-2xl mt-5 ">
            Stock Availability
          </h1>
        </div>
        <div  className=" mt-16 " >
          <div className=" mt-10 p-5 w-1/4 flex justify-center items-center flex-col mx-auto ">
            <DoughnutChart
              labels={[
                "Marketing Cost",
                "Discount",
                "Burnt",
                "Production Cost",
                "Net Margin",
              ]}
              dataset={[10, 20, 34, 34, 23]}
              bgColor={[
                "rgba(255, 99, 132, 0.5)",
                "rgba(54, 162, 235, 0.5)",
                "rgba(255, 206, 86, 0.5)",
                "rgba(75, 192, 192, 0.5)",
                "rgba(153, 102, 255, 0.8)",
              ]}
              legend={false}
              cutout={100}
            />
          </div>
          <h1 className=" text-center uppercase tracking-widest text-2xl mt-5 ">
            Revenu Distribution
          </h1>
        </div>

        <div  className=" mt-16 " >
          <div className=" mt-10 p-5 w-1/4 flex justify-center items-center flex-col mx-auto ">
            <PieChart
              dataSet={[20, 400, 40]}
              labels={[
                "Teenager (Below 20)",
                "Adult (20 - 40)",
                "Older (Above 60)",
              ]}
              bgColor={[
                "rgba(255, 99, 132, 0.2)",
                "rgba(54, 162, 235, 0.2)",
                "rgba(255, 206, 86, 0.2)",
              ]}
              borderColor={[
                "rgba(255, 99, 132, 1)",
                "rgba(54, 162, 235, 1)",
                "rgba(255, 206, 86, 1)",
              ]}
            />
          </div>
          <h1 className=" text-center uppercase tracking-widest text-2xl mt-5 ">
            Users Age Group
          </h1>
        </div>
        <div  className=" mt-16 " >
          <div className=" mt-10 p-5 w-1/4 flex justify-center items-center flex-col mx-auto ">
            <DoughnutChart
              labels={["Admin", "Customer"]}
              dataset={[10, 400]}
              bgColor={["rgba(255, 99, 132, 0.5)", "rgba(54, 162, 235, 0.5)"]}
              legend={true}
            />
          </div>
        </div>
      </main>
    </div>
  );
};

export default PieCharts;
