"use client"
import { useEffect, useState } from 'react';
import { Button, Card, Container } from 'react-bootstrap';
import { useSelector, useDispatch } from "react-redux"
import { getCart } from '../login/loginFuncions';
import { setCartData } from '@/store/features/cartSlice/cartSlice';
import cartStyle from '@/styles/cart/cart.module.css'
import { getOrdersData } from '@/queries/cart/cart.queries';
export default function CartComponent() {
    const dispatch = useDispatch();
    const [userDetails, setUserDetails] = useState();
    const [orderData, setOrderData] = useState([]);
    useEffect(() => {
        setUserDetails(JSON.parse(localStorage.getItem('ecom')));

    }, [])

    useEffect(() => {

        if (userDetails != undefined || userDetails?.userId != undefined)
            getdata()


    }, [])

    useEffect(() => {
        if (userDetails?.userRole == "manager") {
            const temp = async () => {
                let result = await getOrdersData();
                console.warn(result)
                if (result.data.success) {
                    setOrderData(result.data.orderData)
                }
            }
            temp()

        }
    }, [userDetails])

    const getdata = async () => {

        dispatch(
            setCartData(await getCart({ userId: userDetails.userId, }))
        )
    }
    const { userCartData } = useSelector((state) => state.userCartData)
    console.warn(userCartData)
    if (userDetails?.userRole == "user") {
        return (
            <>
                <div className={cartStyle.main_div}>
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
                </div>
                {userCartData[0] &&
                    <div>
                        <button className={cartStyle.order_button} >Order</button>
                    </div>
                }
            </>
        )
    }
    else {
        return false;
         return (
            <>"manger"
                <div className={cartStyle.main_div}>
                    {orderData?.map((element, index) =>
                       {
                       return (
                       <Card>
                            { orderData[index].products.map((product)=>
                           {return  (<>
                            <Card className={cartStyle.product_card} key={index} >
                                <Container className={cartStyle.product_image_div} fluid={true}>
                                    <Card.Img className={cartStyle.product_image} variant="top" src={element.imageURL} />

                                </Container>
                                <Container className={cartStyle.product_body_div}  >
                                    <Card.Body>
                                        <Card.Title className={cartStyle.product_text} >{product.name}</Card.Title>
                                        <Card.Text className={cartStyle.product_text} >
                                            ₹ {product.price}
                                        </Card.Text>
                                        <Button className={cartStyle.remove_button} variant="primary">Remove </Button>
                                    </Card.Body>
                                </Container>

                            </Card>
                            </>)}
                            ) }
                        </Card>
                    )}
                    )}
                </div>
                {orderData[0] &&
                    <div>
                        <button className={cartStyle.order_button} >Order</button>
                    </div>
                }
            </>
        )
    }
}

