"use client"
import { addToCart } from "@/queries/cart/cart.queries"

export const handleAddToCart= async (
    productId,
    userCartData,
    dispatch,)=>{
        let userDetails =JSON.parse(localStorage.getItem("ecom")); 

        try {
            const data={
        
                "productId":productId,
                "userId":userDetails.userId,
            }
        
        let result = await addToCart(data);
        console.warn(result)

        if(result.data.success)
        {
            return result;
        }

        } catch (error) {
            console.warn("something went wrong while adding to cart from product function",error)
        }
        
        
        
    
}