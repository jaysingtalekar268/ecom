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
                                {/* <Image className={cardGridStyle.card_image} src={"https://ecommerce-bucket-aws.s3.ap-south-1.amazonaws.com/1691235981495.jpg"} width={100} height={100}></Image> */}
                                <Image className={cardGridStyle.card_image} src={item.imageURL} width={100} height={100}></Image>
                            </div>
                            <div>
                                <span>{item.name.slice(0, 20)}</span>
                            </div>
                            <div className={cardGridStyle.price_div}>
                                <span className={cardGridStyle.product_Price}>₹{item.price - item.discount} </span>
                                <span className={cardGridStyle.product_MRP}>₹{item.price}</span>
                            </div>
                            <div className={cardGridStyle.rating_div}>
                                {
                                    new Array((3)).fill(3).map((element, ind) => {
                                        // new Array((item.productRating)).fill(item.productRating).map((element, ind) => {
                                        return (
                                            <BiSolidStar className={cardGridStyle.rating_star} />
                                        )
                                    })
                                }

                                {
                                    new Array((5 - 3)).fill(5 - 3).map((element, ind) => {
                                        // new Array((5 - item.productRating)).fill(5 - item.productRating).map((element, ind) => {
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