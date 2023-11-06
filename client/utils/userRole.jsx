"use client"
import { useRouter } from "next/router";
const getUserRole = () => {
    let tempCookie = JSON.parse(localStorage.getItem('ecom'));
    if (tempCookie && tempCookie.userRole) {
        return tempCookie;
    } else {
    const router = useRouter();
        router.replace('/login');
    }
}

export default getUserRole