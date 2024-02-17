import React, { ReactElement } from "react";
import AdminSidebar from "../../components/admin/AdminSidebar";
import TanStackTable from "../../components/admin/TanStackTable";
import { ColumnDef } from "@tanstack/react-table";
import { Link } from "react-router-dom";

type DataType = {
  user: string;
  amount: number;
  discount: number;
  quantity: number;
  status: ReactElement;
  action: ReactElement;
};

const columns: ColumnDef<DataType>[] = [
  {
    header: "User",
    accessorKey: "user",
  },
  {
    header: "Amount",
    accessorKey: "amount",
  },
  {
    header: "Discount",
    accessorKey: "discount",
  },
  {
    header: "Quantity",
    accessorKey: "quantity",
  },
  {
    header: "Status",
    accessorKey: "status",
    cell: (info) => info.getValue()
  },
  {
    header: "Action",
    accessorKey: "action",
    cell: (info) => info.getValue(),
  },
];

const data = [
  {
    user: "john",
    amount: 100,
    discount: 1,
    quantity: 4,
    status: <p className=" text-red-500 font-medium " >Processing</p>,
    action: (
      <Link
        className=" p-2 rounded-md text-blue-900  bg-blue-100"
        to={"/admin/transaction/shfsdh"}
      >
        Manage
      </Link>
    ),
  },
];

const Transaction = () => {
  return (
    <div className=" flex gap-5 h-[100vh] ">
      <AdminSidebar />
      <main className=" w-full p-5 overflow-y-scroll ">
        <h1 className=" text-2xl font-medium ">Transaction</h1>
        <div>{TanStackTable<DataType>(columns, data, true)}</div>
      </main>
    </div>
  );
};

export default Transaction;
