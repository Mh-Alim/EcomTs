import AdminSidebar from "../../components/admin/AdminSidebar";
import { IoIosSearch } from "react-icons/io";
import { FaRegBell } from "react-icons/fa";
import userImg from "../../assets/user.png";
import { BsArrowDownRight } from "react-icons/bs";
import { PiArrowUpRightBold } from "react-icons/pi";
import { BarChart, DoughnutChart } from "../../components/admin/Charts";
import { BiMaleFemale } from "react-icons/bi";
import TanStackTable from "../../components/admin/TanStackTable";
import { ColumnDef } from "@tanstack/react-table";

const labels = ["January", "February", "March", "April", "May", "June", "July"];
const data1 = labels.map((e, idx) => idx + 10);
const data2 = labels.map((e, idx) => idx + 20);

type DataType = {
  id: string;
  quantity: number;
  discount: number;
  amount: number;
  status: string;
};

const columns: ColumnDef<DataType>[] = [
  {
    accessorKey: "id",
    header: "Id",
    enableSorting: false,
  },
  {
    accessorKey: "quantity",
    header: "Quantity",
  },

  {
    accessorKey: "discount",
    header: "Discount",
  },
  {
    accessorKey: "amount",
    header: "Amount",
  },
  {
    accessorKey: "status",
    header: "Status",
    enableSorting: false,
  },
];

const data: DataType[] = [
  {
    id: "Bridie",
    quantity: 33,
    discount: 37,
    amount: 95,
    status: "Luberto",
  },
  {
    id: "Malena",
    quantity: 89,
    discount: 98,
    amount: 5,
    status: "McCart",
  },
  {
    id: "Sean",
    quantity: 83,
    discount: 99,
    amount: 16,
    status: "Beckley",
  },
  {
    id: "Maiga",
    quantity: 35,
    discount: 26,
    amount: 66,
    status: "Reuss",
  },
];

const Dashboard = () => {
  return (
    <div className=" h-[100vh] overflow-y-scroll  no-scrollbar  flex gap-4 ">
      <AdminSidebar />
      <main className=" bg-slate-100 flex-1 p-4 h-[100vh] overflow-y-scroll  ">
        <section>
          <div className=" rounded-md mt-4 shadow-sm shadow-black  text-black  flex items-center justify-between ">
            <div className=" flex items-center p-3  ">
              <IoIosSearch className=" text-3xl mr-3 " />
              <input
                className=" bg-slate-100 w-full p-2 outline-none rounded-sm  "
                type="text"
                placeholder="Search for data, users, docs"
              />
            </div>
            <div className=" flex items-center ">
              <FaRegBell />
              <img className=" mx-5 h-10 rounded-[50%] " src={userImg} alt="" />
            </div>
          </div>
        </section>
        <section className=" mt-6 flex flex-wrap gap-5 ">
          <WidgetCard
            text="Revenue"
            price={3400000}
            percent={40}
            isAmount={true}
            color="#0000cbb0"
          />
          <WidgetCard
            text="User"
            price={400}
            percent={40}
            isAmount={false}
            color="green"
          />
          <WidgetCard
            text="Revenue"
            price={343434}
            percent={40}
            isAmount={true}
            color="grey"
          />
        </section>
        <section className="   flex gap-6   mt-6  min-h-2/3 ">
          <div className=" rounded-md shadow-sm shadow-black   p-8 flex-1 bg-white  ">
            <p className=" mb-5  uppercase tracking-widest text-2xl text-center ">
              Revenue & Transaction
            </p>
            <BarChart
              horizontal={false}
              data1={data1}
              data2={data2}
              labels={labels}
              text="Chart.js Bar chart"
              dataset_text_1="data1"
              dataset_text_2="data2"
            />
          </div>
          <div className="rounded-md w-96  p-2 flex justify-center flex-col items-center bg-white shadow-sm shadow-black ">
            <p className=" mb-5  uppercase tracking-widest text-2xl ">
              Inventory
            </p>
            <Category heading="Laptops" percent={40} color="green" />
            <Category heading="Mobiles" percent={80} color="yellow" />
            <Category heading="Ear buds" percent={10} color="red" />
          </div>
        </section>

        <section className="  mt-5  flex   min-h-2/3  ">
          <div className=" mr-5 rounded-sm bg-white p-4 shadow-md shadow-black min-w-96  ">
            <h1 className=" mb-5 uppercase tracking-widest text-2xl text-center ">
              Gender Ratio
            </h1>
            <div className=" relative flex flex-col justify-between items-center ">
              <DoughnutChart dataset={[12, 30]} />
              <BiMaleFemale className=" absolute top-[46%] left-[46%] text-3xl text-slate-500 " />
            </div>
          </div>

          {/* for Table  */}
          <div className=" bg-white flex-1 p-4 shadow-sm shadow-black rounded-sm  ">
            <h1 className=" mb-5  uppercase tracking-widest text-2xl  ">
              Top Transaction
            </h1>
            {TanStackTable<DataType>(columns,data)}
          </div>
          <div></div>
        </section>
      </main>
    </div>
  );
};

type categoryPropsType = {
  heading: string;
  percent: number;
  color: string;
};

const Category = ({ heading, percent, color }: categoryPropsType) => {
  return (
    <div className=" mb-4 flex items-center ">
      <p className=" mr-2 ">{heading}</p>
      <div className=" mr-2 w-20 bg-slate-300 h-1 rounded-3xl ">
        <div
          style={{ background: color, width: `${percent}%` }}
          className=" bg-yellow-200 w-10 h-1 rounded-3xl "
        ></div>
      </div>
      <p>{percent}%</p>
    </div>
  );
};

type widgetCardType = {
  text: string;
  price: number;
  percent: number;
  isAmount: boolean;
  color: string;
};
const WidgetCard = ({
  text,
  price,
  percent,
  isAmount,
  color,
}: widgetCardType) => {
  return (
    <div className="p-7 shadow-black shadow-md w-72 flex items-center bg-white rounded-lg  ">
      <div>
        <p className=" text-slate-600 ">{text}</p>
        <p className=" my-1 text-3xl font-bold ">
          {isAmount ? <span>${price}</span> : <span>{price}</span>}
        </p>
        <p>
          {percent > 0 ? (
            <div className=" text-green-500 flex items-center ">
              <span className=" mr-1 ">
                <PiArrowUpRightBold />
              </span>
              <span>+{percent}%</span>
            </div>
          ) : (
            <div className=" text-red-500 flex items-center ">
              <span className="mr-1">
                <BsArrowDownRight />
              </span>
              <span>{percent}%</span>
            </div>
          )}
        </p>
      </div>
      <div
        style={{
          background: `conic-gradient(${color} 0deg, ${color} ${
            (Math.abs(percent) / 100) * 360
          }deg, white ${(Math.abs(percent) / 100) * 360}deg)`,
          color,
        }}
        className=" ml-6 flex justify-center items-center  rounded-[50%] w-16 h-16 "
      >
        <p className=" bg-white rounded-[50%] w-14 h-14 flex justify-center items-center ">
          {percent}%
        </p>
      </div>
    </div>
  );
};

export default Dashboard;
