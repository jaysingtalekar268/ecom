"use client"
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import productImage from "../../public/product.jpeg"
import Image from 'next/image';
import showProductstyles from "../../styles/product/showProduct.module.css"

export default function ShowProducts() {

    return (
        <div className={showProductstyles.main_div}>
            {new Array(10).fill(true).map((element) =>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={productImage.src} />
                    <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                        </Card.Text>
                        <Button variant="primary">Add To cart</Button>
                        <Button variant="primary">Buy Now</Button>
                    </Card.Body>
                </Card>
            )}
        </div>
    )
}