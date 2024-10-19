// Landing.jsx
import { useState } from "react";
import Navbar from "./NavBar";
import ProductInput from "./ProductInput";
import ProductDisplay from "./ProductDisplay";

export default function Landing() {
  const [productData, setProductData] = useState(null);

  const handleAnalyze = async (inputValue) => {
    try {
      const response = await fetch(`https://pinktober-hackathon-backend-tbou.onrender.com/product/${inputValue}`);
      const data = await response.json();
      setProductData(data); 
    } catch (error) {
      console.error("Error fetching product data:", error);
    }
  };

  return (
    <div className="relative bg-white min-h-screen">
      <div className="absolute top-0 left-0 w-[8rem] h-[10rem] bg-[#FBE9E9] rounded-br-full"></div>
      <div className="absolute top-0 right-0 w-[35rem] h-[35rem] bg-[#FBE9E9] rounded-bl-full"></div>


      <Navbar />

      <div className="relative w-full flex flex-col md:flex-row items-center justify-between gap-10 px-6 py-16 md:px-16">

        <ProductInput onAnalyze={handleAnalyze} />


        <div className="relative w-full md:w-[45%] flex flex-col items-center">
          <div className="relative">
            <img
              className="w-[17.5rem] md:w-[21.25rem] rounded-tl-[5rem] rounded-tr-[1.875rem] object-cover"
              src="./public/doctor.png"
              alt="Doctor"
            />
            <img
              className="w-[5.625rem] md:w-[6.875rem] absolute rounded-xl left-[-1.5625rem] top-[9.375rem] shadow-lg"
              src="./public/deco-landing.png"
              alt="Decoration"
            />
          </div>
          <div className="mt-6 bg-white rounded-xl px-8 py-6 border-t-4 border-[#FBE9E9] shadow-lg">
            <h1 className="font-bold text-2xl md:text-3xl text-[#d02f46] text-center mb-3">
              Ingredient Risk Scanner
            </h1>
            <p className="text-[#ED8182] text-center text-lg">100% Free & Instant</p>
          </div>
        </div>
      </div>

      <ProductDisplay productData={productData} />
    </div>
  );
}
