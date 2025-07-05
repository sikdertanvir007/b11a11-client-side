import { useEffect, useState } from "react";
import { Link } from "react-router";


const AllProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-8">All Products</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((product) => (
          <div
            key={product._id}
            className="border p-4 rounded shadow hover:shadow-lg transition"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-48 object-cover rounded"
            />
            <h2 className="text-xl font-bold mt-2">{product.name}</h2>
            <p className="text-gray-600">Brand: {product.brand}</p>
            <p className="text-gray-600">Category: {product.category}</p>
            <p className="text-gray-600">Rating: {product.rating}</p>
            <p className="text-gray-600">
              Quantity: {product.mainQuantity}
            </p>

            <Link
              to={`/update-product/${product._id}`}
              className="mt-4 inline-block bg-orange-500 text-white px-4 py-2 rounded"
            >
              Update
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllProducts;
