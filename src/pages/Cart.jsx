
import { Link, useLoaderData, useParams } from "react-router";
import Swal from "sweetalert2";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Helmet } from "react-helmet-async";

const Cart = () => {
  const cartItems = useLoaderData();
  const { email } = useParams();

  const handleRemove = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "This will remove the item from your cart.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, remove it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://b11a11-server-side-self.vercel.app/cart/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then(() => {
            Swal.fire("Removed!", "Item removed from cart.", "success");
            window.location.reload(); // reloads the loader
          })
          .catch(() => {
            Swal.fire("Error!", "Something went wrong.", "error");
          });
      }
    });
  };

  if (!cartItems || cartItems.length === 0) {
    return (
      <div>
        <Helmet> <title>My Cart | MegaMerx</title></Helmet>
        <div><Navbar></Navbar></div>
      <div className="max-w-xl  text-center mx-auto my-50 ">
        <p className="text-xl mb-4 text-theme-gray-600">Your cart is empty!</p>
        <Link
          to="/"
          className="bg-red-600 text-white px-6 py-2 rounded-xl hover:bg-red-700"
        >
          Go Back to Home
        </Link>
      </div>
      <Footer></Footer>
      </div>
    );
  }

  return (
    <div>
        <div><Navbar></Navbar> </div>
    <div className="max-w-6xl mx-auto p-6">
      <h2 className="text-3xl font-bold mb-8">My Cart</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {cartItems.map((item) => (
          <div
            key={item._id}
            className="border p-4 rounded shadow hover:shadow-lg transition"
          >
            <div className="flex justify-center items-center mb-4">
            <img
              src={item.productSnapshot?.image}
              alt={item.productSnapshot?.name}
              className="w-50 h-40 object-cover rounded mb-4"
            />
            </div>
            <h3 className="text-xl font-bold mb-2">
              {item.productSnapshot?.name}
            </h3>
            <p className="text-gray-600 mb-1">
              Brand: {item.productSnapshot?.brand}
            </p>
            <p className="text-gray-600 mb-1">
              Category: {item.productSnapshot?.category}
            </p>
            <p className="text-gray-600 mb-1">
              Description: {item.productSnapshot?.description}
            </p>
            <p className="text-gray-600 mb-1">
              Quantity Bought: {item.quantity}
            </p>
            <p className="text-gray-600 mb-1">
              Minimum Buying Quantity: {item.productSnapshot?.minQuantity}
            </p>
            <p className="text-gray-500 text-sm mb-2">
              Bought On: {new Date(item.buyDate).toLocaleDateString()}
            </p>
            <button
              onClick={() => handleRemove(item._id)}
              className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
            >
              Remove from Cart
            </button>
          </div>
        ))}
      </div>
    </div>
    <Footer></Footer>
    </div>
  );
};

export default Cart;
