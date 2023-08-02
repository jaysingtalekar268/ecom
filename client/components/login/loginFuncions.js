
import {
    getLogingData,
    getRegisterData,
} from "@/queries/login/login.queries"

import { getCartData } from "@/queries/cart/cart.queries";
import { setCartData } from "@/store/features/cartSlice/cartSlice";

export const handleLogin = async (
    userName,
    userPwd,
    setLoginMessage,
    router,
    dispatch
) => {
    const data = {
        userName,
        userPwd,
    }
    if (data.userName.length < 1 || data.userPwd.length < 1)
        return false;

    try {
        let result = await getLogingData(data).catch((error) => {
            console.warn("something went wrong while getting user login data from login function" + error)


        })
        setLoginMessage(result?.data?.message)
        console.warn(result)
        if (result.data.success) {
            let data = { userId: result.data.userId, }
            console.warn("i got this cart")
       
            console.warn(await getCart(data))
            dispatch(
                setCartData( await getCart(data))
            )
            localStorage.setItem("ecom", JSON.stringify({
                userId: result.data.userId,
                userRole: result.data.userRole,
            })
            );


            router.replace("/home")
        }

    } catch (error) {
        console.warn("something went wrong while getting user login data from login function" + error)

    }

}

export const getCart = async (data) => {
    alert("get cart called")
    try {
        let result = await getCartData(data);
        if (result.data.success) {
            return result.data.cartData.cart;

        }
        else {
            return [];

        }

    } catch (error) {
        console.warn("something went wrong while getting cart data data from login function" + error)

    }
}

export const handleRegister = async (
    userName,
    userPwd,
    userRole,
    setLoginMessage,
    setRegister
) => {
    const data = {
        userName,
        userPwd,
        userRole,
    }
    if (data.userName.length < 1 || data.userPwd.length < 1)
        return false;

    try {
        let result = await getRegisterData(data).catch((error) => {
            console.warn("something went wrong while getting register login data from login function" + error)


        })
        setLoginMessage(result.data.message)

        console.warn(result)
        if (result.data.success) {
            setRegister(false)
        }

    } catch (error) {
        console.warn("something went wrong while getting user login data from login function" + error)

    }

}
