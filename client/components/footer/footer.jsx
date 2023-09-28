
import { LuSendHorizonal } from "react-icons/lu"
const FooterComponent = () => {

    return (
        <div className=" flex flex-col w-full bg-black text-white  border-solid border-2 border-green-300" >
            <div className=" flex flex-col sm:flex-row    columns-5 bg-black justify-center  p-5  m-2" >
                <div className="flex flex-col border-solid m-2   w-full">
                    <span className="mt-2">Exclusive</span>
                    <span className="mt-2">Subscribe</span>
                    <span className="mt-2">Get 10 % off your first order</span>
                    <div className="mt-2 flex flex-row border   ">
                        <input className=" p-2 border-none outline-none bg-black" placeholder="Enter your email "></input>
                        <LuSendHorizonal className="mt-3 mr-2 w-full " onClick={() => alert("Email function is under development")} />
                    </div>

                </div>
                <div className="flex flex-col border-solid m-2 w-full">
                    <span>Support</span>
                    <span>Address</span>
                    <span>ecomm@contact.com</span>
                    <span>+88015-88888-9999</span>

                </div>
                <div className="flex flex-col border-solid m-2 w-full">
                    <span>Account</span>
                    <span>My Account</span>
                    <span>Long/ Register</span>
                    <span>Cart</span>
                    <span>Wishlist</span>
                    <span>Shop</span>

                </div>
                <div className="flex flex-col border-solid m-2 w-full">
                    <span>Quick Link</span>
                    <span>Privacy Policy</span>
                    <span>Terms Of Use</span>
                    <span>FAQ</span>
                    <span>Contact</span>

                </div>
                <div className="flex flex-col border-solid m-2 w-full">
                    <span>Download App</span>
                    <span>qr code </span>
                    <span>play store</span>
                    <span>app store</span>
                    <span>social </span>


                </div>
            </div>
            <div className="container flex justify-center content-center text-gray-700 py-2">
                <span className="text-center ">© Copyright ECOMM 2023. All right reserved</span>
            </div>
        </div>
    )
}

export default FooterComponent