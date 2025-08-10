import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { Link } from "react-router";
import Loading from "./Loading";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Helmet } from "react-helmet-async";

const MyProducts = () => {
  const { user } = useContext(AuthContext);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      if (!user?.email) return;

      try {
        // Get Firebase token
        const token = await user.getIdToken();
        console.log("User token:", token);

        const res = await fetch(
          `https://b11a11-server-side-self.vercel.app/products/user/${user.email}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        const data = await res.json();
        setProducts(data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [user]);

  if (loading) return <Loading />;

  return (
    <div>
      <Helmet><title> My Products | MegaMerx</title></Helmet>
      <Navbar />

      <div className="max-w-6xl mx-auto p-6 py-30">
        <h2 className="text-3xl font-bold mb-8 text-red-600 italic">
          My Products
        </h2>

        {products?.length === 0 ? (
          <div className="text-center text-gray-600">
            <p className="text-xl mb-4">No product added yet.</p>
            <Link
              to="/add-product"
              className="inline-block bg-red-600 text-white px-6 py-2 rounded hover:bg-red-700 transition"
            >
              Add Product Now
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {products.map((prod) => (
              <div
                key={prod._id}
                className="border p-4 rounded shadow hover:shadow-lg transition"
              >
                <div className="flex justify-center items-center mb-4">
                  <img
                    src={prod.image}
                    alt={prod.name}
                    className="w-50 h-40 object-cover rounded mb-4"
                  />
                </div>
                <h3 className="text-xl font-bold mb-2">{prod.name}</h3>
                <p className="text-gray-600 mb-1">Brand: {prod.brand}</p>
                <p className="text-gray-600 mb-1">Category: {prod.category}</p>
                <p className="text-gray-600 mb-1">
                  Min Quantity: {prod.minQuantity}
                </p>
                <p className="text-gray-600 mb-1">{prod.description}</p>
                <p className="text-red-600 font-bold mb-1">
                  Price: ${prod.price?.toFixed(2)}
                </p>
                <p className="text-yellow-500 font-bold">
                  Rating: {prod.rating}/5
                </p>
              </div>
            ))}
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
};

export default MyProducts;
