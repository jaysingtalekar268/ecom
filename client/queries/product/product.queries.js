import axiosInstance from "@/lib/axios/axios"


export const addProductData =async (formData) => {
    try {
        let response = await axiosInstance.post("/addProduct",formData)

        return response;

    } catch (error) {
            console.warn("something went wrong while adding produt from product.queries")
    }
}


export const getProductData =async () => {
    try {
        let response = await axiosInstance.get("/getProduct")

        return response;

    } catch (error) {
            console.warn("something went wrong while getting produt from product.queries")
    }
}


