import { useEffect, useState } from "react";
import { Link } from "react-router";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Helmet } from "react-helmet-async";
import { FaChevronDown } from "react-icons/fa";

const AllProducts = () => {
  const [products, setProducts] = useState([]);
  const [showAvailableOnly, setShowAvailableOnly] = useState(false);

  useEffect(() => {
    fetch("http://localhost:3000/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  const filteredProducts = showAvailableOnly
    ? products.filter(
        (p) => parseInt(p.minQuantity?.$numberInt || p.minQuantity) > 100
      )
    : products;

  return (
    <div>
      <Helmet>
        <title>All Products | MegaMerx</title>
      </Helmet>

      <Navbar />

      <div className="max-w-6xl mx-auto px-4 py-30">
        <h1 className="text-3xl font-bold mb-8 text-red-600">
          All Products
        </h1>

        {/* Filter Button */}
        <div className="mb-6 flex justify-end">
          <button
            onClick={() => setShowAvailableOnly(!showAvailableOnly)}
            className="bg-red-600 font-bold text-white px-4 py-2 rounded-xl hover:bg-red-700 flex items-center gap-3"
          >
            {showAvailableOnly
              ? "Show All Products"
              : "Show Available Products"}
              <FaChevronDown />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
            <div
              key={product._id}
              className="border p-4 rounded shadow hover:shadow-lg transition"
            >
              <div className="flex justify-center items-center mb-4">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-50 h-48 object-cover rounded"
                />
              </div>
              <h2 className="text-xl font-bold mt-2">{product.name}</h2>
              <p className="text-gray-600">Brand: {product.brand}</p>
              <p className="text-gray-600">Category: {product.category}</p>
              <p className="text-gray-600">Rating: {product.rating}</p>
              <p className="text-gray-600">
                Quantity: {product.mainQuantity}
              </p>
              <p className="text-gray-600">
                Min Quantity:{" "}
                {parseInt(
                  product.minQuantity?.$numberInt || product.minQuantity
                )}
              </p>

              <Link
                to={`/update-product/${product._id}`}
                className="mt-4 inline-block bg-red-600 text-white px-4 py-2 rounded-xl"
              >
                Update
              </Link>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default AllProducts;
