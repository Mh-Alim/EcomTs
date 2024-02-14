import React, { ReactElement } from 'react'
import AdminSidebar from '../../components/admin/AdminSidebar'
import TanStackTable from '../../components/admin/TanStackTable'
import { Link } from 'react-router-dom'
import {ColumnDef} from "@tanstack/react-table"


const img1 = 'https://m.media-amazon.com/images/I/71cflgAolqL._SY695_.jpg'
const img2 = "https://m.media-amazon.com/images/I/61MnrUAKACL._SL1500_.jpg"
type DataType = {
  photo: ReactElement,
  name: string,
  price: number,
  stock: number,
  action: ReactElement
}

const columns: ColumnDef<DataType>[] = [
  {
    header: "Photo",
    accessorKey: 'photo',
    enableSorting: false,
  },
  {
    header: "Name",
    accessorKey: "name",
    enableSorting: false,
  },
  {
    header: "Price",
    accessorKey: "price"
  },
  {
    header: "Stock",
    accessorKey: "stock"
  },
  {
    header: "Action",
    accessorKey: "action",
    enableSorting: false,
  }
]

const data: DataType[] = [
  {
    photo: <p> <img  src={img1} alt='watch' /> </p>,
    name: "shoes",
    price: 3434,
    stock: 34,
    action: <Link to={"admin/product/shfsdhfs"}>Manage</Link>
  },
  {
    photo: <img  src={img2} alt='watch' />,
    name: "watch",
    price: 233,
    stock: 34,
    action: <Link to={"admin/product/shfsdh"}>Manage</Link>
  }
]
const Product = () => {
  return (
    <div className='flex gap-5 ' >
      <AdminSidebar />
      <main className=' w-full p-5 ' >
        {TanStackTable(columns,data)}
      </main>
    </div>
  )
}

export default Product