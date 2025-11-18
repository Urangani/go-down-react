import productImg from "../../assets/images/output.png"
import image2 from "../../assets/images/products/silentHerb.png";
function Slider() {
  const products = [
    {
      name: "Go Down Herb",
      image: productImg,
      description:
       " By leveraging traditional knowledge and modern production techniques, we deliver high-quality, effective, and affordable herbal health products",
      price: 2,
    },
    {
      name: "SilentHerb",
      image: image2,
      description:
        "This bottle design features a harmonious blend of natural elements, showcasing a serene landscape that evokes tranquility and eco-friendliness.",
      price: 200,
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-linear-to-t from-green-200 to-white py-10">
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-green-600 tracking-tight text-center drop-shadow-sm mb-10">
        Featured Products
      </h1>

      {/* Horizontal Scroll Slider */}
      <div className="w-[70%] overflow-x-auto snap-x snap-mandatory scroll-smooth [animate-scroll-auto] scrollbar-none bg-[url(../../assets/images/bg/bg-2.jpg)] bg-contain bg-no-repeat bg-center mix-blend-multiply">
        <div className="flex">
          {products.map((product, i) => (
            <div
              key={i}
              className="w-full shrink-0 snap-start flex items-center justify-center gap-8 p-5"
            >
           
            {/* Image Card */}
            <div className="w-[400px] h-[600px] mt-20 border-green-100- rounded-lg bg-[url(../../assets/images/bg/bg-4.jpg)] bg-cover bg-no-repeat bg-center shadow-lg shadow-green-200">
              <img src={product.image} className="w-[400px] h-[600px]"/>
            </div>
            {/* Description Card*/}
            <div>
              {/* Description */}
              <div className="w-[400px] m-auto ml-20 text-center text-green-700 font-semibold">
                <h2 className="text-5xl mb-2">{product.name}</h2>
                <p className="text-xl">{product.description}</p>
                <p className="mt-4 text-5xl font-bold text-green-800">
                  R{product.price}
                </p>
                <button className="mt-4 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition">
                  Buy Now
                </button>
              </div>
             </div>   
             </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Slider;
