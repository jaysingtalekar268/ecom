import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Image from "next/image"
import "../../node_modules/bootstrap/dist/css/bootstrap.css"
import carousalStyle from "@/styles/carousal/carousal.module.css"
import { BiChevronLeft, BiChevronRight } from "react-icons/bi"

const CustomCarousal = ({ carousalItems }) => {
  const [carousalCurrentIndex, setCarousalCurrentIndex] = useState(0);

  const handleCarousalIndex = (currentIndex) => {
    if (currentIndex <= 0)
      currentIndex = 0;
    else if (currentIndex >= carousalItems.length)
      currentIndex = carousalItems.length - 1;

    setCarousalCurrentIndex(currentIndex);
  }

  return (
    <div className={carousalStyle.carousal}>
      <div className={carousalStyle.arrow_div}>
        <BiChevronLeft className={carousalStyle.carousal_arrow}
          onClick={() => handleCarousalIndex(carousalCurrentIndex - 1)}
        />
      </div>

      {
        carousalItems.map((item, index) => {
          return (
            <>
              {index == carousalCurrentIndex &&
                <div className={carousalStyle.carousal_item} key={index}>
                  <Image className={carousalStyle.carousal_image} src={item.image} alt={`${index} Image`}></Image>
                  {/* <span className={carousalStyle.carousal_text}>{item.text}</span> */}
                </div>
              }
            </>

          )
        })
      }
      <div className={carousalStyle.arrow_div}>
        <BiChevronRight className={carousalStyle.carousal_arrow}
          onClick={() => handleCarousalIndex(carousalCurrentIndex + 1)}
        />
      </div>
    </div >
  );

}

export default CustomCarousal