import React from 'react';
import { Link } from 'react-router-dom';
import productImg from "../../assets/images/merch/black-shirt.png"
import image2 from "../../assets/images/merch/green-shirt.png";
import image3 from "../../assets/images/merch/cap-cooler.png";

function FeaturedProducts() {
  const products = [
    {
      name: "Black Herbal Shirt",
      image: productImg,
      description:
       " The black herbal shirt is crafted from premium cotton fabric, offering a soft and comfortable fit. Its vibrant blue color is complemented by intricate herbal-themed designs, making it a stylish choice for casual wear.",
      price: 150,
    },
    {
      name: "Green Shirt",
      image: image2,
      description:
        "The green shirt is made from high-quality, breathable fabric, ensuring comfort and durability while showcasing a vibrant green color that stands out.",
      price: 250,
    },
    {
      name: "Cap and Cooler",
      image: image3,
      description:
        "The cap and cooler set features a sleek design with the brand's logo prominently displayed, combining functionality with style for outdoor enthusiasts.",
      price: 250,
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center min-h-[70%] bg-linear-to-b from-white to-green-300/50 py-10">
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-green-700 tracking-tight text-center drop-shadow-sm mb-10">
        Featured Merchandise
      </h1>

      {/* Horizontal Scroll Slider */}
      <div className="w-full max-w-4xl overflow-x-auto snap-x snap-mandatory scroll-smooth scrollbar-none bg-[url(../../assets/images/bg/bg-3.jpg)] bg-cover bg-no-repeat mix-blend-multiply rounded-lg px-4">
        <div className="flex">
          {products.map((product, i) => (
            <div
              key={i}
              className="w-full shrink-0 snap-start flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 p-5 min-w-full"
            >
              {/* Image Card */}
              <div className="w-72 h-80 md:w-80 md:h-96 lg:w-96 lg:h-[500px] rounded-lg bg-[url(../../assets/images/bg/bg-5.jpg)] bg-cover bg-no-repeat bg-center shadow-lg shadow-green-200 flex items-center justify-center">
                <img src={product.image} alt={product.name} className="w-full h-full object-cover rounded-lg" />
              </div>
              {/* Description Card */}
              <div className="w-72 md:w-80 lg:w-96 p-4 text-center text-green-700 font-semibold rounded-2xl bg-[linear-gradient(135deg,rgba(255,255,255,0.08),rgba(255,255,255,0.04))] backdrop-blur-sm border border-white/20 shadow-lg">
                <h2 className="text-2xl md:text-3xl lg:text-4xl mb-4">{product.name}</h2>
                <p className="text-base md:text-lg lg:text-xl mb-4">{product.description}</p>
                <p className="text-2xl md:text-3xl lg:text-4xl font-bold text-green-700 mb-4">
                  R{product.price}
                </p>
                <Link to="/shop">
                  <button className="px-4 py-2 md:px-6 md:py-3 bg-amber-900 text-white rounded-lg hover:bg-green-600 transition text-base md:text-lg">
                    Buy Now
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default FeaturedProducts;
