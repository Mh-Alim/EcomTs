import React from 'react'
import AdminSidebar from '../../components/admin/AdminSidebar'

const Dashboard = () => {
  return (
    <div className=' grid grid-cols-3 gap-4 ' >
      <AdminSidebar />
      <main className=' bg-slate-500 ' >
        Dashboard
      </main>
    </div>
  )
}

export default Dashboard