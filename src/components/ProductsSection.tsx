import React, { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

const ProductsSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("opacity-100", "translate-y-0");
          } else {
            entry.target.classList.remove("opacity-100", "translate-y-0");
          }
        });
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const handleClick = (productType: string) => {
    const card = document.getElementById(productType);
    if (card) {
      card.classList.add("animate-burst");
      setTimeout(() => navigate(`/products/${productType}`), 300);
    }
  };

  return (
    <section
      ref={sectionRef}
      className="py-20 px-10 bg-cover bg-center bg-no-repeat transition-opacity duration-700 ease-in-out opacity-0 translate-y-10"
      style={{
        backgroundImage: `url('/src/assets/Page 2.png')`,
      }}
    >
      <div className="max-w-5xl mx-auto flex flex-col items-center text-center">
        <h2 className="text-3xl font-bold text-orange-500 mb-6">Our Exclusive Products</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Basmati Rice */}
          <div
            id="Basmati"
            className="bg-white p-6 rounded-xl shadow-xl cursor-pointer transition-transform duration-300 hover:brightness-110 active:scale-95 transform"
            onClick={() => handleClick("Basmati")}
          >
            <img
              src="src/assets/Basmati.jpeg"
              alt="Basmati Rice"
              className="w-full h-56 object-cover rounded-lg mb-4"
            />
            <h3 className="text-xl font-bold mb-2 text-black">Basmati Rice</h3>
            <p className="text-gray-600 text-sm">
              Long, aromatic grains with a delicate texture.
            </p>
            <p className="text-gray-600 text-sm mb-3">
              Perfect for biryanis, pulao, and exotic dishes.
            </p>
            {/* Right-facing arrow with hover effect */}
            <div className="flex justify-center">
              <div className="arrow-container">
                <span className="arrow-icon">→</span>
              </div>
            </div>
          </div>

          {/* Non-Basmati Rice */}
          <div
            id="NonBasmati"
            className="bg-white p-6 rounded-xl shadow-xl cursor-pointer transition-transform duration-300 hover:brightness-110 active:scale-95 transform"
            onClick={() => handleClick("NonBasmati")}
          >
            <img
              src="src/assets/NonBasmati.jpg"
              alt="Non-Basmati Rice"
              className="w-full h-56 object-cover rounded-lg mb-4"
            />
            <h3 className="text-xl font-bold mb-2 text-black">Non-Basmati Rice</h3>
            <p className="text-gray-600 text-sm">
              Affordable, versatile rice with a soft texture.
            </p>
            <p className="text-gray-600 text-sm mb-3">
              Suitable for daily meals, fried rice, and more.
            </p>
            {/* Right-facing arrow with hover effect */}
            <div className="flex justify-center">
              <div className="arrow-container">
                <span className="arrow-icon">→</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Burst Animation & Arrow Hover Effect */}
      <style>
        {`
          .animate-burst {
            animation: burst 0.3s ease-out forwards;
          }
          @keyframes burst {
            0% { transform: scale(1); opacity: 1; }
            50% { transform: scale(1.2); opacity: 0.5; }
            100% { transform: scale(1); opacity: 0; }
          }

          /* Arrow Container */
          .arrow-container {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 40px;
            height: 40px;
            border-radius: 50%;
            transition: background-color 0.3s ease-in-out, transform 0.3s ease-in-out;
          }

          /* Arrow Default */
          .arrow-icon {
            font-size: 30px;
            color: #ff7f00;
            transition: color 0.3s ease-in-out;
          }

          /* Hover Effect */
          .arrow-container:hover {
            background-color: #ff7f00;
            transform: scale(1.1);
          }

          .arrow-container:hover .arrow-icon {
            color: white;
          }
        `}
      </style>
    </section>
  );
};

export default ProductsSection;
