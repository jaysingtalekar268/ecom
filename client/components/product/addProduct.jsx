import { useState, useEffect } from "react";
import { addProductData } from "@/queries/product/product.queries";
import addProductstyles from "../../styles/product/addProduct.module.css"
import FormData from "form-data";
import Image from "next/image";
const AddProduct = () => {

    const [userCookie, setUserCookie] = useState();
    useEffect(() => {
        setUserCookie(JSON.parse(localStorage.getItem('ecom')));

    },[])
    const userRole = userCookie?.userRole;

    const [productName, setProductName] = useState("");
    const [productDesc, setProductDesc] = useState("");
    const [productCatg, setProductCatg] = useState("");
    const [productPrice, setProductPrice] = useState("");
    const [productImage, setProductImage] = useState("");
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
        ) {
            return false;
        }



        const data = {
            productName,
            productDesc,
            productCatg,
            productPrice,
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
            <div className={addProductstyles.main_div}> 
                 <h1>Add Product</h1>
                 <div className={addProductstyles.add_div}> 

                <label className={addProductstyles.label}>Enter Product Name</label>
                <input className={addProductstyles.input} onChange={(e) => setProductName(e.target.value)}></input>
                <label className={addProductstyles.label}>Enter Product Description</label>
                <input className={addProductstyles.input}onChange={(e) => setProductDesc(e.target.value)}></input>
                <label className={addProductstyles.label}>Enter Product Price</label>
                <input className={addProductstyles.input}onChange={(e) => setProductPrice(e.target.value)}></input>
                <label className={addProductstyles.label}>Enter Product Catgeory</label>
                <input className={addProductstyles.input}onChange={(e) => setProductCatg(e.target.value)}></input>

                <label className={addProductstyles.label}>Add Product Image</label>
                <input className={addProductstyles.input} type="file" onChange={handleFileChange}></input>
                {previewProductImage && <Image className={addProductstyles.preview_image} width={100} height={100} src={previewProductImage}></Image>}
                {console.warn(previewProductImage)}
                <button className={addProductstyles.add_button} onClick={() => addProduct()}> Add Product</button>
                {addProductMsg}
                </div>

            </div>
        </>
    )
}

export default AddProduct