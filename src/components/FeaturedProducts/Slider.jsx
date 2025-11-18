import React from 'react';
import { Link } from 'react-router-dom';
import productImg from "../../assets/images/output.png"
import image2 from "../../assets/images/products/silentHerb.png";

function Slider() {
  const products = [
    {
      name: "Go Down Herb",
      image: productImg,
      description:
       " By leveraging traditional knowledge and modern production techniques, we deliver high-quality, effective, and affordable herbal health products",
      price: 150,
    },
    {
      name: "SilentHerb",
      image: image2,
      description:
        "This bottle design features a harmonious blend of natural elements, showcasing a serene landscape that evokes tranquility and eco-friendliness.",
      price: 250,
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-radial from-green-100 from-10% to-white py-10">
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-green-700 tracking-tight text-center drop-shadow-sm mb-10">
        Featured Products
      </h1>

      {/* Horizontal Scroll Slider */}
      <div className="w-full max-w-4xl overflow-x-auto snap-x snap-mandatory scroll-smooth scrollbar-none bg-[url(../../assets/images/bg/bg-2.jpg)] bg-contain bg-no-repeat bg-center mix-blend-multiply rounded-lg">
        <div className="flex">
          {products.map((product, i) => (
            <div
              key={i}
              className="w-full shrink-0 snap-start flex flex-col md:flex-row items-center justify-center gap-8 p-5 min-w-full"
            >
              {/* Image Card */}
              <div className="w-80 h-96 md:w-96 md:h-[500px] rounded-lg bg-[url(../../assets/images/bg/bg-4.jpg)] bg-cover bg-no-repeat bg-center shadow-lg shadow-green-200 flex items-center justify-center">
                <img src={product.image} alt={product.name} className="w-full h-full object-cover rounded-lg" />
              </div>
              {/* Description Card */}
              <div className="w-80 md:w-96 p-4 text-center text-green-700 font-semibold  rounded-2xl bg-[linear-gradient(135deg,rgba(255,255,255,0.08),rgba(255,255,255,0.04))] backdrop-blur-sm border border-white/20 shadow-lg">
                <h2 className="text-3xl md:text-4xl mb-4">{product.name}</h2>
                <p className="text-lg md:text-xl mb-4">{product.description}</p>
                <p className="text-3xl md:text-4xl font-bold text-green-700 mb-4">
                  R{product.price}
                </p>
                <Link to="/shop">
                  <button className="px-6 py-3 bg-amber-900 text-white rounded-lg hover:bg-green-600 transition text-lg">
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

export default Slider;
