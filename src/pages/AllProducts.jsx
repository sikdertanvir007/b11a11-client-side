import { useEffect, useState } from "react";
import { Link } from "react-router";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";


const AllProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div>
        <div><Navbar></Navbar></div>
    <div className="max-w-6xl mx-auto px-4 py-30">
      <h1 className="text-3xl font-bold mb-8 text-red-600 ">All Products</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((product) => (
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
    <Footer></Footer>
    </div>
  );
};

export default AllProducts;
