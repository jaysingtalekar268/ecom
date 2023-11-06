import { useState, useEffect, } from "react";
import { useRouter } from "next/navigation"

import AdminOrder from "./adminOrder";

const OrderComponent = () => {

    const router = useRouter();
    const [userCookie, setUserCookie] = useState();
    useEffect(() => {
        let tempCookie = JSON.parse(localStorage.getItem('ecom'));
        if (tempCookie == undefined && tempCookie?.userRole == undefined && tempCookie == null) {
            router.replace("/login")
        }
        setUserCookie(tempCookie);

    }, [])



    const userRole = userCookie?.userRole;

    if (userRole == "manager") {
        return (<AdminOrder></AdminOrder>)
    }
    else if (userRole == "user") {
        return (
            <div className={""}>
                <h1>Order component under development</h1>
                {/* {userRole ?
        <>
          {userRole && userRole == "user" ?
            (<ShowProducts></ShowProducts>)
            :
            (<AddProduct></AddProduct>)
          }
        </>
        : <h1>Page is loading</h1>} */}
            </div>
        )
    }


}

export default OrderComponent