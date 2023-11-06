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
    const [userEmail, setUserEmail] = useState("");
    const [loginMessage, setLoginMessage] = useState("");
    const [register, setRegister] = useState(false);

    const router = useRouter()

    useEffect(() => {
        localStorage.clear();
    }, [])



    return (

        <div className={`${loginStyle.main_div} p-2`}>
            <div className='w-2/3'>
                <Image src={login_image}></Image>
            </div>
            <div className={`${loginStyle.left_div} w-1/3 ms-2`}>
                <div className="flex flex-col">
                    {register == true ? <>
                        <label className='my-3  text-4xl'>Create an Account</label>
                        <label className='my-3 '>Enter your details below</label>
                        <input placeholder='Name' value={userName} onChange={(e) => setUserName(e.target.value)} className='my-3 outline outline-none border-b-2 h-8'></input>
                        <input placeholder='Email or Phone Number' value={userEmail} onChange={(e) => setUserEmail(e.target.value)} className='border-b-2 my-3 outline outline-none h-8'></input>
                        <div className='my-3 border-b-2 h-8'>
                            <ToggleInput className="my-3" inputValue={userPwd} setinputValue={setUserPwd} />
                        </div>
                        <button className='my-3 rounded bg-orange-600 p-2 py-3 text-white '
                            onClick={() => handleRegister(
                                userName,
                                userPwd,
                                userRole,
                                setLoginMessage,
                                setRegister
                            )}
                        >Create Account</button>
                        <label className='my-3'>Already have Account? <label className='border-b-2 ms-2 hover:cursor-pointer' onClick={() => setRegister(false)}> Log in</label></label>
                    </>
                        :
                        <>
                            <label className='my-3  text-4xl'>Log in to Exclusive</label>
                            <label className='my-3 '>Enter your details below</label>
                            <input value={userName} onChange={(e) => setUserName(e.target.value)}
                                placeholder='Email or Phone Number' className='border-b-2 my-3 outline outline-none h-8'></input>
                            <div className='my-3 border-b-2 h-8'>
                                <ToggleInput className="my-3" inputValue={userPwd} setinputValue={setUserPwd} />
                            </div>
                            <label className='my-3 '>{loginMessage}</label>
                            <div className=''>
                                <button className='my-3 w-1/2 me-2 rounded bg-orange-600 p-2 py-3 text-white '
                                    onClick={() => handleLogin(
                                        userName,
                                        userPwd,
                                        setLoginMessage,
                                        router,
                                        dispatch

                                    )}
                                >Log in</button>
                                <label className='my-3 w-1/2 ms-2 hover:cursor-pointer  text-orange-700' onClick={() => alert("This feature is under development")}>Forget Password?</label>
                            </div>
                            <label className='my-3'>New to site? <label className='border-b-2 ms-2 hover:cursor-pointer' onClick={() => setRegister(true)}> Register here</label></label>
                        </>}
                </div>

            </div>
        </div>


    )
}
