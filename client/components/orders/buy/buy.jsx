"use client"
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useState,useEffect } from 'react';
import { useRouter } from "next/navigation";
import { UseSelector, useSelector } from "react-redux";
import  buyComponentStyles  from "../../../styles/cart/buyNow.module.css"
import { placeOrderData } from '@/queries/cart/cart.queries';
export default function BuyComponent() {
    const router = useRouter();
    const [userCookie, setUserCookie] = useState();
    useEffect(() => {
        setUserCookie(JSON.parse(localStorage.getItem('ecom')));

    }, [])

    const userId = userCookie?.userId;
    const { buyNowData } = useSelector((state) => state.buyNowData)

    // Now you can use the `productId` in your component as needed
    // For example, you can log it to the console:
    console.warn(buyNowData)

    const handleOrderPlace = async () => {
        try {
           const data = {
                "userId": userId,
                "product": [buyNowData._id]

            }

            let result = await placeOrderData(data);



            if (result.data.success) {
                alert("Order Placed")
            }
            else {
                alert("Order not  Placed")
            }
        } catch (error) {
            console.warn("someting wen wrong while buy now from buynow",error )
        }
    }

    return (
        <div className={buyComponentStyles}>


            <Card style={{ width: '18rem' }} >
                <Card.Img variant="top" src={buyNowData?.imageURL} />
                <Card.Body>
                    <Card.Title>{buyNowData.name}</Card.Title>
                    <Card.Text>
                        {buyNowData.description}
                    </Card.Text>
                    <Card.Text variant="primary">Price ₹{buyNowData.price}</Card.Text>
                    <Button className={buyComponentStyles.cart_button} variant="primary" onClick={() => router.back()} >Cancel</Button>
                    <Button className={buyComponentStyles.buy_button} variant="primary" onClick={() => handleOrderPlace()}>Buy Now</Button>
                </Card.Body>
            </Card>
           
        </div>
    )
};
