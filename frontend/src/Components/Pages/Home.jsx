import React from "react";
import Navbar from "../Navbar/Navbar";
// import { useNavigate } from "react-router-dom";
import banner from './banner.jpg'

const Home = () => {
  return (
    <div>
      <Navbar />
      <div className="bg-gray-100 min-h-screen">
        <div>
          <div className=" mx-auto">
            <img  className=" h-96 w-full" src={banner} alt="" />
          </div>
        </div>

        <div className="container mx-auto py-16">
          <h2 className="text-3xl font-bold text-center mb-8">
            Featured Products
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            

            <button
              onClick={() => (window.location.href = "/MensFootwears")}
              className="bg-white border rounded-lg shadow-md p-4 transition-transform transform hover:scale-105 hover:shadow-lg hover:border-blue-300 text-left w-full"
              style={{ appearance: "none" }}
            >
              <div className="w-full h-full">
                <img
                  src="https://images-cdn.ubuy.co.in/6627a6806528ab44210c9d22-track-spike-shoe-for-men-professional.jpg"
                  alt="Product"
                  className="w-full h-40 object-cover mb-4 rounded transition-transform transform hover:scale-110"
                />
                <h3 className="text-xl font-semibold mb-2 hover:text-blue-600">
                  Men Footwears
                </h3>
                <p className="text-gray-600 mb-2">Upto 30% Discount</p>
                <span className="text-blue-500 hover:underline hover:text-blue-700">
                  Shop Now
                </span>
              </div>
            </button>
            <button
              onClick={() => (window.location.href = "/WomensFootwears")}
              className="bg-white border rounded-lg shadow-md p-4 transition-transform transform hover:scale-105 hover:shadow-lg hover:border-blue-300 text-left w-full"
              style={{ appearance: "none" }}
            >
              <div className="w-full h-full">
                <img
                  src="https://5.imimg.com/data5/TH/MF/MY-26503376/white-block-heels-sandals-250x250.jpg"
                  alt="Product"
                  className="w-full h-40 object-cover mb-4 rounded transition-transform transform hover:scale-110"
                />
                <h3 className="text-xl font-semibold mb-2 hover:text-blue-600">
                  Women Footwears
                </h3>
                <p className="text-gray-600 mb-2">Upto 5% Discount</p>
                <span className="text-blue-500 hover:underline hover:text-blue-700">
                  Shop Now
                </span>
              </div>
            </button>

            <button
              onClick={() => (window.location.href = "/Electronics")}
              className="bg-white border rounded-lg shadow-md p-4 transition-transform transform hover:scale-105 hover:shadow-lg hover:border-blue-300 text-left w-full"
              style={{ appearance: "none" }}
            >
              <div className="w-full h-full">
                <img
                  src="https://inventstore.in/staging/wp-content/uploads/2023/04/Blue-scaled.webp"
                  alt="Product"
                  className="w-full h-40 object-cover mb-4 rounded transition-transform transform hover:scale-110"
                />
                <h3 className="text-xl font-semibold mb-2 hover:text-blue-600">
                  Electronics
                </h3>
                <p className="text-gray-600 mb-2">Upto 10% Discount</p>
                <span className="text-blue-500 hover:underline hover:text-blue-700">
                  Shop Now
                </span>
              </div>
            </button>

            <button
              onClick={() => (window.location.href = "/MakeUp")}
              className="bg-white border rounded-lg shadow-md p-4 transition-transform transform hover:scale-105 hover:shadow-lg hover:border-blue-300 text-left w-full"
              style={{ appearance: "none" }}
            >
              <div className="w-full h-full">
                <img
                  src="https://images.yourstory.com/cs/4/211ccaf00e6d11e997fe8f165dce9bb1/Imageifxu-1596799036123-1601633425902.jpg"
                  alt="Product"
                  className="w-full h-40 object-cover mb-4 rounded transition-transform transform hover:scale-110"
                />
                <h3 className="text-xl font-semibold mb-2 hover:text-blue-600">
                  Beauty Products
                </h3>
                <p className="text-gray-600 mb-2">Upto 10% Discount</p>
                <span className="text-blue-500 hover:underline hover:text-blue-700">
                  Shop Now
                </span>
              </div>
            </button>

            <button
              onClick={() => (window.location.href = "/Books")}
              className="bg-white border rounded-lg shadow-md p-4 transition-transform transform hover:scale-105 hover:shadow-lg hover:border-blue-300 text-left w-full"
              style={{ appearance: "none" }}
            >
              <div className="w-full h-full">
                <img
                  src="https://static.scientificamerican.com/sciam/cache/file/1DDFE633-2B85-468D-B28D05ADAE7D1AD8_source.jpg?w=1200"
                  alt="Product"
                  className="w-full h-40 object-cover mb-4 rounded transition-transform transform hover:scale-110"
                />
                <h3 className="text-xl font-semibold mb-2 hover:text-blue-600">
                  Books
                </h3>
                <p className="text-gray-600 mb-2">Upto 5% Discount</p>
                <span className="text-blue-500 hover:underline hover:text-blue-700">
                  Shop Now
                </span>
              </div>
            </button>

            <button
              onClick={() => (window.location.href = "/MensClothing")}
              className="bg-white border rounded-lg shadow-md p-4 transition-transform transform hover:scale-105 hover:shadow-lg hover:border-blue-300 text-left w-full"
              style={{ appearance: "none" }}
            >
              <div className="w-full h-full">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4DUA-excpqWNUyfpTITBNNpphcM2E5COinA&s"
                  alt="Product"
                  className="w-full h-40 object-cover mb-4 rounded transition-transform transform hover:scale-110"
                />
                <h3 className="text-xl font-semibold mb-2 hover:text-blue-600">
                  Men's Clothes
                </h3>
                <p className="text-gray-600 mb-2">Upto 15% Discount</p>
                <span className="text-blue-500 hover:underline hover:text-blue-700">
                  Shop Now
                </span>
              </div>
            </button>

            <button
              onClick={() => (window.location.href = "/WomensClothing")}
              className="bg-white border rounded-lg shadow-md p-4 transition-transform transform hover:scale-105 hover:shadow-lg hover:border-blue-300 text-left w-full"
              style={{ appearance: "none" }}
            >
              <div className="w-full h-full">
                <img
                  src="https://i.pinimg.com/736x/71/c0/90/71c090c1ee401a79f7b84c086fa04063.jpg"
                  alt="Product"
                  className="w-full h-40 object-cover mb-4 rounded transition-transform transform hover:scale-110"
                />
                <h3 className="text-xl font-semibold mb-2 hover:text-blue-600">
                  Women's Clothes
                </h3>
                <p className="text-gray-600 mb-2">Upto 15% Discount</p>
                <span className="text-blue-500 hover:underline hover:text-blue-700">
                  Shop Now
                </span>
              </div>
            </button>

            <button
              onClick={() => (window.location.href = "/Grocery")}
              className="bg-white border rounded-lg shadow-md p-4 transition-transform transform hover:scale-105 hover:shadow-lg hover:border-blue-300 text-left w-full"
              style={{ appearance: "none" }}
            >
              <div className="w-full h-full">
                <img
                  src="https://5.imimg.com/data5/MG/FQ/SA/SELLER-283756/all-fmcg-grocery-products.jpg"
                  alt="Product"
                  className="w-full h-40 object-cover mb-4 rounded transition-transform transform hover:scale-110"
                />
                <h3 className="text-xl font-semibold mb-2 hover:text-blue-600">
                  Grocery
                </h3>
                <p className="text-gray-600 mb-2">Upto 40% Discount</p>
                <span className="text-blue-500 hover:underline hover:text-blue-700">
                  Shop Now
                </span>
              </div>
            </button>
          </div>
        </div>

       
        <div className="bg-white py-16">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8">
              What Our Customers Say
            </h2>
            <div className="flex flex-wrap justify-center">
          
              <div className="bg-gray-100 border rounded-lg shadow-md p-6 mx-4 mb-4 max-w-xs">
                <p className="text-gray-700 mb-4">
                  "This is the best store I've ever shopped at. Amazing quality
                  and great customer service!"
                </p>
                <p className="font-semibold">Jane Doe</p>
                <p className="text-gray-600">Verified Buyer</p>
              </div>

              <div className="bg-gray-100 border rounded-lg shadow-md p-6 mx-4 mb-4 max-w-xs">
                <p className="text-gray-700 mb-4">
                  "The product quality exceeded my expectations. Fast shipping
                  and excellent support. Will definitely buy again!"
                </p>
                <p className="font-semibold">John Smith</p>
                <p className="text-gray-600">Verified Buyer</p>
              </div>

              <div className="bg-gray-100 border rounded-lg shadow-md p-6 mx-4 mb-4 max-w-xs">
                <p className="text-gray-700 mb-4">
                  "I had a fantastic shopping experience. The website was easy
                  to navigate, and the customer service was top-notch. Highly
                  recommended!"
                </p>
                <p className="font-semibold">Emily Johnson</p>
                <p className="text-gray-600">Verified Buyer</p>
              </div>

             
            </div>
          </div>
        </div>

 
        <div className="bg-yellow-400 text-gray-800 text-center py-12">
          <div className="container mx-auto">
            <h2 className="text-2xl font-bold mb-4">Limited Time Offer!</h2>
            <p className="text-lg mb-4">
              Get 20% off on all products using code{" "}
              <span className="font-bold">SUMMER20</span>
            </p>
          </div>
        </div>

        {/* Footer */}
        <footer className="bg-gray-800 text-white py-4">
          <div className="container mx-auto text-center">
            <p>&copy; 2024 E-Commerce Site. All rights reserved.</p>
            <p>
              <a href="/privacy" className="hover:underline">
                Privacy Policy
              </a>{" "}
              |
              <a href="/terms" className="hover:underline">
                Terms of Service
              </a>
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Home;
