"use client"
import { useEffect, useState } from 'react';
import { Button, Card, Container } from 'react-bootstrap';
import { useSelector, useDispatch } from "react-redux"
import { getCart } from '../login/loginFuncions';
import { setCartData } from '@/store/features/cartSlice/cartSlice';
import cartStyle from '@/styles/cart/cart.module.css'
import PhoneImage from "@/public/phone.jpeg"
import Image from 'next/image';

export default function CartComponent() {
    const dispatch = useDispatch();
    const [userDetails, setUserDetails] = useState();
    useEffect(() => {
        setUserDetails(JSON.parse(localStorage.getItem('ecom')));

    }, [])

    useEffect(() => {
        if (userDetails != undefined || userDetails?.userId != undefined)
            getdata()
    }, [])

    const getdata = async () => {

        dispatch(
            setCartData(await getCart({ userId: userDetails.userId, }))
        )
    }
    const { userCartData } = useSelector((state) => state.userCartData)
    console.warn(userCartData)
    return (
        <>
            {/* <div className={cartStyle.main_div}>
                {userCartData?.map((element, index) =>
                    <Card className={cartStyle.product_card} key={index} >
                        <Container className={cartStyle.product_image_div} fluid={true}>
                            <Card.Img className={cartStyle.product_image} variant="top" src={element.imageURL} />

                        </Container>
                        <Container className={cartStyle.product_body_div}  >
                            <Card.Body>
                                <Card.Title className={cartStyle.product_text} >{element.name}</Card.Title>
                                <Card.Text className={cartStyle.product_text} >
                                    ₹ {element.price}
                                </Card.Text>
                                <Button className={cartStyle.remove_button} variant="primary">Remove </Button>
                            </Card.Body>
                        </Container>

                    </Card>
                )}
            </div> */}
            <div className='grid grid-cols-4 border-2'>
                <div>
                    <div ><span>Product</span></div>
                    <div ><span>Price</span></div>
                    <div ><span>Quantity</span></div>
                    <div ><span>SubTotal</span></div>
                </div>
                <div>
                    <div >
                        <Image src={PhoneImage}></Image>

                    </div>
                    <div ><span>₹{654}</span></div>
                    <div ><input type='number' value={54} /></div>
                    <div ><span>₹{654}</span></div>
                </div>
            </div>
            {userCartData[0] &&
                <div>
                    <button className={cartStyle.order_button} >Order</button>
                </div>
            }
        </>
    )
}

