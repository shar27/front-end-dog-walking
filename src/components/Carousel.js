// components/CarouselComponent.js
import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Image from 'next/image';


const images = [
    "/assets/dog1.jpg",
    "/assets/dog2.jpg",
    "/assets/dog3.jpg",
    "/assets/dog4.jpg"
];

const CarouselComponent = () => {
    return (
        <Carousel className='w-96 h-full ' showThumbs={true} autoPlay={true} infiniteLoop={true}>
            {images.map((src, index) => (
                <div key={index}>
                    <Image 
                        width={300}
                        height={200}
                        quality={100}
                        src={src} alt={`Slide ${index + 1}`}  />
                </div>
            ))}
        </Carousel>
    );
};

export default CarouselComponent;
