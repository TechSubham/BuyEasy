// import React, { useState, useEffect } from "react";
// import Navbar from "../Navbar/Navbar";

// const Cart = () => {
//   const [cart, setCart] = useState([]);

//   useEffect(() => {
//     const savedCart = JSON.parse(localStorage.getItem("cart")) || [];
//     setCart(savedCart);
//   }, []);

//   const handleRemove = (id) => {
//     const updatedCart = cart.filter((val) => val.id !== id);
//     setCart(updatedCart);
//     localStorage.setItem("cart", JSON.stringify(updatedCart));
//   };

//   const handleQuantityChange = (id, delta) => {
//     const updatedCart = cart.map((val) =>
//       val.id === id
//         ? { ...val, quantity: Math.max(val.quantity + delta, 1) }
//         : val
//     );
//     setCart(updatedCart);
//     localStorage.setItem("cart", JSON.stringify(updatedCart));
//   };

//   const calculateTotal = () => {
//     return cart
//       .reduce((total, val) => total + val.price * val.quantity, 0)
//       .toFixed(2);
//   };

//   if (cart.length === 0) {
//     return (
//       <div className="bg-gray-100 min-h-screen">
//         <Navbar />
//         <div className="container mx-auto p-8 text-center">
//           <h1 className="text-4xl font-bold text-gray-800">
//             Your Cart is Empty
//           </h1>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="bg-gray-100 min-h-screen">
//       <Navbar />
//       <div className="container mx-auto p-8">
//         <h1 className="text-3xl font-bold text-gray-800 mb-6">Shopping Cart</h1>
//         <div className="bg-white border border-gray-300 rounded-lg shadow-lg p-6">
//           {cart.map((val) => (
//             <div
//               key={val.id}
//               className="flex items-center justify-between py-4 border-b border-gray-200"
//             >
//               <div className="flex items-center space-x-4">
//                 <img
//                   src={val.image}
//                   alt={val.name}
//                   className="w-16 h-20 object-cover rounded-lg"
//                 />
//                 <div>
//                   <h2 className="text-lg font-semibold text-gray-800">
//                     {val.name}
//                   </h2>
//                   <p className="text-gray-600">{val.size}</p>
//                   <div className="flex items-center space-x-2 mt-2">
//                     ${val.price}
//                   </div>
//                 </div>
//               </div>
//               <div className="flex items-center space-x-4">
//                 <button
//                   onClick={() => handleQuantityChange(val.id, 1)}
//                   className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full hover:bg-gray-300"
//                 >
//                   +
//                 </button>
//                 <span className="text-lg font-medium">{val.quantity}</span>
//                 <button
//                   onClick={() => handleQuantityChange(val.id, -1)}
//                   className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full hover:bg-gray-300"
//                   disabled={val.quantity <= 1}
//                 >
//                   -
//                 </button>
//                 <p className="text-lg font-semibold text-gray-800">
//                   ${(val.price * val.quantity).toFixed(2)}
//                 </p>
//                 <span
//                   onClick={() => handleRemove(val.id)}
//                   className="text-red-500 hover:underline cursor-pointer"
//                 >
//                   Remove
//                 </span>
//               </div>
//             </div>
//           ))}
//           <div className="text-right mt-6">
//             <p className="text-lg font-semibold text-gray-800">
//               Sub-Total ({cart.length} items):{" "}
//               <span className="text-2xl text-gray-800">
//                 ${calculateTotal()}
//               </span>
//             </p>
//           </div>
//           <div className="mt-6">
//             <button
//               onClick={() => alert("Proceed to Checkout")}
//               className="w-1/2 ml-72 mx-auto bg-gradient-to-r from-blue-500 to-blue-700 text-white py-3 rounded-full shadow-lg hover:from-blue-600 hover:to-blue-800 transform transition-transform duration-300 ease-in-out hover:scale-105"
//             >
//               Checkout
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Cart;













import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../Navbar/Navbar";

const Cart = () => {
  const [cart, setCart] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(savedCart);
  }, []);

  const handleRemove = (id) => {
    const updatedCart = cart.filter((val) => val.id !== id);
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const handleQuantityChange = (id, delta) => {
    const updatedCart = cart.map((val) =>
      val.id === id
        ? { ...val, quantity: Math.max(val.quantity + delta, 1) }
        : val
    );
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const calculateTotal = () => {
    return cart
      .reduce((total, val) => total + val.price * val.quantity, 0)
      .toFixed(2);
  };

  const handleCheckout = () => {
    navigate("/payment", { state: { total: calculateTotal() } });
  };

  if (cart.length === 0) {
    return (
      <div className="bg-gray-100 min-h-screen">
        <Navbar />
        <div className="container mx-auto p-8 text-center">
          <h1 className="text-4xl font-bold text-gray-800">
            Your Cart is Empty
          </h1>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gray-100 min-h-screen">
      <Navbar />
      <div className="container mx-auto p-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Shopping Cart</h1>
        <div className="bg-white border border-gray-300 rounded-lg shadow-lg p-6">
          {cart.map((val) => (
            <div
              key={val.id}
              className="flex items-center justify-between py-4 border-b border-gray-200"
            >
              <div className="flex items-center space-x-4">
                <img
                  src={val.image}
                  alt={val.name}
                  className="w-16 h-20 object-cover rounded-lg"
                />
                <div>
                  <h2 className="text-lg font-semibold text-gray-800">
                    {val.name}
                  </h2>
                  <p className="text-gray-600">{val.size}</p>
                  <div className="flex items-center space-x-2 mt-2">
                    ${val.price}
                  </div>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <button
                  onClick={() => handleQuantityChange(val.id, 1)}
                  className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full hover:bg-gray-300"
                >
                  +
                </button>
                <span className="text-lg font-medium">{val.quantity}</span>
                <button
                  onClick={() => handleQuantityChange(val.id, -1)}
                  className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full hover:bg-gray-300"
                  disabled={val.quantity <= 1}
                >
                  -
                </button>
                <p className="text-lg font-semibold text-gray-800">
                  ${(val.price * val.quantity).toFixed(2)}
                </p>
                <span
                  onClick={() => handleRemove(val.id)}
                  className="text-red-500 hover:underline cursor-pointer"
                >
                  Remove
                </span>
              </div>
            </div>
          ))}
          <div className="text-right mt-6">
            <p className="text-lg font-semibold text-gray-800">
              Sub-Total ({cart.length} items):{" "}
              <span className="text-2xl text-gray-800">
                ${calculateTotal()}
              </span>
            </p>
          </div>
          <div className="mt-6">
            <button
              onClick={handleCheckout}
              className="w-1/2 ml-72 mx-auto bg-gradient-to-r from-blue-500 to-blue-700 text-white py-3 rounded-full shadow-lg hover:from-blue-600 hover:to-blue-800 transform transition-transform duration-300 ease-in-out hover:scale-105"
            >
              Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;

