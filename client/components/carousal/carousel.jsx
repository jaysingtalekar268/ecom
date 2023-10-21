import React, { useEffect, useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Image from "next/image"
import "../../node_modules/bootstrap/dist/css/bootstrap.css"
import carousalStyle from "@/styles/carousal/carousal.module.css"
import { BiChevronLeft, BiChevronRight } from "react-icons/bi"

const CustomCarousal = ({ carousalItems }) => {
  const [carousalCurrentIndex, setCarousalCurrentIndex] = useState(0);
  const [intervalId, setIntervalId] = useState(null);

  useEffect(() => {
    const id = handlecarousalAutoIndexUpdate(true);
    return () => {
      if (id) {
        clearInterval(id);
      }
    };
  }, []); // Empty dependency array to run the effect only once

  const handlecarousalAutoIndexUpdate = (goForward) => {
    const id = setInterval(() => {
      setCarousalCurrentIndex(prevIndex => {
        let newIndex = prevIndex + 1;
        if (newIndex >= carousalItems.length) {
          newIndex = 0; // Reset to the first item when reaching the end
        }
        return newIndex;
      });
    }, 1000 * 5);

    return id;
  }

  const handleCarousalIndex = (currentIndex) => {
    if (currentIndex < 0) {
      currentIndex = carousalItems.length - 1;
    } else if (currentIndex >= carousalItems.length) {
      currentIndex = 0;
    }

    setCarousalCurrentIndex(currentIndex);
  }

  // ... rest of your component code

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