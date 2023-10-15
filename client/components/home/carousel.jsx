import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Image from "next/image"
import ProductImage from "@/public/product.jpeg"
import "../../node_modules/bootstrap/dist/css/bootstrap.css"

const HomeCarousel = () => {

    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex);
    };

    return (
      <div>
        this is under development carousel
      </div>
    );

}

export default HomeCarousel