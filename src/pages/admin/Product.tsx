import React, { ReactElement } from "react";
import AdminSidebar from "../../components/admin/AdminSidebar";
import TanStackTable from "../../components/admin/TanStackTable";
import { Link } from "react-router-dom";
import { ColumnDef, createColumnHelper } from "@tanstack/react-table";
import { IoMdAdd } from "react-icons/io";

const img1 = "https://m.media-amazon.com/images/I/71cflgAolqL._SY695_.jpg";
const img2 = "https://m.media-amazon.com/images/I/61MnrUAKACL._SL1500_.jpg";
type DataType = {
  photo: ReactElement;
  name: string;
  price: number;
  stock: number;
  action: ReactElement;
};

const columns: ColumnDef<DataType>[] = [
  {
    header: "Photo",
    accessorKey: "photo",
    enableSorting: false,
    cell: ({ getValue }) => getValue(),
  },
  {
    header: "Name",
    accessorKey: "name",
    enableSorting: false,
  },
  {
    header: "Price",
    accessorKey: "price",
  },
  {
    header: "Stock",
    accessorKey: "stock",
  },
  {
    header: "Action",
    accessorKey: "action",
    cell: ({ getValue }) => getValue(),
    enableSorting: false,
  },
];

const data: DataType[] = [
  {
    photo: (
      <div className="flex justify-center items-center">
        <img className=" w-16  " src={img1} />
      </div>
    ),
    name: "shoes fhsdhf khsdf s shdf ksdfsdhfsd f ksdhf sdfsdkf shdf sdfs dhfs ",
    price: 3434,
    stock: 34,
    action: (
      <Link
        className=" p-2 rounded-md text-blue-900  bg-blue-100"
        to={"/admin/product/shfsdhfs"}
      >
        Manage
      </Link>
    ),
  },
  {
    photo: (
      <div className="flex justify-center items-center">
        <img className=" w-16  " src={img2} />
      </div>
    ),
    name: "watch",
    price: 233,
    stock: 34,
    action: (
      <Link
        className=" p-2 rounded-md text-blue-900  bg-blue-100"
        to={"/admin/product/shfsdh"}
      >
        Manage
      </Link>
    ),
  },

];

const Product = () => {
  return (
    <div className="flex gap-5 h-[100vh] ">
      <AdminSidebar />
      <main className=" w-full p-5 overflow-y-scroll  bg-slate-50  ">
        <div className=" flex justify-between mb-10 items-center ">
          <h1 className=" text-2xl font-medium ">Products</h1>
          <Link to={"/admin/product/new"} className=" cursor-pointer bg-red-700 p-2 rounded-[50%] ">
            <IoMdAdd className="text-3xl font-extrabold text-white " />
          </Link>
        </div>
        <div>{TanStackTable<DataType>(columns, data, true)}</div>
      </main>
    </div>
  );
};

export default Product;
