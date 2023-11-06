"use client"
import React, { useEffect, useState } from 'react'
import productStyle from "../../styles/product/product.module.css"
import Image from 'next/image'
import productImage from "../../public/product.jpeg"
import ShowProducts from './showProducts'
import { useRouter } from 'next/navigation'
import AdminProduct from './AdminProduct'
export default function Product() {

  const router = useRouter();
  const [userCookie, setUserCookie] = useState();
  useEffect(() => {
    let tempCookie = JSON.parse(localStorage.getItem('ecom'));
    if (tempCookie == undefined && tempCookie?.userRole == undefined && tempCookie == null) {
      router.replace("/login")
    }
    setUserCookie(tempCookie);

  }, [])



  const userRole = userCookie?.userRole;

  if (userRole == "manager") {
    return (<AdminProduct></AdminProduct>)
  }
  else if (userRole == "user") {
    return (
      <div className={productStyle.main_div}>
        <ShowProducts></ShowProducts>
        {/* {userRole ?
        <>
          {userRole && userRole == "user" ?
            (<ShowProducts></ShowProducts>)
            :
            (<AddProduct></AddProduct>)
          }
        </>
        : <h1>Page is loading</h1>} */}
      </div>
    )
  }
}
