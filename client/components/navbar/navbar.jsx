"use client"
import { useState, useEffect } from "react";
import navbarStyle from "../../styles/navbar/navbar.module.css"
import { useRouter } from "next/navigation"
import { FaUserCircle} from 'react-icons/fa';
import { AiOutlineShoppingCart} from 'react-icons/ai';


export default function NavbarComponent() {

    const router = useRouter()

    return (
        <div className={navbarStyle.navbar}>
            <div className={navbarStyle.main_div}>
                <ul className={navbarStyle.menu}>
                    <li className={navbarStyle.logo} onClick={() => router.replace("/")}> ECOMM</li>
                    <li className={navbarStyle.menu_options} onClick={() => router.replace("/")}> Home</li>



                </ul>

            </div>
            <div className={navbarStyle.user_div}>
                <AiOutlineShoppingCart className={navbarStyle.user} onClick={() => router.replace("/cart")} ></AiOutlineShoppingCart>
                <FaUserCircle className={navbarStyle.user} onClick={() => router.replace("/login")}>
                </FaUserCircle>
            </div>
        </div>


    )
}
