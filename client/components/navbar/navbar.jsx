"use client"
import { useState, useEffect } from "react";
import navbarStyle from "../../styles/navbar/navbar.module.css"
import { useRouter } from "next/navigation"
import { FaUserCircle } from 'react-icons/fa';
import { AiOutlineShoppingCart, AiOutlineHeart } from 'react-icons/ai';


export default function NavbarComponent() {

    const router = useRouter()

    return (
        // <div className={navbarStyle.navbar}>
        //     <div className={navbarStyle.main_div}>
        //         <ul className={navbarStyle.menu}>
        //             <li className={navbarStyle.logo} onClick={() => router.replace("/")}> ECOMM</li>
        //             <li className={navbarStyle.menu_options} onClick={() => router.replace("/")}> Home</li>



        //         </ul>

        //     </div>
        //     <div className={navbarStyle.user_div}>
        //         <input className="h-8 mt-5 px-2 w-22" placeholder="What are you looking for?"></input>
        //         <AiOutlineHeart  className={navbarStyle.user}/>
        //         <AiOutlineShoppingCart className={navbarStyle.user} onClick={() => router.replace("/cart")} ></AiOutlineShoppingCart>
        //         <FaUserCircle className={navbarStyle.user} onClick={() => router.replace("/login")}>
        //         </FaUserCircle>
        //     </div>
        // </div>
        <div className={" w-full border-solid border-b-2 px-5 pt-3 border-black  "}>
            <div className={"flex flex-col justify-between w-full   p-4 sm:flex-row "}>
                <div className={"mx-20"}>
                    <span className={"text-3xl"} onClick={() => router.replace("/")}> ECOMM</span>

                </div>
                <div className="">
                    <span className={"m-2 mx-3 text-2xl"} onClick={() => router.replace("/")}> Home</span>



                </div>


                <div className={"flex flex-col sm:flex-row "}>
                    <div className="mx-2">
                        <input className={"mx-5 outline-none bg-zinc-100 p-2 rounded w-full"} placeholder="What are you looking for?"></input>
                    </div>
                    <div className="ms-2 px-2 flex flex-row align-middle text-2xl">
                        <AiOutlineHeart className={"m-2"}  />
                        <AiOutlineShoppingCart className={"m-2"}  onClick={() => router.replace("/cart")} ></AiOutlineShoppingCart>
                        <FaUserCircle className={"m-2 "} onClick={() => router.replace("/login")}>
                        </FaUserCircle>
                    </div>

                </div>
            </div>
        </div>

    )
}
