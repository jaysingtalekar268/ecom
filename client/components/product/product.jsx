"use client"
import React, { useEffect, useState } from 'react'
import productStyle from "../../styles/product/product.module.css"
import Image from 'next/image'
import productImage from "../../public/product.jpeg"
import ShowProducts from './showProducts'
import AddProduct from './addProduct'
import { useRouter } from 'next/navigation'

export default function Product() {

  const router = useRouter();
  const [userCookie,setUserCookie] =useState();
  useEffect(()=>{
    let tempCookie=JSON.parse(localStorage.getItem('ecom'));
    if(tempCookie==undefined && tempCookie?.userRole==undefined &&tempCookie==null )
    {
      router.replace("/login")
    }
    setUserCookie(tempCookie);
   
  },[])
    
    

    const userRole= userCookie?.userRole;


    return (
        <div className={productStyle.main_div}>
          { userRole&& userRole=="user" ?
           ( <ShowProducts></ShowProducts>)
            :
            (<AddProduct></AddProduct>)
          }
        </div>
    )
}
