"use client"

import axiosInstance from "@/lib/axios/axios"

export const getCartData = async (data) => {
    try {

        let result = await axiosInstance.get(`/getCart?userId=${data.userId}`, data);
        return result
    } catch (error) {
        console.warn("something went wrong while getting cart data from cart quereis" + error)

    }
}

export const addToCart = async (data) => {
    try {
        let result = await axiosInstance.post("/addToCart", data);
        return result
    } catch (error) {
        console.warn("something went wrong while adding cart data from cart quereis" + error)

    }
}

export const placeOrderData = async (data) => {
    try {
        let result = await axiosInstance.post("/placeOrder", data);
        return result
    } catch (error) {
        console.warn("something went wrong while placing  data from cart quereis" + error)

    }
}
