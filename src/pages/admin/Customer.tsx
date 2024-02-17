import React, { ReactElement } from "react";
import AdminSidebar from "../../components/admin/AdminSidebar";
import TanStackTable from "../../components/admin/TanStackTable";
import { ColumnDef } from "@tanstack/react-table";
import { Link } from "react-router-dom";
import { MdDelete } from "react-icons/md";

const img1 =
  "https://images.unsplash.com/photo-1607990281513-2c110a25bd8c?q=80&w=2134&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
const img2 =
  "https://images.unsplash.com/photo-1607990283143-e81e7a2c9349?q=80&w=2041&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
type DataType = {
  avatar: ReactElement;
  name: string;
  gender: string;
  email: string;
  role: string;
  action: ReactElement;
};

const columns: ColumnDef<DataType>[] = [
  {
    header: "Avatar",
    accessorKey: "avatar",
    cell: (info) => info.getValue(),
  },
  {
    header: "Name",
    accessorKey: "name",
  },
  {
    header: "Gender",
    accessorKey: "gender",
  },
  {
    header: "Email",
    accessorKey: "email",
  },
  {
    header: "Role",
    accessorKey: "role",
  },
  {
    header: "Action",
    accessorKey: "action",
    cell: (info) => info.getValue(),
  },
];

const data: DataType[] = [
  {
    avatar: (
      <div className="flex justify-center items-center">
        <img className=" w-16 h-16 rounded-full object-cover  " src={img1} />
      </div>
    ),
    name: "john",
    gender: "male",
    email: "john@example.com",
    role: "admin",
    action: (
      <div className=" flex justify-center items-center text-2xl text-red-600 ">
        <MdDelete />
      </div>
    ),
  },
  {
    avatar: (
      <div className="flex justify-center items-center">
        <img className="w-16 h-16 rounded-full object-cover  " src={img2} />
      </div>
    ),
    name: "Saffy",
    gender: "Female",
    email: "Saffy@example.com",
    role: "admin",
    action: (
      <div className=" flex justify-center items-center text-2xl text-red-600 ">
        <MdDelete />
      </div>
    ),
  },
];
const Customer = () => {
  return (
    <div className=" flex gap-5 h-[100vh] ">
      <AdminSidebar />
      <main className=" w-full p-5 overflow-y-scroll ">
        <h1 className=" text-2xl font-medium ">Customers</h1>
        <div>{TanStackTable<DataType>(columns, data, true)}</div>
      </main>
    </div>
  );
};

export default Customer;
