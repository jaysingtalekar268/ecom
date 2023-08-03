"use client"
import { useState, useEffect } from "react";
import navbarStyle from "../../styles/navbar/navbar.module.css"
import { useRouter } from "next/navigation"
export default function NavbarComponent() {

    const router=useRouter()

    return (
        <div className={navbarStyle.main_div}>
            <ul className={navbarStyle.menu}>
                <li className={navbarStyle.menu_options} onClick={() => router.replace("/")}> Home</li>
                <li className={navbarStyle.menu_options} onClick={() => router.replace("/login")}> Logout</li>
                <li className={navbarStyle.menu_options} onClick={() => router.replace("/cart")}> cart </li>
            </ul>
        </div>
    )
}
