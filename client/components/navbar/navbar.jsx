"use client"
import { useState, useEffect } from "react";
import navbarStyle from "../../styles/navbar/navbar.module.css"
import { useRouter } from "next/navigation"
import { FaUserCircle } from 'react-icons/fa';
import { FiUser } from 'react-icons/fi';
import { AiOutlineShoppingCart, AiOutlineHeart } from 'react-icons/ai';
import { TbLogout2 } from "react-icons/tb"
import { BiStar, BiSolidStar } from 'react-icons/bi'
import { RiShoppingBag3Line } from "react-icons/ri"
import { sendProductData } from "@/queries/kafka/kafka.queries";
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
        <div className={" w-full border-solid border-b-2 px-5 pt-0 border-black bg-slate-50 "}>
            <div className={"flex flex-col justify-between w-full   p-4 sm:flex-row "}>
                <div className={"mx-20"}>
                    <span className={"text-3xl cursor-default "} onClick={() => router.replace("/")}> ECOMM</span>

                </div>

                <div className="">
                    <span className={"m-2 mx-3 text-2xl   hover:border-2 p-2 rounded cursor-pointer "} onClick={() => router.replace("/")}> Home</span>
                    {/* <span className={"m-2 mx-3 text-2xl   hover:border-2 p-2 rounded cursor-pointer "} onClick={async () => {
                        const kafkaMessageData = {
                            topic: "test",
                            message: "this finally"
                        }

                        let result = await sendProductData(kafkaMessageData);
                        console.warn(result)
                    }
                    }> produce</span> */}
                <span className={"m-2 mx-3 text-2xl   hover:border-2 p-2 rounded cursor-pointer "} onClick={() => router.replace("/product")}> Product</span>

                </div>
                

                <div className={"flex flex-col sm:flex-row "}>
                    <div className="mx-2">
                        <input className={"mx-5 outline-none bg-zinc-100 p-2 rounded w-full"} placeholder="What are you looking for?"></input>
                    </div>
                    <div className="ms-5 px-2 flex flex-row align-middle text-2xl " >
                        <AiOutlineHeart className={"m-2 cursor-pointer"} onClick={() => alert("Wishlist under development")} />
                        <AiOutlineShoppingCart className={"m-2 cursor-pointer"} onClick={() => router.push("/cart")} />
                        {/* <FaUserCircle className={"m-2 "} onClick={() => router.replace("/login")}/> */}

                        <div className="group inline-block relative ">
                            <FaUserCircle className="inline-flex items-center cursor-pointer" />
                            <ul className="z-50 absolute right-0 top-10 hidden text-gray-700 py-3 px-3 group-hover:block rounded backdrop-blur-3xl text-lg whitespace-nowrap">
                                <li className="cursor-pointer flex flex-row my-1 text-black rounded px-1  hover:bg-gray-400 hover:text-white"><FiUser className="m-1"></FiUser> Manage My Account</li>
                                <li className="cursor-pointer flex flex-row my-1 text-black rounded px-1  hover:bg-gray-400 hover:text-white"><RiShoppingBag3Line className="m-1" />My Order</li>
                                <li className="cursor-pointer flex flex-row my-1 text-black rounded px-1  hover:bg-gray-400 hover:text-white"><BiStar className="m-1"></BiStar>My Reviews</li>
                                <li className="cursor-pointer flex flex-row my-1 text-black rounded px-1  hover:bg-gray-400 hover:text-white"
                                    onClick={() => {
                                        localStorage.clear();
                                        window.location.reload();
                                        router.replace("/login")


                                    }}
                                > <TbLogout2 className="m-1"></TbLogout2>Logout</li>
                            </ul>
                        </div>


                    </div>
                </div>
            </div>
        </div>

    )
}
