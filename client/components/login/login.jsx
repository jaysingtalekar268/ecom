"use client"
import {
    useEffect,
    useState,
} from 'react'

import { useRouter } from 'next/navigation';
import {
    handleLogin,
    handleRegister,
} from "@/components/login/loginFuncions"
import loginStyle from "../../styles/login/login.module.css"
import Image from "next/image"
import { useDispatch, useSelector } from 'react-redux';
import login_image from "@/public/login.jpeg"
import ToggleInput from './toggleInput';

export default function Login() {

    const dispatch = useDispatch();

    const [userName, setUserName] = useState("");
    const [userPwd, setUserPwd] = useState("");
    const [userRole, setUserRole] = useState("");
    const [loginMessage, setLoginMessage] = useState("");
    const [register, setRegister] = useState(false);

    const router = useRouter()

    useEffect(() => {
        localStorage.clear();
    }, [])



    return (
        <div className='columns-2'>
          
                <Image src={login_image}  ></Image>
                {!register == true ?
                    <div className='border -4'>
                        <div className={"border-4  h-full"}>
                            <div className="" >
                                <label className={"text-2xl"}>Log in to Exclusive</label>
                            </div>
                            <div>
                                <label className={""}>Enter your details below</label>
                            </div>
                            <div>
                                <input className={"outline outline-0"} value={userName} placeholder='Email or Phone Number' onChange={(e) => setUserName(e.target.value)}></input>
                            </div>
                            <div>
                                {/* <input className={""} value={userPwd}  placeholder="Password"onChange={(e) => setUserPwd(e.target.value)}></input> */}
                                <ToggleInput></ToggleInput>
                            </div>
                            <div>
                                <button className={""} onClick={() => handleLogin(
                                    userName,
                                    userPwd,
                                    setLoginMessage,
                                    router,
                                    dispatch
                                )}
                                >Login </button>
                            </div>
                            <div>
                                {loginMessage}
                            </div>
                            <div>
                                <label className={""} onClick={() => setRegister(true)}>New To site?..Register Now</label>
                            </div>
                        </div>
                    </div>
                    :
                    <div className={""}>
                        <div className={""}>

                            <label className={""}>Enter Username</label>
                            <input className={""} value={userName} onChange={(e) => setUserName(e.target.value)}></input>
                            <label className={""}>Enter Password</label>
                            <input className={""} value={userPwd} onChange={(e) => setUserPwd(e.target.value)}></input>
                            <label className={""}>Enter Email</label>
                            <input className={""} value={userRole} onChange={(e) => setUserRole(e.target.value)}></input>
                            <button className={""} onClick={() => handleRegister(
                                userName,
                                userPwd,
                                userRole,
                                setLoginMessage,
                                setRegister
                            )}
                            >Register </button>
                            {loginMessage}
                            <label className={""} onClick={() => setRegister(false)}>Already registered...Sign in now</label>

                        </div>
                    </div>
                }
            </div>



    
    )
}
