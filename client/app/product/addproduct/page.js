"use client"
import { useState, useEffect } from "react";
import { addProductData } from "@/queries/product/product.queries";
import addProductstyles from "@/styles/product/addProduct.module.css"
import FormData from "form-data";
import Image from "next/image";
const AddProduct = () => {

    const [userCookie, setUserCookie] = useState();
    useEffect(() => {
        setUserCookie(JSON.parse(localStorage.getItem('ecom')));

    }, [])
    const userRole = userCookie?.userRole;

    const [productName, setProductName] = useState("");
    const [productDesc, setProductDesc] = useState("");
    const [productCatg, setProductCatg] = useState("");
    const [productPrice, setProductPrice] = useState("");
    const [productImage, setProductImage] = useState("");
    const [productURL, setProductURL] = useState("");
    const [previewProductImage, setPreviewProductImage] = useState("");
    const [addProductMsg, setAdProductMsg] = useState("");

    useEffect(() => {
        if (!productImage) {
            setPreviewProductImage(undefined)
            return
        }
        // create the preview
        const objectUrl = URL.createObjectURL(productImage)
        setPreviewProductImage(objectUrl)

        // free memory when ever this component is unmounted
        return () => URL.revokeObjectURL(objectUrl)
    }, [productImage])


    const handleFileChange = (event) => {
        const file = event.target.files[0];
        setProductImage(file);
        if (file && file.type.startsWith('image/')) {
            const reader = new FileReader();

            reader.onload = (e) => {
                const imageUrl = e.target.result;
                setPreviewProductImage(imageUrl);
            };

            reader.readAsDataURL(file);
        }
    };






    const addProduct = async () => {
        if (
            productName.length < 1 ||
            productDesc.length < 1 ||
            productPrice.length < 0 ||
            productCatg.length < 1
            // || productURL < 1       // this is done to direcyly add  product url to database

        ) {
            return false;
        }



        const data = {
            productName,
            productDesc,
            productCatg,
            productPrice,
            // productURL,     // this is done to direcyly add  product url to database

        }

        const formData = new FormData();
        formData.append('image', productImage)
        formData.append('productData', JSON.stringify(data))


        let result = await addProductData(formData)

        setAdProductMsg(result.data.message)
        if (result.data.success) {
            alert("product added successfully")
        }
    }

    return (
        <>
            <div className=''>
                <div>
                    <div className="">
                        <button className="mx-2 border p-2 rounded hover:bg-blue-500">Cancel</button>
                        <button className="mx-2 border p-2 rounded hover:bg-blue-500">Add Product</button>
                    </div>
                    <div className=" w-full flex flex-row p-2 ">
                        <div className="w-3/4 mx-2">
                            <div className="flex flex-col w-full p-4 rounded shadow-md">
                                <span className="font-lg font-medium my-1">General Information</span>
                                <label className="my-1 ">Product Name</label>
                                <input className="my-1 p-2 rounded shadow-md" placeholder='Type product name here' />
                                <label className="my-1 ">Description</label>
                                <textarea className="my-1 shadow-md rounded p-2  wrap " placeholder='Type product description here' />
                            </div>

                            <div className="flex flex-col w-full p-4 rounded shadow-md my-2">
                                <span>Media</span>
                                <div>
                                    <label className={addProductstyles.label}>Add Product Image</label>
                                    <input className={addProductstyles.input} type="file" onChange={handleFileChange}></input>
                                    {previewProductImage && <Image className={addProductstyles.preview_image} width={100} height={100} src={previewProductImage}></Image>}
                                </div>

                                {/* <div>
                                <label className={addProductstyles.label}>Add Product Video</label>
                                <input className={addProductstyles.input} type="file" onChange={handleFileChange}></input>
                                {previewProductImage && <Image className={addProductstyles.preview_image} width={100} height={100} src={previewProductImage}></Image>}
                            </div> */}
                            </div>

                            <div className="flex flex-col w-full p-4 rounded shadow-md my-2">
                                <span className="font-lg font-medium my-1">Pricing</span>
                                <label className="my-1 ">Base Price</label>
                                <input className="my-1 p-2 rounded shadow-md" type="number" placeholder='Type your base price here' />

                            </div>

                            <div className="flex flex-col w-full p-4 rounded shadow-md my-2">
                                <span className="font-lg font-medium my-1 mx-2">Inventory</span>
                                <div className="flex flex-row">
                                    <div className="flex flex-col mx-2">
                                        <label className="my-1 ">SKU</label>
                                        <input className="my-1 p-2 rounded shadow-md" placeholder='Type your base price here' />
                                    </div>
                                    <div className="flex flex-col mx-2">
                                        <label className="my-1 ">Barcode</label>
                                        <input className="my-1 p-2 rounded shadow-md" placeholder='Type your base price here' />
                                    </div>
                                    <div className="flex flex-col mx-2">
                                        <label className="my-1 ">Quantity</label>
                                        <input className="my-1 p-2 rounded shadow-md" placeholder='Type your base price here' />
                                    </div>

                                </div>
                            </div>

                        </div>
                        <div className="w-1/4 mx-2">
                            <div className="w-full flex flex-col">
                                <div className="flex flex-col w-full p-4 rounded shadow-md ">
                                    <span className="font-lg font-medium my-1">Category</span>
                                    <label className="my-1 ">Product Category</label>
                                    <select className="my-1 p-2 rounded shadow-md" placeholder='Type product name here' >
                                        <option value="volvo">Volvo</option>
                                        <option value="saab">Saab</option>
                                        <option value="opel">Opel</option>
                                        <option value="audi">Audi</option>
                                    </select>
                                    <label className="my-1 ">Product Tags</label>
                                    <select className="my-1 p-2 rounded shadow-md" placeholder='Type product name here' >
                                        <option value="volvo">Volvo</option>
                                        <option value="saab">Saab</option>
                                        <option value="opel">Opel</option>
                                        <option value="audi">Audi</option>
                                    </select>
                                </div>
                                <div className="flex flex-col w-full p-4 rounded shadow-md my-2">
                                    <label className="my-1 ">Product Category</label>
                                    <select className="my-1 p-2 rounded shadow-md" placeholder='Type product name here' >
                                        <option value="volvo">Volvo</option>
                                        <option value="saab">Saab</option>
                                        <option value="opel">Opel</option>
                                        <option value="audi">Audi</option>
                                    </select>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                <div className={addProductstyles.main_div}>
                    <h1>Add Product</h1>
                    <div className={addProductstyles.add_div}>

                        <label className={addProductstyles.label}>Enter Product Name</label>
                        <input className={addProductstyles.input} onChange={(e) => setProductName(e.target.value)}></input>
                        <label className={addProductstyles.label}>Enter Product Description</label>
                        <input className={addProductstyles.input} onChange={(e) => setProductDesc(e.target.value)}></input>
                        <label className={addProductstyles.label}>Enter Product Price</label>
                        <input className={addProductstyles.input} onChange={(e) => setProductPrice(e.target.value)}></input>
                        <label className={addProductstyles.label}>Enter Product Catgeory</label>
                        <input className={addProductstyles.input} onChange={(e) => setProductCatg(e.target.value)}></input>
                        {/* <label className={addProductstyles.label}>Enter Product URl</label>
                        <input className={addProductstyles.input} onChange={(e) => setProductURL(e.target.value)}></input> */}

                        <label className={addProductstyles.label}>Add Product Image</label>
                        <input className={addProductstyles.input} type="file" onChange={handleFileChange}></input>
                        {previewProductImage && <Image className={addProductstyles.preview_image} width={100} height={100} src={previewProductImage}></Image>}
                        {console.warn(previewProductImage)}
                        <button className={addProductstyles.add_button} onClick={() => addProduct()}> Add Product</button>
                        {addProductMsg}
                    </div>

                </div>
            </div>
        </>
    )
}

export default AddProduct