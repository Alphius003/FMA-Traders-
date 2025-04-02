import React from "react";

const About: React.FC = () => {
  return (
    <section className="h-screen flex items-center justify-center px-12" style={{ backgroundImage: "url('src/assets/Page 2.png')" }}>
      {/* Left: Image */}
      <div className="w-1/2 flex justify-center">
        <img
          src="/assets/about-us.png"
          alt="FMA Traders - Quality Rice"
          className="w-180 h-100"
        />
      </div>

      {/* Right: Text */}
      <div className="w-1/2 text-left relative -mt-10">
        <h2 className="text-4xl font-bold text-[#F7740C] mb-4">
          About FMA Traders
        </h2>
        <p className="text-gray-900 text-lg leading-relaxed">
          FMA Traders is a leading supplier of <strong>premium Basmati and Non-Basmati rice</strong>,  
          trusted by customers across India and beyond. Located in  
          <strong>Tirupattur, Sivagangai District, Tamil Nadu</strong>, we take pride in sourcing 
          only the best grains to ensure purity, aroma, and taste in every pack.
        </p>

        <p className="text-gray-900 text-lg leading-relaxed mt-3">
          Our commitment to quality and transparency has made us a preferred  
          choice for <strong>households, restaurants, and bulk buyers</strong>. Whether for  
          local consumption or export, we guarantee consistency and superior standards.
        </p>

        <p className="text-gray-600 text-lg mt-4 font-semibold">
          "From Our Fields to Your Table – The Taste of Tradition & Purity!"
        </p>
      </div>

    </section>
  );
};

export default About;
