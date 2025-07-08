import { useContext, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";
import Swal from "sweetalert2";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Helmet } from "react-helmet-async";

const AddProduct = () => {
  const { user } = useContext(AuthContext);

  const [product, setProduct] = useState({
    image: "",
    name: "",
    brand: "",
    category: "",
    description: "",
    price: "",
    rating: "",
    mainQuantity: "",
    minQuantity: "",
  });

  const categories = [
    "Electronics & Gadgets",
    "Home & Kitchen Appliances",
    "Fashion & Apparel",
    "Industrial Machinery & Tools",
    "Health & Beauty",
    "Automotive Parts & Accessories",
    "Office Supplies & Stationery",
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newProduct = {
      ...product,
      price: parseFloat(product.price),
      rating: parseFloat(product.rating),
      mainQuantity: parseInt(product.mainQuantity),
      minQuantity: parseInt(product.minQuantity),
      addedBy: user.email,
    };

    fetch("http://localhost:3000/products", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newProduct),
    })
      .then((res) => res.json())
      .then(() => {
        Swal.fire("Added!", "Product added successfully.", "success");
        setProduct({
          image: "",
          name: "",
          brand: "",
          category: "",
          description: "",
          price: "",
          rating: "",
          mainQuantity: "",
          minQuantity: "",
        });
      })
      .catch(() => {
        Swal.fire("Error!", "Failed to add product.", "error");
      });
  };

  return (
    <div>
      <Helmet> <title>Add Products | MegaMerx</title></Helmet>
        <div><Navbar></Navbar></div>
    <div className="max-w-3xl mx-auto p-8 py-30">
      <h2 className="text-3xl font-bold mb-6 text-red-600 italic">Add New Product</h2>
      <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-4">
        <input
          type="text"
          name="image"
          placeholder="Image URL"
          value={product.image}
          onChange={handleChange}
          className="border p-2 rounded"
          required
        />
        <input
          type="text"
          name="name"
          placeholder="Product Name"
          value={product.name}
          onChange={handleChange}
          className="border p-2 rounded"
          required
        />
        <input
          type="text"
          name="brand"
          placeholder="Brand Name"
          value={product.brand}
          onChange={handleChange}
          className="border p-2 rounded"
          required
        />
        <select
          name="category"
          value={product.category}
          onChange={handleChange}
          className="border p-2 rounded"
          required
        >
          <option value="">Select Category</option>
          {categories.map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>
        <input
          type="number"
          name="mainQuantity"
          placeholder="Main Quantity"
          value={product.mainQuantity}
          onChange={handleChange}
          className="border p-2 rounded"
          required
        />
        <input
          type="number"
          name="minQuantity"
          placeholder="Minimum Selling Quantity"
          value={product.minQuantity}
          onChange={handleChange}
          className="border p-2 rounded"
          required
        />
        <input
          type="number"
          name="price"
          placeholder="Price per Unit"
          value={product.price}
          onChange={handleChange}
          className="border p-2 rounded"
          required
        />
        <input
          type="number"
          name="rating"
          placeholder="Rating (1-5)"
          value={product.rating}
          onChange={handleChange}
          className="border p-2 rounded"
          min={1}
          max={5}
          required
        />
        <textarea
          name="description"
          placeholder="Short Description"
          value={product.description}
          onChange={handleChange}
          className="border p-2 rounded"
          required
        ></textarea>

        <button
          type="submit"
          className="bg-red-600 text-white px-4 py-2 rounded"
        >
          Add Product
        </button>
      </form>

      <p className="mt-4 text-gray-600">
        Product Content: This platform allows you to add wholesale products
        with detailed information, manage stock, and ensure smooth business
        transactions.
      </p>
    </div>
    <Footer></Footer>
    </div>
  );
};

export default AddProduct;
