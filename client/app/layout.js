"use client";
import './globals.css'
import ReduxStoreProvider from "../store/provider"
import NavbarComponent from '@/components/navbar/navbar';
import FooterComponent from '@/components/footer/footer';

import { useRouter } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
import UserLayout from '@/components/layout/userLayout';

export default function RootLayout({ children }) {

  const router = useRouter();
  const userCookie = useRef();
  useEffect(() => {
    let tempCookie = JSON.parse(localStorage.getItem('ecom'));
    if (tempCookie == undefined && tempCookie?.userRole == undefined && tempCookie == null) {
      router.replace("/login")
    }
    userCookie.current = tempCookie;

  }, [])


  return (
    <html lang="en">
      <body >
        <ReduxStoreProvider>
          <NavbarComponent></NavbarComponent>


          {/* {userRole!=undefined ?
            <>{
              userRole=="manager" &&
              <h1>Admin menu</h1> 

            }
            </>
            :<></>} */}
          <div className='flex flex-row w-full border-2 border-red-700'>
            <UserLayout> </UserLayout>
            {children}
          </div>
          <FooterComponent />
        </ReduxStoreProvider>
      </body>
    </html>
  )
}
