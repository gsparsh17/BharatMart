import React from 'react';
import "./LandingPage.css";
import Carousel from "./Carousel";
import pic from './pic (1).jpg';
import pic1 from './pic (2).jpg';
import pic3 from './pic (4).jpg';
import pic4 from './pic (3).jpg';

const images = [pic,pic1,pic3,pic4];

function LandingPage() {
  return (
    <div className="App mt-16">
      <main>
        <Carousel images={images} />
      </main>
    </div>
  )
}

export default LandingPage