import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
const Books = () => {
  const [data, setData] = useState([]);

  const getData = () => {
    fetch("Data.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((response) => {
        return response.json();
      })
      .then((myjson) => {
        setData(myjson);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <Navbar />
    <div className=" mx-auto p-4">
      {data &&
        data.length > 0 &&
        data
          .filter((val) => val.category === "Books")
          .map((val) => (
            <Link to={`/product/${val.id}`} key={val.id}>
              <div className="ml-60 w-2/3 border p-6 mb-6 rounded-lg transition-transform transform hover:scale-105 hover:shadow-lg hover:border-green-500 flex bg-white">
                <div className="flex-shrink-0">
                  <img
                    src={val.imageUrl}
                    alt={val.name}
                    className="ml-4 mr-20 w-48 h-64 object-cover rounded-lg shadow-md"
                  />
                </div>
                <div className="flex-grow ml-10">
                  <h1 className="text-3xl font-extrabold mb-4 text-gray-900">
                    {val.name}
                  </h1>
                  <p className="text-2xl font-semibold mb-3 text-gray-800">
                    {val.title}
                  </p>
                  <p className="text-xl font-medium text-gray-600">
                    {val.author}
                  </p>
                  <hr className="my-4 border-gray-300" />
                  <p className="text-lg text-gray-700 mb-4">
                    {val.description}
                  </p>
                  <div className="flex items-center">
                    <span className="text-2xl text-gray-900 font-bold mr-4">
                      Price:
                    </span>
                    <span className="text-3xl text-green-600 font-extrabold">
                      ${val.price}
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
    </div>
    </div>
  );
};

export default Books;




