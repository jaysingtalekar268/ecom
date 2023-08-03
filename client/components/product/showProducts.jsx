"use client"
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
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
                <Card style={{ width: '18rem' }} key={index}>
                    <Card.Img variant="top" src={element?.imageURL} />
                    <Card.Body>
                        <Card.Title>{element.name}</Card.Title>
                        <Card.Text>
                            {element.description}
                        </Card.Text>
                        <Card.Text variant="primary">Price ₹{element.price}</Card.Text>
                        <Button variant="primary" onClick={() => handleAddToCart(
                            element._id,//product id
                            userCartData,
                            dispatch,

                        )}>Add To cart</Button>
                        <Button variant="primary" onClick={() => handleBuyNow(index)}>Buy Now</Button>
                    </Card.Body>
                </Card>
            )}
        </div>
    )
}