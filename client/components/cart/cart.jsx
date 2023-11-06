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
        <div className=''>
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
            <div className='m-1 px-8 py-6 text-base grid  rounded shadow-sm '>
                <div className='grid grid-cols-4  my-3 py-5 px-8 shadow rounded'>
                    <div ><span className=''>Product</span></div>
                    <div ><span className=''>Price</span></div>
                    <div ><span className=''>Quantity</span></div>
                    <div ><span className=''>SubTotal</span></div>
                </div>
                <div className='grid grid-cols-4  my-3 py-3 px-8 shadow rounded'>
                    <div className='flex flex-row '>
                        <Image src={PhoneImage} className='w-20 rounded'></Image>
                        <span className='mx-3  '>lorem lorme  lorem lorme </span>
                    </div>
                    <div ><span>₹ {654}</span></div>
                    <div className=''><input className='border-2 w-20 p-2 rounded' type='number' value={54} /></div>
                    <div ><span>₹ {654}</span></div>
                </div>
                <div className='grid grid-cols-4  my-3 py-3 px-8 shadow rounded'>
                    <div className='flex flex-row '>
                        <Image src={PhoneImage} className='w-20'></Image>
                        <span className='mx-3  '>lorem lorme  lorem lorme </span>
                    </div>
                    <div ><span>₹ {654}</span></div>
                    <div className=''><input className='border-2 w-20 p-2 rounded' type='number' value={54} /></div>
                    <div ><span>₹ {654}</span></div>
                </div>
                <div className='grid grid-cols-4  my-3 py-3 px-8 shadow rounded'>
                    <div className='flex flex-row '>
                        <Image src={PhoneImage} className='w-20'></Image>
                        <span className='mx-3  '>lorem lorme  lorem lorme </span>
                    </div>
                    <div ><span>₹ {654}</span></div>
                    <div className=''><input className='border-2 w-20 p-2 rounded' type='number' value={54} /></div>
                    <div ><span>₹ {654}</span></div>
                </div>
                <div className='grid grid-cols-4  my-3 py-3 px-8 shadow rounded'>
                    <div className='flex flex-row '>
                        <Image src={PhoneImage} className='w-20'></Image>
                        <span className='mx-3  '>lorem lorme  lorem lorme </span>
                    </div>
                    <div ><span>₹ {654}</span></div>
                    <div className=''><input className='border-2 w-20 p-2 rounded' type='number' value={54} /></div>
                    <div ><span>₹ {654}</span></div>
                </div>
                <div className='grid grid-cols-4  my-3 py-3 px-8 shadow rounded'>
                    <div className='flex flex-row '>
                        <Image src={PhoneImage} className='w-20'></Image>
                        <span className='mx-3  '>lorem lorme  lorem lorme </span>
                    </div>
                    <div ><span>₹ {654}</span></div>
                    <div className=''><input className='border-2 w-20 p-2 rounded' type='number' value={54} /></div>
                    <div ><span>₹ {654}</span></div>
                </div>
                <div className='grid grid-cols-4  my-3 py-3 px-8 shadow rounded'>
                    <div className='flex flex-row '>
                        <Image src={PhoneImage} className='w-20'></Image>
                        <span className='mx-3  '>lorem lorme  lorem lorme </span>
                    </div>
                    <div ><span>₹ {654}</span></div>
                    <div className=''><input className='border-2 w-20 p-2 rounded' type='number' value={54} /></div>
                    <div ><span>₹ {654}</span></div>
                </div>
                <div className='grid grid-cols-4  my-3 py-3 px-8 shadow rounded'>
                    <div className='flex flex-row '>
                        <Image src={PhoneImage} className='w-20'></Image>
                        <span className='mx-3  '>lorem lorme  lorem lorme </span>
                    </div>
                    <div ><span>₹ {654}</span></div>
                    <div className=''><input className='border-2 w-20 p-2 rounded' type='number' value={54} /></div>
                    <div ><span>₹ {654}</span></div>
                </div>
                <div className='grid grid-cols-4  my-3 py-3 px-8 shadow rounded'>
                    <div className='flex flex-row '>
                        <Image src={PhoneImage} className='w-20'></Image>
                        <span className='mx-3  '>lorem lorme  lorem lorme </span>
                    </div>
                    <div ><span>₹ {654}</span></div>
                    <div className=''><input className='border-2 w-20 p-2 rounded' type='number' value={54} /></div>
                    <div ><span>₹ {654}</span></div>
                </div>
            </div>
            <div className='flex flex-row justify-between p-4'>
                <div className='flex flex-row ms-8 w-full'>
                    <div className='mx-2'><input type="text" className='p-3 rounded border-2 border-black' placeholder='Coupon Code' /></div>
                    <div className='mx-2'><button className='rounded  px-8 py-3 bg-red-500 text-white'>Apply Coupon</button></div>
                </div>
                <div className='border-2 border-black rounded p-4 w-1/2 '>
                    <div>
                        <span className='text-xl font-medium'>Cart Total</span>
                    </div>
                    <div className='border-b-2 py-3 flex flex-row justify-between'>
                        <span className=''>Subtotal</span>
                        <span className=''>₹ {654}</span>

                    </div>
                    <div className='border-b-2 py-3 flex flex-row justify-between'>
                        <span className=''>Shipping</span>
                        <span className=''>₹ {655646544.6565654}</span>

                    </div>
                    <div className='py-3 flex flex-row justify-between'>
                        <span className=''>Total</span>
                        <span className=''>₹ {654}</span>

                    </div>

                    <div className='  my-3'><button className='rounded  w-1/2 px-8 py-3 bg-red-500 text-white'>Proceed To Checkout</button></div>
                </div>
            </div>

            {userCartData[0] &&
                <div>
                    <button className={cartStyle.order_button} >Order</button>
                </div>
            }
        </div>
    )
}

