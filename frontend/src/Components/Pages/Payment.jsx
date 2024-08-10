import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Navbar from "../Navbar/Navbar";

const Payment = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [paymentMethod, setPaymentMethod] = useState("cod");
  const [bankName, setBankName] = useState("");
  const [accountNo, setAccountNo] = useState("");
  const [password, setPassword] = useState("");
  const [upiId, setUpiId] = useState("");
  const [error, setError] = useState("");


  const handlePayment = () => {
    if (paymentMethod === "netbanking") {
      if (!bankName || !accountNo || !password) {
        setError("Please fill in all the Netbanking details.");
        return;
      }
    } else if (paymentMethod === "upi") {
      if (!upiId) {
        setError("Please enter your UPI ID.");
        return;
      }
    }

    setError(""); 

    let paymentDetails = `Payment of $${location.state.total} successful using ${paymentMethod}.`;
    if (paymentMethod === "netbanking") {
      paymentDetails += `\nBank Name: ${bankName}\nAccount No: ${accountNo}`;
    } else if (paymentMethod === "upi") {
      paymentDetails += `\nUPI ID: ${upiId}`;
    }
    alert(paymentDetails);

    setTimeout(() => {
      navigate("/home");
    }, 1000);
  };

  return (
    <div className="bg-gray-50 min-h-screen flex flex-col">
      <Navbar />
      <div className="container mx-auto py-12 px-4">
        <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
          <div className="p-8">
            <h1 className="text-4xl font-semibold text-gray-800 text-center mb-8">Checkout</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              
              <div className="space-y-6">
                <div>
                  <h2 className="text-xl font-semibold text-gray-700 mb-2">Billing Details</h2>
                  <div className="bg-gray-100 p-4 rounded-lg">
                    <div className="mb-4">
                      <label className="block text-gray-700 text-sm font-medium mb-2">
                        Name
                      </label>
                      <input
                        type="text"
                        className="w-full px-4 py-3 text-gray-700 bg-white border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder=""
                      />
                    </div>
                    <div className="mb-4">
                      <label className="block text-gray-700 text-sm font-medium mb-2">
                         Address
                      </label>
                      <input
                        type="text"
                        className="w-full px-4 py-3 text-gray-700 bg-white border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder=""
                      />
                    </div>
                    <div className="mb-4">
                      <label className="block text-gray-700 text-sm font-medium mb-2">
                        Country
                      </label>
                      <select className="w-full px-4 py-3 text-gray-700 bg-white border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
                        <option>India</option>
                        <option>United States of America</option>
                        <option>Canada</option>
                        <option>United Kingdom</option>
                      </select>
                    </div>
                    <div className="flex gap-4">
                      <div className="w-1/2">
                        <label className="block text-gray-700 text-sm font-medium mb-2">
                          State
                        </label>
                        <input
                          type="text"
                          className="w-full px-4 py-3 text-gray-700 bg-white border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                          placeholder=""
                        />
                      </div>
                      <div className="w-1/2">
                        <label className="block text-gray-700 text-sm font-medium mb-2">
                          Postal Code
                        </label>
                        <input
                          type="text"
                          className="w-full px-4 py-3 text-gray-700 bg-white border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                          placeholder=""
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            
              <div className="space-y-6">
                <div>
                  <h2 className="text-xl font-semibold text-gray-700 mb-2">Payment Method</h2>
                  <div className="bg-gray-100 p-4 rounded-lg">
                    <div className="flex items-center mb-3">
                      <input
                        type="radio"
                        id="cod"
                        name="paymentMethod"
                        value="cod"
                        checked={paymentMethod === "cod"}
                        onChange={(e) => setPaymentMethod(e.target.value)}
                        className="mr-2 text-blue-500 focus:ring-blue-500"
                      />
                      <label htmlFor="cod" className="text-gray-700">
                        Cash on Delivery (COD)
                      </label>
                    </div>
                    <div className="flex items-center mb-3">
                      <input
                        type="radio"
                        id="netbanking"
                        name="paymentMethod"
                        value="netbanking"
                        checked={paymentMethod === "netbanking"}
                        onChange={(e) => setPaymentMethod(e.target.value)}
                        className="mr-2 text-blue-500 focus:ring-blue-500"
                      />
                      <label htmlFor="netbanking" className="text-gray-700">
                        Netbanking
                      </label>
                    </div>
                    <div className="flex items-center mb-3">
                      <input
                        type="radio"
                        id="upi"
                        name="paymentMethod"
                        value="upi"
                        checked={paymentMethod === "upi"}
                        onChange={(e) => setPaymentMethod(e.target.value)}
                        className="mr-2 text-blue-500 focus:ring-blue-500"
                      />
                      <label htmlFor="upi" className="text-gray-700">
                        UPI
                      </label>
                    </div>

                 
                    {paymentMethod === "netbanking" && (
                      <div className="bg-gray-100 p-4 rounded-lg mt-4">
                        <div className="mb-4">
                          <label className="block text-gray-700 text-sm font-medium mb-2">
                            Bank Name
                          </label>
                          <input
                            type="text"
                            value={bankName}
                            onChange={(e) => setBankName(e.target.value)}
                            className="w-full px-4 py-3 text-gray-700 bg-white border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Your Bank Name"
                          />
                        </div>
                        <div className="mb-4">
                          <label className="block text-gray-700 text-sm font-medium mb-2">
                            Account No
                          </label>
                          <input
                            type="text"
                            value={accountNo}
                            onChange={(e) => setAccountNo(e.target.value)}
                            className="w-full px-4 py-3 text-gray-700 bg-white border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Your Account Number"
                          />
                        </div>
                        <div className="mb-4">
                          <label className="block text-gray-700 text-sm font-medium mb-2">
                            Password
                          </label>
                          <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full px-4 py-3 text-gray-700 bg-white border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Your Password"
                          />
                        </div>
                      </div>
                    )}

                    {paymentMethod === "upi" && (
                      <div className="bg-gray-100 p-4 rounded-lg mt-4">
                        <div className="mb-4">
                          <label className="block text-gray-700 text-sm font-medium mb-2">
                            UPI ID
                          </label>
                          <input
                            type="text"
                            value={upiId}
                            onChange={(e) => setUpiId(e.target.value)}
                            className="w-full px-4 py-3 text-gray-700 bg-white border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Your UPI ID"
                          />
                        </div>
                      </div>
                    )}
                  </div>
                </div>

     
                {error && (
                  <div className="bg-red-100 p-4 rounded-lg mt-4">
                    <p className="text-red-700">{error}</p>
                  </div>
                )}

                <div>
                  <h2 className="text-xl font-semibold text-gray-700 mb-2">Order Summary</h2>
                  <div className="bg-gray-100 p-4 rounded-lg">
                    <div className="flex justify-between items-center text-lg font-medium text-gray-800">
                      <p>Total</p>
                      <p className="text-2xl">${location.state.total}</p>
                    </div>
                  </div>
                </div>

                <div>
                  <button
                    onClick={handlePayment}
                    className="w-full bg-blue-600 text-white py-4 rounded-lg shadow-md hover:bg-blue-700 transition duration-300 ease-in-out"
                  >
                    Place Order
                  </button>
                  <p className="text-xs text-gray-500 mt-4 text-center">
                    By clicking the button, you agree to the{" "}
                    <a href="#" className="text-blue-500 hover:underline">
                      Terms and Conditions
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;





