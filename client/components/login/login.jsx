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

import { useDispatch, useSelector } from 'react-redux';
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



    if (!register) {
        return (

            <div className={loginStyle.main_div}>

                <div className={loginStyle.sub_div}>
                    <label className={loginStyle.label}>Enter Email</label>
                    <input className={loginStyle.input} value={userName} onChange={(e) => setUserName(e.target.value)}></input>
                    <label className={loginStyle.label}>Enter Password</label>
                    <input className={loginStyle.input} value={userPwd} onChange={(e) => setUserPwd(e.target.value)}></input>
                    <button className={loginStyle.btn} onClick={() => handleLogin(
                        userName,
                        userPwd,
                        setLoginMessage,
                        router,
                        dispatch

                    )}
                    >Login </button>
                    {loginMessage}
                    <label className={loginStyle.link} onClick={() => setRegister(true)}>New To site?..Register Now</label>
                </div>
            </div>
        )
    }
    else {
        return (
            <div className={loginStyle.main_div}>
                <div className={loginStyle.sub_div}>

                    <label className={loginStyle.label}>Enter Username</label>
                    <input className={loginStyle.input} value={userName} onChange={(e) => setUserName(e.target.value)}></input>
                    <label className={loginStyle.label}>Enter Password</label>
                    <input className={loginStyle.input} value={userPwd} onChange={(e) => setUserPwd(e.target.value)}></input>
                    <label className={loginStyle.label}>Enter Email</label>
                    <input className={loginStyle.input} value={userRole} onChange={(e) => setUserRole(e.target.value)}></input>
                    <button className={loginStyle.btn} onClick={() => handleRegister(
                        userName,
                        userPwd,
                        userRole,
                        setLoginMessage,
                        setRegister
                    )}
                    >Register </button>
                    {loginMessage}
                    <label className={loginStyle.link} onClick={() => setRegister(false)}>Already registered...Sign in now</label>

                </div>
            </div>
        )
    }
}
