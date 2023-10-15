import Product from "../product/product"
import SectionMenu from "./sectionMenu"
import HomeCarousel from "./carousel"
const HomeComponent = () => {
  return (
    <>
      <div className="flex flex-row">
        <SectionMenu />
      <HomeCarousel className=""/>
      </div>
      <Product>

      </Product>
    </>
  )
}

export default HomeComponent