"use client"
import axiosInstance from "@/lib/axios/axios"


export const sendProductData = async (message) => {
    try {
        const response = await fetch("/api/kafkaRoute", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            // body: JSON.stringify({ message }),
            body: JSON.stringify(message),
        });

        const data = await response.json();
        console.log(response);
    } catch (error) {
        console.error("Error sending message:", error);
    }
};

