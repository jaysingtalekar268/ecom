"use client"
import React from 'react'
import FooterComponent from '../footer/footer'
import { useRouter } from 'next/navigation';
import { useState, useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import AdminSideMenu from '../sideMenu/adminSideMenu';


const UserLayout = ({ children }) => {


  const router = useRouter();
  const [userCookie, setUserCookie] = useState();
  useEffect(() => {
    let tempCookie = JSON.parse(localStorage.getItem('ecom'));
    if (tempCookie == undefined && tempCookie?.userRole == undefined && tempCookie == null) {
      router.replace("/login")
    }
    setUserCookie(tempCookie?.userRole);

  }, [])

  const userData = useSelector(state => state.loginData.userLoginData)
  console.warn(userCookie)
  return (
    <>

      {userCookie == "manager" &&
        <AdminSideMenu></AdminSideMenu>

      }


      {children}</>
  )
}

export default UserLayout