import React from 'react'
import adminShowProductStyle from "@/styles/adminProduct/adminShowProduct.module.css"
import PhoneImage from "@/public/phone.jpeg"
import Image from 'next/image';
import { useRouter } from 'next/navigation';

const AdminShowProduct = () => {
    const router = useRouter();
    return (
        
            <div className={adminShowProductStyle.main_div}>
                <div>
                    <button className='bg-blue-600 text-white rounded p-2'
                        onClick={() => router.push("product/addproduct")}
                    >Add Product</button>
                </div>
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
                </div>
            </div>
        
    )
}

export default AdminShowProduct