import React from "react";
import { Link, useLocation } from "react-router-dom";
import { MdDashboard } from "react-icons/md";
import { FaPeopleGroup } from "react-icons/fa6";
import { FaBagShopping } from "react-icons/fa6";
import { GrTransaction } from "react-icons/gr";
import { FaRegChartBar } from "react-icons/fa";
import { FaChartPie } from "react-icons/fa";
import { FaChartLine } from "react-icons/fa";
import { ImStopwatch } from "react-icons/im";
import { RiCoupon2Line } from "react-icons/ri";
import { BsCoin } from "react-icons/bs";

const dashboardLiData = [
  {
    text: "Dashboard",
    url: "/admin/dashboard",
    Icon: <MdDashboard />,
  },
  {
    text: "Product",
    url: "/admin/product",
    Icon: <FaBagShopping />,
  },
  {
    text: "Customer",
    url: "/admin/customer",
    Icon: <FaPeopleGroup />,
  },
  {
    text: "Transaction",
    url: "/admin/transaction",
    Icon: <GrTransaction />,
  },
];
const chartsLiData = [
  {
    text: "Bar",
    url: "/admin/chart/bar",
    Icon: <FaRegChartBar />,
  },
  {
    text: "Pie",
    url: "/admin/pie",
    Icon: <FaChartPie />,
  },
  {
    text: "Line",
    url: "/admin/line",
    Icon: <FaChartLine />,
  },
];

const appsLiData = [
  {
    text: "Stopwatch",
    url: "/admin/app/stopwatch",
    Icon: <ImStopwatch />,
  },
  {
    text: "Coupon",
    url: "/admin/app/coupon",
    Icon: <RiCoupon2Line />,
  },
  {
    text: "Toss",
    url: "/admin/app/toss",
    Icon: <BsCoin />,
  },
];
const AdminSidebar = () => {
  const location = useLocation();
  return (
    <div className=" w-80 p-5 h-[90vh] ">
      <h1 className=" mb-5 font-medium text-2xl  ">Logo</h1>
      <div className=" p-2 mb-6 ">
        <h2 className=" uppercase tracking-widest mb-5 ">Dashboard</h2>
        <ul className=" list-none ">
          {dashboardLiData.map((item) => (
            <Li
              key={item.url}
              text={item.text}
              url={item.url}
              Icon={item.Icon}
            />
          ))}
        </ul>
      </div>
      <div className=" p-2 mb-6 ">
        <h2 className=" uppercase tracking-widest mb-5 ">Charts</h2>
        <ul className=" list-none ">
          {chartsLiData.map((item) => (
            <Li
              key={item.url}
              text={item.text}
              url={item.url}
              Icon={item.Icon}
            />
          ))}
        </ul>
      </div>
      <div className=" p-2 mb-6 ">
        <h2 className=" uppercase tracking-widest mb-5 ">Apps</h2>
        <ul className=" list-none ">
          {appsLiData.map((item) => (
            <Li
              key={item.url}
              text={item.text}
              url={item.url}
              Icon={item.Icon}
            />
          ))}
        </ul>
      </div>
    </div>
  );
};

type LiPropType = {
  text: string;
  Icon: React.ReactNode;
  url: string;
};

const Li = ({ text, Icon, url }: LiPropType) => {
  const location = useLocation();
  return (
    <li
      className={` ${
        location.pathname.includes(url)
          ? `bg-blue-600 text-white`
          : `bg-white text-black`
      }  mb-3 group transition-all rounded-lg  p-3`}
    >
      <Link className=" flex items-center " to={url}>
        {Icon}
        <p className="ml-2">{text}</p>
      </Link>
    </li>
  );
};

export default AdminSidebar;
