import React, { useState, useEffect } from 'react';

import image1 from '../img/chess1.jpg';
import image2 from '../img/chess2.jpg';
import image3 from '../img/chess3.jpg';
import image4 from '../img/chess4.jpg'

const imageList = [image1, image2, image3, image4];

const Home = () => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
    useEffect(() => {
      const interval = setInterval(() => {
        // Update the image index to rotate through the array
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % imageList.length);
      }, 2500); // 4 seconds interval
  
      return () => clearInterval(interval); // Clean up the interval on component unmount
    }, []); // Run this effect only once on initial render
  
    return (
      <img id='img' src={imageList[currentImageIndex]} alt="Chess" />
    );
  };
  
  export default Home;