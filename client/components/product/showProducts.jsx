"use client"
import { Button, Card, Container } from 'react-bootstrap';

import productImage from "../../public/product.jpeg"
import Image from 'next/image';
import showProductstyles from "../../styles/product/showProduct.module.css"
import Cookies from 'universal-cookie';
import { useEffect, useState } from 'react';
import { getProductData } from '@/queries/product/product.queries';
import { useSelector, useDispatch } from "react-redux"
import { handleAddToCart } from './productFunction';
import { useRouter } from 'next/navigation';
import { setBuyNowData } from '@/store/features/cartSlice/cartSlice';
import productStyle from '@/styles/product/showProduct.module.css'
export default function ShowProducts() {
    const cookieValue = JSON.parse(localStorage.getItem('ecom'));
    const [productData, setProductData] = useState([]);
    const [productDataMsg, setProductDataMSg] = useState("");

    const dispatch = useDispatch();
    const { userCartData } = useSelector((state) => state.userCartData)

    useEffect(() => {
        getProduts();
    }, [])

    const router = useRouter();

    const getProduts = async () => {
        let result = await getProductData();
        setProductDataMSg(result.data.message)
        if (result.data.success) {
            setProductData(result.data.productData)
        }
    }

    const handleBuyNow = (index) => {
        dispatch(
            setBuyNowData(productData[index])
        )
        router.push("/orders/buy")

    };

    // Convert the JSON string back to an object

    return (
        <div className={showProductstyles.main_div}>
            {console.warn(cookieValue)}
            {productData.map((element, index) =>
                
                    <Card key={index} className={productStyle.product_card}>

                        <Card.Img  src={element?.imageURL} className={productStyle.product_image} />

                        <Card.Body className={productStyle.product_image}>
                            <Card.Title>{element.name}</Card.Title>
                            <Card.Text>
                                {element.description}
                            </Card.Text>
                            <Card.Text variant="primary"> ₹{element.price}</Card.Text>
                            <Container fluid className={productStyle.button_div}>
                                <Button className={productStyle.cart_button}
                                    onClick={() => handleAddToCart(
                                        element._id,//product id
                                        userCartData,
                                        dispatch,

                                    )}>Add To cart</Button>
                                <Button className={productStyle.buy_button}
                                    onClick={() => handleBuyNow(index)}
                                >Buy Now
                                </Button>
                            </Container>
                        </Card.Body>
                    </Card>
                
            )}
        </div>
    )
}