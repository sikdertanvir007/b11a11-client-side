import { useEffect, useState } from "react";
import Rating from "react-rating";
import { FaStar } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa";
import { FaStarHalfAlt } from "react-icons/fa";


import { useParams } from "react-router";
import Navbar from "./Navbar";
import Footer from "./Footer";

const CategoryProducts = () => {
  const { categoryName } = useParams();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:3000/products/category/${encodeURIComponent(categoryName)}`)
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, [categoryName]);

  return (
    <div>
      <Navbar></Navbar>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4 pt-30">
        {products.map((product) => {
          console.log("Product rating:", product.rating, "Type:", typeof product.rating);
          return (
            <div key={product.name} className="border rounded shadow p-4 flex flex-col ">
            <div className="flex justify-center items-center mb-4">
              <img
                src={product.image}
                alt={product.name}
                className="w-50 h-48 object-cover mb-4  "
              />
              </div>
              <h3 className="text-lg font-bold">{product.name}</h3>
              <p className="text-sm text-gray-600">{product.brand}</p>
              <p className="text-sm">Min Quantity: {product.minQuantity}</p>
              <p className="text-sm mb-2">{product.description}</p>
              <p className="text-orange-500 font-bold mb-2">
                ${product.price.toFixed(2)}
              </p>
              <div className="flex justify-between">
             <Rating
  readonly
  initialRating={product.rating}
  fullSymbol={<FaStar color="#ffd700" size={24} />}
  halfSymbol={<FaStarHalfAlt color="#ffd700" size={24} />}
  emptySymbol={<FaRegStar color="#ddd" size={24} />}
/>
              <button className="mt-3 px-3 py-2 bg-red-600 text-white rounded-xl">
                Details
              </button>
              </div>
            </div>
          );
        })}
      </div>
      <Footer></Footer>
    </div>
  );
};

export default CategoryProducts;
