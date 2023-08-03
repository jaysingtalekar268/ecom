"use client"
import {
    useEffect,
    useState,
} from 'react'

import { useRouter} from 'next/navigation';
import {
    handleLogin,
    handleRegister,
} from "@/components/login/loginFuncions"
import { useDispatch, useSelector } from 'react-redux';
export default function Login() {

const dispatch = useDispatch();

    const [userName, setUserName] = useState("");
    const [userPwd, setUserPwd] = useState("");
    const [userRole, setUserRole] = useState("");
    const [loginMessage, setLoginMessage] = useState("");
    const [register, setRegister] = useState(false);
    
    const router=useRouter()

    useEffect(() => {
        localStorage.clear();
    }, [])



    if (!register) {
        return (
            <div>

                <label>Enter Email</label>
                <input value={userName} onChange={(e) => setUserName(e.target.value)}></input>
                <label>Enter Password</label>
                <input value={userPwd} onChange={(e) => setUserPwd(e.target.value)}></input>
                <button onClick={() => handleLogin(
                    userName,
                    userPwd,
                    setLoginMessage,
                    router,
                    dispatch

                )}
                >Login </button>
                {loginMessage}
                <label onClick={() => setRegister(true)}>New To site?..Register Now</label>

            </div>
        )
    }
    else {
        return (
            <div>
                <label>Enter Email</label>
                <input value={userName} onChange={(e) => setUserName(e.target.value)}></input>
                <label>Enter Password</label>
                <input value={userPwd} onChange={(e) => setUserPwd(e.target.value)}></input>
                <label>Enter Role</label>
                <input value={userRole} onChange={(e) => setUserRole(e.target.value)}></input>
                <button onClick={() => handleRegister(
                    userName,
                    userPwd,
                    userRole,
                    setLoginMessage,
                    setRegister
                )}
                >Register </button>
                {loginMessage}
                <label onClick={() => setRegister(true)}>Already registered...Sign in now</label>

            </div>
        )
    }
}
