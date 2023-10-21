import React from 'react'
import cardGridStyle from "@/styles/cardGrid/cardGrid.module.css"
import Image from "next/image"
import { BiStar, BiSolidStar } from 'react-icons/bi'

const CardGrid = ({ cardItems }) => {
    return (

        <div className={cardGridStyle.slider_div}>
            {
                cardItems.map((item, index) => {
                    return (
                        <div className={cardGridStyle.card_item}>
                            <div className={cardGridStyle.product_img_div}>
                                <Image className={cardGridStyle.card_image} src={item.productImage}></Image>
                            </div>
                            <div>
                                <span>{item.productName.slice(0, 20)}</span>
                            </div>
                            <div className={cardGridStyle.price_div}>
                                <span className={cardGridStyle.product_Price}>₹{item.productPrice} </span>
                                <span className={cardGridStyle.product_MRP}>₹{item.productMRP}</span>
                            </div>
                            <div className={cardGridStyle.rating_div}>
                                {
                                    new Array((item.productRating)).fill(item.productRating).map((element, ind) => {
                                        return (
                                            <BiSolidStar className={cardGridStyle.rating_star} />
                                        )
                                    })
                                }

                                {
                                    new Array((5 - item.productRating)).fill(5 - item.productRating).map((element, ind) => {
                                        return (
                                            <BiStar />
                                        )
                                    })
                                }
                                <span className={cardGridStyle.product_star_count}>({item.productStarCount})</span>
                            </div>
                        </div>
                    )
                })}
        </div>
    )
}

export default CardGrid