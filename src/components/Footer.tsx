import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-bold mb-4">FMA Trders</h3>
            <p className="text-sm">
              Established in 2020, FMA Traders has been a leader in the
              rice industry.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="/" className="hover:text-gray-400">
                  Home
                </a>
              </li>
              <li>
                <a href="/about" className="hover:text-gray-400">
                  About
                </a>
              </li>
              <li>
                <a href="/products" className="hover:text-gray-400">
                  Products
                </a>
              </li>
              <li>
                <a href="/contact" className="hover:text-gray-400">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Our Category</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="/products/basmati-rice"
                  className="hover:text-gray-400"
                >
                  Basmati Rice
                </a>
              </li>
              <li>
                <a
                  href="/products/non-basmati-rice"
                  className="hover:text-gray-400"
                >
                  Non Basmati Rice
                </a>
              </li>
              <li>
                <a
                  href="/products/non-pesticides-basmati-rice"
                  className="hover:text-gray-400"
                >
                  Non Pesticide Basmati Rice
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Contact Detail</h3>
            <p className="text-sm">+91-</p>
            <p className="text-sm">+91-</p>
            <p className="text-sm">@gmail.com</p>
            <p className="text-sm">
              FMA Traders, Tirupattur, Sivagangai District.
            </p>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p>
            © 2025 FMA Traders. All Rights Reserved | Developed &
            marketing By:{" "}
            <a
              // href="https://www.intellistall.com/"
              className="hover:text-gray-400"
            >
              Alphius
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
