"use client"
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useState, useEffect } from 'react';
import { useRouter } from "next/navigation";
import { UseSelector, useSelector } from "react-redux";
import buyComponentStyles from "../../../styles/cart/buyNow.module.css"
import { placeOrderData } from '@/queries/cart/cart.queries';
import CardGrid from '@/components/cardGrid/cardGrid';
import ProductImage1 from "@/public/product.jpeg"
import ProductImage2 from "@/public/camera.png"
import ProductImage3 from "@/public/login.jpeg"
import {
    getRecommendationData
} from '@/queries/product/product.queries';

export default function BuyComponent() {
    const router = useRouter();
    const [userCookie, setUserCookie] = useState();
    const [cardData, setCardData] = useState([]);
    useEffect(() => {
        let tempCookie = JSON.parse(localStorage.getItem('ecom'));
        setUserCookie(tempCookie);
        if (tempCookie?.userId) {
            getRecommendation(tempCookie.userId)
        }

    }, [])

    async function getRecommendation(userId) {
        try {
            let result = await getRecommendationData(userId);
            if (result?.data?.success) {
                console.warn(result?.data?.recommendations)
                setCardData(result?.data?.recommendations)
            } else {
                console.warn("failed to get recommdation ", result);
            }

        } catch (error) {
            console.warn("something went wrong while getting recommendarion", error);
        }
    }
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
            console.warn("someting wen wrong while buy now from buynow", error)
        }
    }

    return (
        <div>
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
            <div className="w-full h-full">
                <div className="my-4">
                    <span className="text-4xl font-semibold  ">Best Selling Products</span>
                </div>
                <CardGrid cardItems={cardData}></CardGrid>  {/*//TODo: add heart icon for adding product directly to cart and wish list*/}
            </div>
        </div>
    )


}