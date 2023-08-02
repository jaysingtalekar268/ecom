"use client"
import React from 'react'
import productStyle from "../../styles/product/product.module.css"
import Image from 'next/image'
import productImage from "../../public/product.jpeg"
import ShowProducts from './showProducts'
import AddProduct from './addProduct'
import { useRouter } from 'next/navigation'

export default function Product() {
  const router = useRouter();
    const userCookie = JSON.parse(localStorage.getItem('ecom'));
    
    if(!userCookie?.userRole &&userCookie==null && userCookie==undefined)
    {
     return  router.replace("/login")
    }

    const userRole= userCookie.userRole;


    return (
        <div className={productStyle.main_div}>
          { userRole=="user" ?
           ( <ShowProducts></ShowProducts>)
            :
            (<AddProduct></AddProduct>)
          }
        </div>
    )
}
