import React from 'react'
import AdminSidebar from '../../../components/admin/AdminSidebar'
import { BarChart } from '../../../components/admin/Charts'



const months = ["jan", "feb", "mar", "apr", "may", "jun", "jul", "aug", "sep", "oct", "nov", "dec"];
const BarCharts = () => {
  return (
    <div className="flex gap-5 h-[100vh] ">
      <AdminSidebar />
      <main className=" w-full p-5 overflow-y-scroll  bg-slate-100  ">
        <h1 className=' text-2xl font-medium  '> Bar Charts </h1>
        <div className=' p-5 w-3/4 flex justify-center items-center flex-col mx-auto ' >
          <BarChart text='' dataset_text_1='data1' dataset_text_2='data2' data1={months.map((e, idx) => idx + 10)} data2={months.map((e, idx) => idx + 5)} labels={months} />
          <h1 className=' uppercase tracking-widest text-2xl mt-5 ' > Top Selling Products and Top Customers </h1>
        </div>
        <div className=' p-5 w-3/4 flex justify-center items-center flex-col mx-auto '>
        <BarChart text='' horizontal={true} dataset_text_1='data1' dataset_text_2='' data1={months.map((e, idx) => idx + 10)} bg1=' purple ' data2={[]} labels={months} />
        </div>
      </main>
    </div>
  )
}

export default BarCharts