"use client"
import { useEffect ,useState} from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useSelector, useDispatch } from "react-redux"
import { getCart } from '../login/loginFuncions';
import { setCartData } from '@/store/features/cartSlice/cartSlice';

export default function CartComponent() {
    const dispatch = useDispatch();
    const [userDetails,setUserDetails] =useState();
    useEffect(()=>{
        setUserDetails(JSON.parse(localStorage.getItem('ecom')));
  
    },[])

   useEffect ( ()=>{
        
        if(userDetails!=undefined || userDetails?.userId!=undefined)
        getdata()
        

    },[])

    const getdata=async()=>{
            
        dispatch(
            setCartData(  await getCart({ userId: userDetails.userId, }))
        )
    }
    const { userCartData } = useSelector((state) => state.userCartData)
    console.warn(userCartData)
    return (
        <div>
            {userCartData?.map((element, index) =>
                <Card style={{ width: '18rem' }} key={index} >
                    <Card.Img variant="top" src={element.imageURL} />
                    <Card.Body>
                        <Card.Title>{element.name}</Card.Title>
                        <Card.Text>
                            Price: ₹ {element.price}
                        </Card.Text>
                        <Button variant="primary">Remove </Button>
                    </Card.Body>
                </Card>
            )}
        </div>
    )
}

