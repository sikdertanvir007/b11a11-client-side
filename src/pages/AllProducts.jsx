import { useEffect, useState, useMemo } from "react";
import { Link } from "react-router";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Helmet } from "react-helmet-async";
import { FaChevronDown } from "react-icons/fa";

const AllProducts = () => {
  const [products, setProducts] = useState([]);
  const [showAvailableOnly, setShowAvailableOnly] = useState(false);
  const [viewMode, setViewMode] = useState("card");
  const [sortOrder, setSortOrder] = useState("none"); // new state for sorting

  useEffect(() => {
    fetch("https://b11a11-server-side-self.vercel.app/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  // Filter products by availability condition
  const filteredProducts = showAvailableOnly
    ? products.filter(
        (p) => parseInt(p.minQuantity?.$numberInt || p.minQuantity) > 100
      )
    : products;

  // Sort products by price based on sortOrder state
  const sortedProducts = useMemo(() => {
    if (sortOrder === "none") return filteredProducts;

    return [...filteredProducts].sort((a, b) => {
      const priceA = parseFloat(a.price) || 0;
      const priceB = parseFloat(b.price) || 0;

      if (sortOrder === "asc") return priceA - priceB;
      if (sortOrder === "desc") return priceB - priceA;

      return 0;
    });
  }, [filteredProducts, sortOrder]);

  return (
    <div>
      <Helmet>
        <title>All Products | MegaMerx</title>
      </Helmet>

      <Navbar />

      <div className="max-w-6xl mx-auto px-4 py-30">
        <h1 className="text-3xl text-center underline font-bold mb-8 text-red-600 italic">
          All Products
        </h1>

        {/* Filter, Sort & View Mode Controls */}
        <div className="mb-6 flex flex-wrap justify-between items-center gap-4">
          <button
            onClick={() => setShowAvailableOnly(!showAvailableOnly)}
            className="bg-red-500 font-semibold text-white px-4 py-2 rounded-xl hover:bg-red-700 flex items-center gap-3"
          >
            {showAvailableOnly
              ? "Show All Products"
              : "Show Available Products"}
            <FaChevronDown />
          </button>

          <select
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value)}
            className="border border-gray-200 rounded-xl bg-red-500 text-white font-semibold px-3 py-2"
          >
            <option value="none">Sort By Price</option>
            <option value="asc">Price: Low to High</option>
            <option value="desc">Price: High to Low</option>
          </select>

          <select
            value={viewMode}
            onChange={(e) => setViewMode(e.target.value)}
            className="border border-gray-200 rounded-xl bg-red-500 text-white font-semibold px-3 py-2"
          >
            <option value="card">Card View</option>
            <option value="table">Table View</option>
          </select>
        </div>

        {viewMode === "card" ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sortedProducts.map((product) => (
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
                <p className="text-theme-gray-600">Brand: {product.brand}</p>
                <p className="text-theme-gray-600">Category: {product.category}</p>
                <p className="text-theme-gray-600">Rating: {product.rating}</p>
                <p className="text-theme-gray-600">
                  Quantity: {product.mainQuantity}
                </p>
                <p className="text-theme-gray-600">
                  Min Quantity:{" "}
                  {parseInt(product.minQuantity?.$numberInt || product.minQuantity)}
                </p>
                <p className="text-theme-gray-600">
                  Price: ${product.price}
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
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-red-600 text-white">
                  <th className="px-4 py-2 border">Image</th>
                  <th className="px-4 py-2 border">Name</th>
                  <th className="px-4 py-2 border">Brand</th>
                  <th className="px-4 py-2 border">Category</th>
                  <th className="px-4 py-2 border">Rating</th>
                  <th className="px-4 py-2 border">Quantity</th>
                  <th className="px-4 py-2 border">Min Quantity</th>
                  <th className="px-4 py-2 border">Price</th>
                  <th className="px-4 py-2 border">Action</th>
                </tr>
              </thead>
              <tbody>
                {sortedProducts.map((product) => (
                  <tr key={product._id} className="hover:bg-gray-50">
                    <td className="border px-4 py-2">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-20 h-16 object-cover rounded"
                      />
                    </td>
                    <td className="border px-4 py-2">{product.name}</td>
                    <td className="border px-4 py-2">{product.brand}</td>
                    <td className="border px-4 py-2">{product.category}</td>
                    <td className="border px-4 py-2">{product.rating}</td>
                    <td className="border px-4 py-2">{product.mainQuantity}</td>
                    <td className="border px-4 py-2">
                      {parseInt(product.minQuantity?.$numberInt || product.minQuantity)}
                    </td>
                    <td className="border px-4 py-2">${product.price}</td>
                    <td className="border px-4 py-2">
                      <Link
                        to={`/update-product/${product._id}`}
                        className="inline-block bg-red-600 text-white px-3 py-1 rounded"
                      >
                        Update
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
};

export default AllProducts;
