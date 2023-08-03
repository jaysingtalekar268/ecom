"use client"
import axiosInstance from "@/lib/axios/axios"

export const getLogingData = async (data) => {
    try {
        let result = await axiosInstance.post("/login",data).catch((error) => {
            console.warn("something went wrong while getting user loged from login.queries", error)
        });
        return result
        
           
        

    } catch (error) {
        console.warn("something went wrong while getting user loged from login.queries", error)
        return false;
    }

}

export const getRegisterData = async (data) => {
    try {
        let result = await axiosInstance.post("/register",data).catch((error) => {
            console.warn("something went wrong while getting user register from login.queries", error)
        });
        return result
        
           
        

    } catch (error) {
        console.warn("something went wrong while getting user register from login.queries", error)
        return false;
    }

}