import Product from "../product/product"
import SectionMenu from "./sectionMenu"
import CustomCarousal from "../carousal/carousel"
import CustomCardSlider from "../cardSlider/cardSlider"
import Catgories from "./categories"
import ProductImage1 from "@/public/product.jpeg"
import ProductImage2 from "@/public/camera.png"
import ProductImage3 from "@/public/login.jpeg"
import CardGrid from "../cardGrid/cardGrid"
import { useRouter } from 'next/navigation'
import AdminHome from "../admin/admin"
import { useState, useEffect } from "react"
import productStyle from "../../styles/product/product.module.css"
import { getProductData } from "@/queries/product/product.queries"

const HomeComponent = () => {

  const router = useRouter();
  const [userCookie, setUserCookie] = useState();
  const [productData, setProductData] = useState([]);

  useEffect(() => {
    getProduts();
  }, [])

  useEffect(() => {
    let tempCookie = JSON.parse(localStorage.getItem('ecom'));
    if (tempCookie == undefined && tempCookie?.userRole == undefined && tempCookie == null) {
      router.replace("/login")
    }
    setUserCookie(tempCookie);

  }, [])

  const getProduts = async () => {
    let result = await getProductData();
    // setProductDataMSg(result.data.message)
    if (result.data.success) {
      setProductData(result.data.productData)
    }
  }

  const carousalData = [
    {
      image: ProductImage1,
      text: "First Image Lorem ipsum dolor sit amet consectetur adipisicing elit."
    },
    {
      image: ProductImage2,
      text: "second Image Lorem ipsum dolor sit amet consectetur adipisicing elit."
    },
    {
      image: ProductImage3,
      text: "Third Image Lorem ipsum dolor sit amet consectetur adipisicing elit."
    },
  ]
  const cardData = [
    {
      productImage: ProductImage3,
      productName: "First Image Lorem ipsum dolor ",
      productMRP: 465,
      productPrice: 405,
      productDicount: 45,
      productRating: 4,
      productStarCount: 20,

    },
    {
      productImage: ProductImage1,
      productName: "First Image Lorem ipsum dolor ",
      productMRP: 465,
      productPrice: 405,
      productDicount: 45,
      productRating: 4,
      productStarCount: 20,

    },
    {
      productImage: ProductImage2,
      productName: "First Image Lorem ipsum dolor ",
      productMRP: 465,
      productPrice: 405,
      productDicount: 45,
      productRating: 4,
      productStarCount: 20,
    },
    {
      productImage: ProductImage3,
      productName: "First Image Lorem ipsum dolor ",
      productMRP: 465,
      productPrice: 405,
      productDicount: 45,
      productRating: 4,
      productStarCount: 20,

    },
    {
      productImage: ProductImage1,
      productName: "First Image Lorem ipsum dolor ",
      productMRP: 465,
      productPrice: 405,
      productDicount: 45,
      productRating: 4,
      productStarCount: 20,

    },
    {
      productImage: ProductImage2,
      productName: "First Image Lorem ipsum dolor ",
      productMRP: 465,
      productPrice: 405,
      productDicount: 45,
      productRating: 4,
      productStarCount: 20,
    },
    {
      productImage: ProductImage3,
      productName: "First Image Lorem ipsum dolor ",
      productMRP: 465,
      productPrice: 405,
      productDicount: 45,
      productRating: 4,
      productStarCount: 20,

    },
    {
      productImage: ProductImage1,
      productName: "First Image Lorem ipsum dolor ",
      productMRP: 465,
      productPrice: 405,
      productDicount: 45,
      productRating: 4,
      productStarCount: 20,

    },
    {
      productImage: ProductImage2,
      productName: "First Image Lorem ipsum dolor ",
      productMRP: 465,
      productPrice: 405,
      productDicount: 45,
      productRating: 4,
      productStarCount: 20,
    },
    {
      productImage: ProductImage3,
      productName: "First Image Lorem ipsum dolor ",
      productMRP: 465,
      productPrice: 405,
      productDicount: 45,
      productRating: 4,
      productStarCount: 20,

    },
    {
      productImage: ProductImage1,
      productName: "First Image Lorem ipsum dolor ",
      productMRP: 465,
      productPrice: 405,
      productDicount: 45,
      productRating: 4,
      productStarCount: 20,

    },
    {
      productImage: ProductImage2,
      productName: "First Image Lorem ipsum dolor ",
      productMRP: 465,
      productPrice: 405,
      productDicount: 45,
      productRating: 4,
      productStarCount: 20,
    },
    {
      productImage: ProductImage3,
      productName: "First Image Lorem ipsum dolor ",
      productMRP: 465,
      productPrice: 405,
      productDicount: 45,
      productRating: 4,
      productStarCount: 20,

    },
    {
      productImage: ProductImage1,
      productName: "First Image Lorem ipsum dolor ",
      productMRP: 465,
      productPrice: 405,
      productDicount: 45,
      productRating: 4,
      productStarCount: 20,

    },
    {
      productImage: ProductImage2,
      productName: "First Image Lorem ipsum dolor ",
      productMRP: 465,
      productPrice: 405,
      productDicount: 45,
      productRating: 4,
      productStarCount: 20,
    },
    {
      productImage: ProductImage3,
      productName: "First Image Lorem ipsum dolor ",
      productMRP: 465,
      productPrice: 405,
      productDicount: 45,
      productRating: 4,
      productStarCount: 20,

    },
    {
      productImage: ProductImage1,
      productName: "First Image Lorem ipsum dolor ",
      productMRP: 465,
      productPrice: 405,
      productDicount: 45,
      productRating: 4,
      productStarCount: 20,

    },
    {
      productImage: ProductImage2,
      productName: "First Image Lorem ipsum dolor ",
      productMRP: 465,
      productPrice: 405,
      productDicount: 45,
      productRating: 4,
      productStarCount: 20,
    },
    {
      productImage: ProductImage3,
      productName: "First Image Lorem ipsum dolor ",
      productMRP: 465,
      productPrice: 405,
      productDicount: 45,
      productRating: 4,
      productStarCount: 20,

    },
    {
      productImage: ProductImage1,
      productName: "First Image Lorem ipsum dolor ",
      productMRP: 465,
      productPrice: 405,
      productDicount: 45,
      productRating: 4,
      productStarCount: 20,

    },
    {
      productImage: ProductImage2,
      productName: "First Image Lorem ipsum dolor ",
      productMRP: 465,
      productPrice: 405,
      productDicount: 45,
      productRating: 4,
      productStarCount: 20,
    },
    {
      productImage: ProductImage3,
      productName: "First Image Lorem ipsum dolor ",
      productMRP: 465,
      productPrice: 405,
      productDicount: 45,
      productRating: 4,
      productStarCount: 20,

    },
    {
      productImage: ProductImage1,
      productName: "First Image Lorem ipsum dolor ",
      productMRP: 465,
      productPrice: 405,
      productDicount: 45,
      productRating: 4,
      productStarCount: 20,

    },
    {
      productImage: ProductImage2,
      productName: "First Image Lorem ipsum dolor ",
      productMRP: 465,
      productPrice: 405,
      productDicount: 45,
      productRating: 4,
      productStarCount: 20,
    },
    {
      productImage: ProductImage3,
      productName: "First Image Lorem ipsum dolor ",
      productMRP: 465,
      productPrice: 405,
      productDicount: 45,
      productRating: 4,
      productStarCount: 20,

    },
    {
      productImage: ProductImage1,
      productName: "First Image Lorem ipsum dolor ",
      productMRP: 465,
      productPrice: 405,
      productDicount: 45,
      productRating: 4,
      productStarCount: 20,

    },
    {
      productImage: ProductImage2,
      productName: "First Image Lorem ipsum dolor ",
      productMRP: 465,
      productPrice: 405,
      productDicount: 45,
      productRating: 4,
      productStarCount: 20,
    },
    {
      productImage: ProductImage3,
      productName: "First Image Lorem ipsum dolor ",
      productMRP: 465,
      productPrice: 405,
      productDicount: 45,
      productRating: 4,
      productStarCount: 20,

    },
    {
      productImage: ProductImage1,
      productName: "First Image Lorem ipsum dolor ",
      productMRP: 465,
      productPrice: 405,
      productDicount: 45,
      productRating: 4,
      productStarCount: 20,

    },
    {
      productImage: ProductImage2,
      productName: "First Image Lorem ipsum dolor ",
      productMRP: 465,
      productPrice: 405,
      productDicount: 45,
      productRating: 4,
      productStarCount: 20,
    },
    {
      productImage: ProductImage3,
      productName: "First Image Lorem ipsum dolor ",
      productMRP: 465,
      productPrice: 405,
      productDicount: 45,
      productRating: 4,
      productStarCount: 20,

    },
    {
      productImage: ProductImage1,
      productName: "First Image Lorem ipsum dolor ",
      productMRP: 465,
      productPrice: 405,
      productDicount: 45,
      productRating: 4,
      productStarCount: 20,

    },
    {
      productImage: ProductImage2,
      productName: "First Image Lorem ipsum dolor ",
      productMRP: 465,
      productPrice: 405,
      productDicount: 45,
      productRating: 4,
      productStarCount: 20,
    },
    {
      productImage: ProductImage3,
      productName: "First Image Lorem ipsum dolor ",
      productMRP: 465,
      productPrice: 405,
      productDicount: 45,
      productRating: 4,
      productStarCount: 20,

    },
    {
      productImage: ProductImage1,
      productName: "First Image Lorem ipsum dolor ",
      productMRP: 465,
      productPrice: 405,
      productDicount: 45,
      productRating: 4,
      productStarCount: 20,

    },
    {
      productImage: ProductImage2,
      productName: "First Image Lorem ipsum dolor ",
      productMRP: 465,
      productPrice: 405,
      productDicount: 45,
      productRating: 4,
      productStarCount: 20,
    },
    {
      productImage: ProductImage3,
      productName: "First Image Lorem ipsum dolor ",
      productMRP: 465,
      productPrice: 405,
      productDicount: 45,
      productRating: 4,
      productStarCount: 20,

    },
    {
      productImage: ProductImage1,
      productName: "First Image Lorem ipsum dolor ",
      productMRP: 465,
      productPrice: 405,
      productDicount: 45,
      productRating: 4,
      productStarCount: 20,

    },
    {
      productImage: ProductImage2,
      productName: "First Image Lorem ipsum dolor ",
      productMRP: 465,
      productPrice: 405,
      productDicount: 45,
      productRating: 4,
      productStarCount: 20,
    },
    {
      productImage: ProductImage3,
      productName: "First Image Lorem ipsum dolor ",
      productMRP: 465,
      productPrice: 405,
      productDicount: 45,
      productRating: 4,
      productStarCount: 20,

    },
    {
      productImage: ProductImage1,
      productName: "First Image Lorem ipsum dolor ",
      productMRP: 465,
      productPrice: 405,
      productDicount: 45,
      productRating: 4,
      productStarCount: 20,

    },
    {
      productImage: ProductImage2,
      productName: "First Image Lorem ipsum dolor ",
      productMRP: 465,
      productPrice: 405,
      productDicount: 45,
      productRating: 4,
      productStarCount: 20,
    },
    {
      productImage: ProductImage3,
      productName: "First Image Lorem ipsum dolor ",
      productMRP: 465,
      productPrice: 405,
      productDicount: 45,
      productRating: 4,
      productStarCount: 20,

    },
    {
      productImage: ProductImage1,
      productName: "First Image Lorem ipsum dolor ",
      productMRP: 465,
      productPrice: 405,
      productDicount: 45,
      productRating: 4,
      productStarCount: 20,

    },
    {
      productImage: ProductImage2,
      productName: "First Image Lorem ipsum dolor ",
      productMRP: 465,
      productPrice: 405,
      productDicount: 45,
      productRating: 4,
      productStarCount: 20,
    },
    {
      productImage: ProductImage3,
      productName: "First Image Lorem ipsum dolor ",
      productMRP: 465,
      productPrice: 405,
      productDicount: 45,
      productRating: 4,
      productStarCount: 20,

    },
    {
      productImage: ProductImage1,
      productName: "First Image Lorem ipsum dolor ",
      productMRP: 465,
      productPrice: 405,
      productDicount: 45,
      productRating: 4,
      productStarCount: 20,

    },
    {
      productImage: ProductImage2,
      productName: "First Image Lorem ipsum dolor ",
      productMRP: 465,
      productPrice: 405,
      productDicount: 45,
      productRating: 4,
      productStarCount: 20,
    },
    {
      productImage: ProductImage3,
      productName: "First Image Lorem ipsum dolor ",
      productMRP: 465,
      productPrice: 405,
      productDicount: 45,
      productRating: 4,
      productStarCount: 20,

    },
    {
      productImage: ProductImage1,
      productName: "First Image Lorem ipsum dolor ",
      productMRP: 465,
      productPrice: 405,
      productDicount: 45,
      productRating: 4,
      productStarCount: 20,

    },
    {
      productImage: ProductImage2,
      productName: "First Image Lorem ipsum dolor ",
      productMRP: 465,
      productPrice: 405,
      productDicount: 45,
      productRating: 4,
      productStarCount: 20,
    },
    {
      productImage: ProductImage3,
      productName: "First Image Lorem ipsum dolor ",
      productMRP: 465,
      productPrice: 405,
      productDicount: 45,
      productRating: 4,
      productStarCount: 20,

    },
    {
      productImage: ProductImage1,
      productName: "First Image Lorem ipsum dolor ",
      productMRP: 465,
      productPrice: 405,
      productDicount: 45,
      productRating: 4,
      productStarCount: 20,

    },
    {
      productImage: ProductImage2,
      productName: "First Image Lorem ipsum dolor ",
      productMRP: 465,
      productPrice: 405,
      productDicount: 45,
      productRating: 4,
      productStarCount: 20,
    },
    {
      productImage: ProductImage3,
      productName: "First Image Lorem ipsum dolor ",
      productMRP: 465,
      productPrice: 405,
      productDicount: 45,
      productRating: 4,
      productStarCount: 20,

    },
    {
      productImage: ProductImage1,
      productName: "First Image Lorem ipsum dolor ",
      productMRP: 465,
      productPrice: 405,
      productDicount: 45,
      productRating: 4,
      productStarCount: 20,

    },
    {
      productImage: ProductImage2,
      productName: "First Image Lorem ipsum dolor ",
      productMRP: 465,
      productPrice: 405,
      productDicount: 45,
      productRating: 4,
      productStarCount: 20,
    },
    {
      productImage: ProductImage3,
      productName: "First Image Lorem ipsum dolor ",
      productMRP: 465,
      productPrice: 405,
      productDicount: 45,
      productRating: 4,
      productStarCount: 20,

    },
    {
      productImage: ProductImage1,
      productName: "First Image Lorem ipsum dolor ",
      productMRP: 465,
      productPrice: 405,
      productDicount: 45,
      productRating: 4,
      productStarCount: 20,

    },
    {
      productImage: ProductImage2,
      productName: "First Image Lorem ipsum dolor ",
      productMRP: 465,
      productPrice: 405,
      productDicount: 45,
      productRating: 4,
      productStarCount: 20,
    },
    {
      productImage: ProductImage3,
      productName: "First Image Lorem ipsum dolor ",
      productMRP: 465,
      productPrice: 405,
      productDicount: 45,
      productRating: 4,
      productStarCount: 20,

    },
    {
      productImage: ProductImage1,
      productName: "First Image Lorem ipsum dolor ",
      productMRP: 465,
      productPrice: 405,
      productDicount: 45,
      productRating: 4,
      productStarCount: 20,

    },
    {
      productImage: ProductImage2,
      productName: "First Image Lorem ipsum dolor ",
      productMRP: 465,
      productPrice: 405,
      productDicount: 45,
      productRating: 4,
      productStarCount: 20,
    },
    {
      productImage: ProductImage3,
      productName: "First Image Lorem ipsum dolor ",
      productMRP: 465,
      productPrice: 405,
      productDicount: 45,
      productRating: 4,
      productStarCount: 20,

    },
    {
      productImage: ProductImage1,
      productName: "First Image Lorem ipsum dolor ",
      productMRP: 465,
      productPrice: 405,
      productDicount: 45,
      productRating: 4,
      productStarCount: 20,

    },
    {
      productImage: ProductImage2,
      productName: "First Image Lorem ipsum dolor ",
      productMRP: 465,
      productPrice: 405,
      productDicount: 45,
      productRating: 4,
      productStarCount: 20,
    },
    {
      productImage: ProductImage3,
      productName: "First Image Lorem ipsum dolor ",
      productMRP: 465,
      productPrice: 405,
      productDicount: 45,
      productRating: 4,
      productStarCount: 20,

    },
    {
      productImage: ProductImage1,
      productName: "First Image Lorem ipsum dolor ",
      productMRP: 465,
      productPrice: 405,
      productDicount: 45,
      productRating: 4,
      productStarCount: 20,

    },
    {
      productImage: ProductImage2,
      productName: "First Image Lorem ipsum dolor ",
      productMRP: 465,
      productPrice: 405,
      productDicount: 45,
      productRating: 4,
      productStarCount: 20,
    },
    {
      productImage: ProductImage3,
      productName: "First Image Lorem ipsum dolor ",
      productMRP: 465,
      productPrice: 405,
      productDicount: 45,
      productRating: 4,
      productStarCount: 20,

    },
    {
      productImage: ProductImage1,
      productName: "First Image Lorem ipsum dolor ",
      productMRP: 465,
      productPrice: 405,
      productDicount: 45,
      productRating: 4,
      productStarCount: 20,

    },
    {
      productImage: ProductImage2,
      productName: "First Image Lorem ipsum dolor ",
      productMRP: 465,
      productPrice: 405,
      productDicount: 45,
      productRating: 4,
      productStarCount: 20,
    },
    {
      productImage: ProductImage3,
      productName: "First Image Lorem ipsum dolor ",
      productMRP: 465,
      productPrice: 405,
      productDicount: 45,
      productRating: 4,
      productStarCount: 20,

    },
    {
      productImage: ProductImage1,
      productName: "First Image Lorem ipsum dolor ",
      productMRP: 465,
      productPrice: 405,
      productDicount: 45,
      productRating: 4,
      productStarCount: 20,

    },
    {
      productImage: ProductImage2,
      productName: "First Image Lorem ipsum dolor ",
      productMRP: 465,
      productPrice: 405,
      productDicount: 45,
      productRating: 4,
      productStarCount: 20,
    },
    {
      productImage: ProductImage3,
      productName: "First Image Lorem ipsum dolor ",
      productMRP: 465,
      productPrice: 405,
      productDicount: 45,
      productRating: 4,
      productStarCount: 20,

    },
    {
      productImage: ProductImage1,
      productName: "First Image Lorem ipsum dolor ",
      productMRP: 465,
      productPrice: 405,
      productDicount: 45,
      productRating: 4,
      productStarCount: 20,

    },
    {
      productImage: ProductImage2,
      productName: "First Image Lorem ipsum dolor ",
      productMRP: 465,
      productPrice: 405,
      productDicount: 45,
      productRating: 4,
      productStarCount: 20,
    },
    {
      productImage: ProductImage3,
      productName: "First Image Lorem ipsum dolor ",
      productMRP: 465,
      productPrice: 405,
      productDicount: 45,
      productRating: 4,
      productStarCount: 20,

    },
    {
      productImage: ProductImage1,
      productName: "First Image Lorem ipsum dolor ",
      productMRP: 465,
      productPrice: 405,
      productDicount: 45,
      productRating: 4,
      productStarCount: 20,

    },
    {
      productImage: ProductImage2,
      productName: "First Image Lorem ipsum dolor ",
      productMRP: 465,
      productPrice: 405,
      productDicount: 45,
      productRating: 4,
      productStarCount: 20,
    },
    {
      productImage: ProductImage3,
      productName: "First Image Lorem ipsum dolor ",
      productMRP: 465,
      productPrice: 405,
      productDicount: 45,
      productRating: 4,
      productStarCount: 20,

    },
    {
      productImage: ProductImage1,
      productName: "First Image Lorem ipsum dolor ",
      productMRP: 465,
      productPrice: 405,
      productDicount: 45,
      productRating: 4,
      productStarCount: 20,

    },
    {
      productImage: ProductImage2,
      productName: "First Image Lorem ipsum dolor ",
      productMRP: 465,
      productPrice: 405,
      productDicount: 45,
      productRating: 4,
      productStarCount: 20,
    },
    {
      productImage: ProductImage3,
      productName: "First Image Lorem ipsum dolor ",
      productMRP: 465,
      productPrice: 405,
      productDicount: 45,
      productRating: 4,
      productStarCount: 20,

    },
    {
      productImage: ProductImage1,
      productName: "First Image Lorem ipsum dolor ",
      productMRP: 465,
      productPrice: 405,
      productDicount: 45,
      productRating: 4,
      productStarCount: 20,

    },
    {
      productImage: ProductImage2,
      productName: "First Image Lorem ipsum dolor ",
      productMRP: 465,
      productPrice: 405,
      productDicount: 45,
      productRating: 4,
      productStarCount: 20,
    },
    {
      productImage: ProductImage3,
      productName: "First Image Lorem ipsum dolor ",
      productMRP: 465,
      productPrice: 405,
      productDicount: 45,
      productRating: 4,
      productStarCount: 20,

    },
    {
      productImage: ProductImage1,
      productName: "First Image Lorem ipsum dolor ",
      productMRP: 465,
      productPrice: 405,
      productDicount: 45,
      productRating: 4,
      productStarCount: 20,

    },
    {
      productImage: ProductImage2,
      productName: "First Image Lorem ipsum dolor ",
      productMRP: 465,
      productPrice: 405,
      productDicount: 45,
      productRating: 4,
      productStarCount: 20,
    },
    {
      productImage: ProductImage3,
      productName: "First Image Lorem ipsum dolor ",
      productMRP: 465,
      productPrice: 405,
      productDicount: 45,
      productRating: 4,
      productStarCount: 20,

    },
    {
      productImage: ProductImage1,
      productName: "First Image Lorem ipsum dolor ",
      productMRP: 465,
      productPrice: 405,
      productDicount: 45,
      productRating: 4,
      productStarCount: 20,

    },
    {
      productImage: ProductImage2,
      productName: "First Image Lorem ipsum dolor ",
      productMRP: 465,
      productPrice: 405,
      productDicount: 45,
      productRating: 4,
      productStarCount: 20,
    },
    {
      productImage: ProductImage3,
      productName: "First Image Lorem ipsum dolor ",
      productMRP: 465,
      productPrice: 405,
      productDicount: 45,
      productRating: 4,
      productStarCount: 20,

    },
    {
      productImage: ProductImage1,
      productName: "First Image Lorem ipsum dolor ",
      productMRP: 465,
      productPrice: 405,
      productDicount: 45,
      productRating: 4,
      productStarCount: 20,

    },
    {
      productImage: ProductImage2,
      productName: "First Image Lorem ipsum dolor ",
      productMRP: 465,
      productPrice: 405,
      productDicount: 45,
      productRating: 4,
      productStarCount: 20,
    },

  ]

  const userRole = userCookie?.userRole;

  return (
    <div className="w-full">
      {userRole ?
        <>
          {userRole && userRole == "user" ?
            (<div>
              <div className="flex flex-row mb-4 ">
                <SectionMenu />
                <CustomCarousal className="" carousalItems={productData} />
              </div>

              <div className="overflow-hidden  border-b-2 pb-6  mb-3 w-full " >
                <CustomCardSlider cardItems={productData}></CustomCardSlider>
                <div className=" flex justify-center m-1">
                  <button className="bg-red-600 text-white rounded  px-12 py-2.5 m-1  ">View All Products</button>
                </div>
              </div>
              <div className="border-b-2 pb-6 mb-3">
                <Catgories />
              </div>

              <div className="w-full h-full">
                <div className="my-4">
                  <span className="text-4xl font-semibold  ">Best Selling Products</span>
                </div>
                <CardGrid cardItems={productData}></CardGrid>  {/*//TODo: add heart icon for adding product directly to cart and wish list*/}
              </div>

              <div className="w-full h-full">
                <div className="my-4">
                  <span className="text-4xl font-semibold  ">Explore Our Products</span>
                </div>
                <CardGrid cardItems={productData}></CardGrid> {/*//TODo: add heart icon for adding product directly to cart and wish list*/}
                <div className=" flex justify-center m-1">
                  <button className="bg-red-600 text-white rounded  px-12 py-2.5 m-1  ">View All Products</button>

                </div>


              </div>





              <div className="w-full h-full">
                <div className="my-4">
                  <span className="text-4xl font-semibold  ">New Arrival</span>
                </div>
                {/* //TODO: this is under development for latest product showing */}
              </div>
              {/* <Product>
              </Product> */}
            </div>)
            :
            (<AdminHome></AdminHome>)
          }
        </>
        : <h1>Page is loading</h1>}
    </div>
  )
}

export default HomeComponent