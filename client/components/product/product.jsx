"use client"
import React from 'react'
import productStyle from "../../styles/product/product.module.css"
import Image from 'next/image'
import productImage from "../../public/product.jpeg"
import ShowProducts from './showProducts'


export default function Product() {



    return (
        <div className={productStyle.main_div}>
          
            <ShowProducts></ShowProducts>
        </div>
    )
}
