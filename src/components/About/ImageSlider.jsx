import React, { useEffect, useState } from 'react';

import image1 from '../../assets/images/output.png';
import image2 from '../../assets/images/waters.jpg'; 
import image3 from '../../assets/images/herb2/product-warehouse.jpg'; 
import image4 from '../../assets/images/herb2/quality.jpg'; 


const ImageSlider = () => {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const images = [
    image1,
    image2,
    image3,
    image4
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [opacity, setOpacity] = useState(1);

  useEffect(() => {
    // Preload images
    images.forEach(src => {
      const img = new Image();
      img.src = src;
    });

    const interval = setInterval(() => {
      setOpacity(0);
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        setOpacity(1);
      }, 500);
    }, 6000);

    return () => clearInterval(interval);
  }, [images]);

  return (
    <img
      id="aboutImage"
      src={images[currentIndex]}
      alt="Herbal products"
className="
  w-[400px] h-[600px] mt-20 border-green-300 rounded-lg
  bg-[url(../../assets/images/bg/bg-2.jpg)]
  bg-cover bg-no-repeat bg-center shadow-lg shadow-green-200
  mix-blend-multiply
  [clip-path:polygon(24%_35%,15%_15%,38%_0,71%_0,90%_14%,91%_48%,100%_76%,90%_92%,85%_100%,43%_100%,6%_93%,0_62%)]
"
style={{ opacity }}
    />
  );
};

export default ImageSlider;
