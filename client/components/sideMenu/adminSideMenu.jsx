import React from 'react'
import adminSideMenuStyle from "@/styles/adminSideMenu/adminSideMenu.module.css"
import { RxDashboard } from "react-icons/rx"
import { LiaShoppingBagSolid } from "react-icons/lia"
import { PiShoppingCartSimpleLight } from "react-icons/Pi"
import { FiUsers } from "react-icons/fi"
import { LuStore } from "react-icons/lu"
import { BsGraphUp } from "react-icons/bs"
import { useRouter } from 'next/navigation'

const AdminSideMenu = () => {
const router = useRouter();
  return (
    <div className={adminSideMenuStyle.main_div}>
      <ul className='p-0 ps-3'>
        <li className=' flex flex-row my-2 text-bold hover:bg-blue-600 hover:text-white p-1 rounded-2 text-xl'>
          <RxDashboard className='mt-1 mx-1' />
          <span className='mx-1'>Dashboard</span>
        </li>
        <li className=' flex flex-row my-2 text-bold hover:bg-blue-600 hover:text-white p-1 rounded-2 text-xl cursor-pointer'
          onClick={()=>router.push("/product")}
        >
          <LiaShoppingBagSolid className='mt-1 mx-1' />
          <span className='mx-1'>Product</span>
        </li>
        <li className=' flex flex-row my-2 text-bold hover:bg-blue-600 hover:text-white p-1 rounded-2 text-xl cursor-pointer'
        onClick={()=>router.push("/orders")}>
          <PiShoppingCartSimpleLight className='mt-1 mx-1'
                />
          <span className='mx-1'>Orders</span>
        </li>
        <li className=' flex flex-row my-2 text-bold hover:bg-blue-600 hover:text-white p-1 rounded-2 text-xl'>
          <FiUsers className='mt-1 mx-1' />
          <span className='mx-1'>Customers</span>
        </li>
        <li className=' flex flex-row my-2 text-bold hover:bg-blue-600 hover:text-white p-1 rounded-2 text-xl'>
          <LuStore className='mt-1 mx-1' />
          <span className='mx-1'>Sellers</span>
        </li>
        <li className=' flex flex-row my-2 text-bold hover:bg-blue-600 hover:text-white p-1 rounded-2 text-xl'>
          <BsGraphUp className='mt-1 mx-1' />
          <span className='mx-1'>Analyatics</span>
        </li>
      </ul>
    </div>
  )
}

export default AdminSideMenu