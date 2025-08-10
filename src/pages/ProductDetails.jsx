import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router";
import Swal from "sweetalert2";
import Rating from "react-rating";
import { AuthContext } from "../provider/AuthProvider";
import { FaStar, FaRegStar, FaStarHalfAlt } from "react-icons/fa";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Loading from "./Loading";
import { Helmet } from "react-helmet-async";

const ProductDetails = () => {
  const { id } = useParams();
  const { user } = useContext(AuthContext);
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    fetch(`https://b11a11-server-side-self.vercel.app/products/${id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, [id]);

  if (!product) {
    return <Loading />;
  }

  const minQuantity = parseInt(product.minQuantity?.$numberInt || product.minQuantity);
  const mainQuantity = parseInt(product.mainQuantity?.$numberInt || product.mainQuantity);
  const price = parseFloat(product.price?.$numberDouble || product.price);
  const rating = parseFloat(product.rating?.$numberDouble || product.rating);
  const objectId = product._id?.$oid || product._id;

  const handleBuy = () => {
    if (quantity < minQuantity) {
      return Swal.fire({
        icon: "error",
        title: "Minimum quantity required",
        text: `You must buy at least ${minQuantity} units.`,
      });
    }

    if (quantity > mainQuantity) {
      return Swal.fire({
        icon: "error",
        title: "Not enough stock",
        text: `Only ${mainQuantity} units available in stock.`,
      });
    }

    // Step 1: Reduce stock
    fetch(`https://b11a11-server-side-self.vercel.app/products/${objectId}/quantity`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ $inc: { mainQuantity: -quantity } }),
    })
      .then((res) => res.json())
      .then(() => {
        // Step 2: Store in cart collection
        const cartItem = {
          userEmail: user.email,
          quantity,
          buyDate: new Date(),
          productId: objectId,
          productSnapshot: {
            name: product.name,
            brand: product.brand,
            category: product.category,
            description: product.description,
            minQuantity: minQuantity,
            image: product.image,
          },
        };

        return fetch("https://b11a11-server-side-self.vercel.app/cart", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(cartItem),
        });
      })
      .then((res) => res.json())
      .then(() => {
        Swal.fire("Success!", "Product added to your cart.", "success");
        setShowModal(false);
        setQuantity(1);
        setProduct((prev) => ({
          ...prev,
          mainQuantity: mainQuantity - quantity,
        }));
      })
      .catch(() => {
        Swal.fire("Error", "Something went wrong.", "error");
      });
  };

  return (
    <div>
      <Helmet><title> Details | MegaMerx</title></Helmet>
      <Navbar />
      <div className="p-6 max-w-5xl mx-auto pt-30">
        <div className="flex flex-col md:flex-row gap-6 items-center">
          <img
            src={product.image}
            className="w-full md:w-1/2 rounded"
            alt={product.name}
          />
          <div className="flex-1 space-y-2">
            <h2 className="text-2xl font-bold">{product.name}</h2>
            <p className="text-gray-600">{product.description}</p>
            <p className="text-red-600 font-bold text-lg">${price.toFixed(2)}</p>
            <p>Brand: {product.brand}</p>
            <p>Available: {mainQuantity}</p>
            <p>Minimum Order: {minQuantity}</p>
            <div className="flex justify-between items-center">
              <Rating
                readonly
                initialRating={rating}
                fullSymbol={<FaStar color="#ffd700" size={24} />}
                halfSymbol={<FaStarHalfAlt color="#ffd700" size={24} />}
                emptySymbol={<FaRegStar color="#ddd" size={24} />}
              />
              <button
                onClick={() => setShowModal(true)}
                className="bg-red-600 text-white px-4 py-2 rounded mt-4"
              >
                Buy
              </button>
            </div>
          </div>
        </div>

        {/* Buy Modal */}
        {showModal && (
          <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
            <div className="bg-white p-6 rounded-md w-full max-w-md">
              <h3 className="text-xl font-bold mb-4">Checkout</h3>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  handleBuy();
                }}
                className="space-y-4"
              >
                <input
                  type="text"
                  value={user?.displayName || ""}
                  disabled
                  className="w-full border p-2 rounded"
                />
                <input
                  type="email"
                  value={user?.email || ""}
                  disabled
                  className="w-full border p-2 rounded"
                />
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => setQuantity((prev) => (prev > 1 ? prev - 1 : 1))}
                    className="px-3 py-1 bg-gray-200 rounded"
                  >
                    −
                  </button>
                  <input
                    type="number"
                    min={1}
                    value={quantity}
                    onChange={(e) => setQuantity(Number(e.target.value))}
                    className="w-16 text-center border p-2 rounded"
                  />
                  <button
                    type="button"
                    onClick={() => setQuantity((prev) => prev + 1)}
                    className="px-3 py-1 bg-gray-200 rounded"
                  >
                    +
                  </button>
                </div>
                <div className="flex justify-between">
                  <button
                    type="button"
                    onClick={() => setShowModal(false)}
                    className="px-4 py-2 bg-red-600 text-white rounded"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-4 py-2 bg-green-500 text-white rounded"
                  >
                    Confirm Buy
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default ProductDetails;
