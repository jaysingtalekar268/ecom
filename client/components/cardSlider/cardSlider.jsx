import React from 'react'
import cardSliderStyle from "@/styles/cardSlider/cardSlider.module.css"
import Image from "next/image"
import { BiStar, BiSolidStar } from 'react-icons/bi'
const CustomCardSlider = ({ cardItems }) => {
    return (
        
        <div className={cardSliderStyle.slider_div}>
            {
                cardItems.map((item, index) => {
                    return (
                        <div className={cardSliderStyle.card_item} key={index}>
                            <div className={cardSliderStyle.product_img_div}>
                                <Image className={cardSliderStyle.card_image} src={item.imageURL} width={100}  height={100}></Image>
                            </div>
                            <div>
                                <span>{item.name.slice(0, 20)}</span>
                            </div>
                            <div className={cardSliderStyle.price_div}>
                                <span className={cardSliderStyle.product_Price}>₹{item.price} </span>
                                <span className={cardSliderStyle.product_MRP}>₹{item.price}</span>
                            </div>
                            <div className={cardSliderStyle.rating_div}>
                                {
                                    new Array((5)).fill(2).map((element, ind) => {
                                        return (
                                            <BiSolidStar className={cardSliderStyle.rating_star} />
                                        )
                                    })
                                }

                                {
                                    new Array((5 - 3)).fill(5 - 3).map((element, ind) => {
                                        return (
                                            <BiStar />
                                        )
                                    })
                                }
                                <span className={cardSliderStyle.product_star_count}>({item.productStarCount})</span>
                            </div>
                        </div>
                        
                    )
                })}
        </div>
    )
}

export default CustomCardSlider