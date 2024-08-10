
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import { Link } from "react-router-dom";

const Checkin = () => {
  const { id } = useParams();
  const [data, setData] = useState([]);
  const [val, setVal] = useState(null);

  const getData = () => {
    fetch("/Data.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((response) => response.json())
      .then((myjson) => {
        setData(myjson);
        const selectedVal = myjson.find((val) => val.id === parseInt(id));
        setVal(selectedVal);
      });
  };

  useEffect(() => {
    getData();
  }, [id]);

  if (!val) {
    return <div>Loading...</div>;
  }

  const addToCart = () => {
    try {
      let cart = JSON.parse(localStorage.getItem("cart")) || [];
      
      if (!val || !val.id || !val.name || !val.price) {
        console.error("val is not defined correctly:", val);
        return;
      }
   
      const itemIndex = cart.findIndex((item) => item.id === val.id);
      
      if (itemIndex === -1) {
        cart.push({
          id: val.id,
          name: val.name,
          price: val.price,
          image:val.imageUrl,
          quantity: 1
        });
  
        localStorage.setItem("cart", JSON.stringify(cart));
        console.log("Item added to cart successfully:", cart);
      } else {
       
        cart[itemIndex].quantity += 1;
  
        
        localStorage.setItem("cart", JSON.stringify(cart));
        
        console.log("Cart updated with increased quantity:", cart);
      }
    } catch (error) {
      console.error("Error adding item to cart:", error);
    }
  };
  
  
  

  return (
    <div>
      <Navbar />
      <div className="mx-auto p-4">
        <div className="max-w-6xl mx-auto p-6 bg-white shadow-lg rounded-lg">
          <div className="flex flex-col md:flex-row">
            <div className="flex justify-center items-center md:w-1/3 p-4">
              <img
                src={val.imageUrl}
                alt="Main val Image"
                className="w-full max-w-sm rounded-lg shadow-md"
              />
            </div>

            <div className="md:w-1/2 p-4 md:p-6">
              <h1 className="text-3xl font-bold mb-4">{val.name}</h1>
              <div className="flex items-center space-x-2 mb-4">
                <span className="bg-green-500 text-white text-sm px-3 py-1 rounded-full">
                  4.3 ★
                </span>
                <span className="text-gray-600">
                  77,522 Ratings & 5,016 Reviews
                </span>
              </div>

              <div className="flex items-center mt-4">
                <span className="text-4xl font-bold text-gray-900">
                  ${val.price}
                </span>
              </div>
              <p className="mt-2 text-gray-700">+ ₹59 Secured Packaging Fee</p>

              <div className="mt-6">
                <h2 className="text-lg font-semibold">Available offers</h2>
                <ul className="list-disc pl-5 mt-2 space-y-2 text-gray-700">
                  <li>
                    Bank Offer: 10% off up to ₹750 on ICICI Bank Credit Card
                    Transactions.
                  </li>
                  <li>
                    Bank Offer: 10% off up to ₹1,500 on ICICI Bank Credit Card
                    EMI Transactions.
                  </li>
                  <li>
                    Special Price: Get extra ₹4000 off (inclusive of
                    cashback/coupon).
                  </li>
                </ul>
              </div>

              <div className="mt-6">
                <h2 className="text-lg font-semibold">Purchase Options</h2>
              </div>

              <div className="flex space-x-4 mt-8">
                <button
                  onClick={() => {
                    addToCart();
                    alert("Item is added to the cart")
                  }}
                  className="bg-yellow-500 hover:bg-yellow-600 text-white py-3 px-6 rounded-lg font-semibold shadow-md"
                >
                  Add to Cart
                </button>
                <Link to = "/cart">
                <button 
                onClick={() => {
                  addToCart();
                }}
                className="bg-orange-500 hover:bg-orange-600 text-white py-3 px-6 rounded-lg font-semibold shadow-md">
                  Buy Now
                </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkin;

