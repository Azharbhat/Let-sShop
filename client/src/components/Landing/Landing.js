import './Landing.css'
import men from '../../asset/brand/men.png'
import men3 from '../../asset/brand/men3.png'
import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { Button } from "@mui/material";

const Landing = () => {
    // Define an array of images
    const images = [men,men3];
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    useEffect(() => {
        // Set up a timer to change the image every 2 seconds
        const intervalId = setInterval(() => {
            // Increment the current image index
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 4000);

        // Clean up the interval on component unmount
        return () => clearInterval(intervalId);
    }, [images.length]); // Depend on the length of the images array

    return ( 
        <div className="landing__container">
            <div className="landing__header__container">
                <div className="landing__header">
                    <h3 className="landing__header__discount">UP TO 15% DISCOUNT</h3>
                    <h1 className="landing__header__main">Checkout The Best Fashion Style</h1>
                    <Link to="/shop">
                        <Button variant='outlined' sx={[ {width: '190px', height: '50px', borderRadius: '20px' , fontWeight: '700', backgroundColor: 'none', borderColor: 'black', color: 'black' }, {'&:hover': {  backgroundColor: "black" , color: "#FFE26E", borderColor: 'black'}}]}>SHOP NOW</Button>
                    </Link>
                </div>
            </div>
            <div className="landing__image__container">
                {/* Display the current image based on the currentImageIndex */}
                <img className="landing__image" src={images[currentImageIndex]} alt=""/>
            </div>
        </div>
    );
}
 
export default Landing;
