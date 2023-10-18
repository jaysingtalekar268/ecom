import Product from "../product/product"
import SectionMenu from "./sectionMenu"
import CustomCarousal from "../carousal/carousel"
import CustomCardSlider from "../cardSlider/cardSlider"
import Catgories from "./categories"
import ProductImage1 from "@/public/product.jpeg"
import ProductImage2 from "@/public/camera.png"
import ProductImage3 from "@/public/login.jpeg"
import CardGrid from "../cardGrid/cardGrid"

const HomeComponent = () => {

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

  ]

  return (
    <>
      <div className="flex flex-row">
        <SectionMenu />
        <CustomCarousal className="" carousalItems={carousalData} />
      </div>
      <div className="flex flex-col border-b-2 pb-6 mb-3" >
        <CustomCardSlider cardItems={cardData}></CustomCardSlider>
        <div className=" flex justify-center m-1">
          <button className="bg-red-600 text-white rounded  px-12 py-2.5 m-1  ">View All Products</button>
        </div>
      </div>

      <div className="w-full h-full border-b-2 pb-6 mb-3">
        <Catgories />
      </div>
      <div className="w-full h-full">
        <div className="my-4">
          <span className="text-4xl font-semibold  ">Best Selling Products</span>
        </div>
        <CardGrid cardItems={cardData}></CardGrid>  {/*//TODo: add heart icon for adding product directly to cart and wish list*/}
      </div>
      <div className="w-full h-full">
        <div className="my-4">
          <span className="text-4xl font-semibold  ">Explore Our Products</span>
        </div>
        <CardGrid cardItems={cardData}></CardGrid> {/*//TODo: add heart icon for adding product directly to cart and wish list*/}
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
      <Product>
      </Product>
    </>
  )
}

export default HomeComponent