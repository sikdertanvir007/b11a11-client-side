import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";

import Swal from "sweetalert2";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const UpdateProduct = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    // Fetch product details
    fetch(`http://localhost:3000/products/${id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data));

    // Fetch categories for dropdown
    fetch("http://localhost:3000/categories")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, [id]);

  if (!product) {
    return <p className="text-center py-10">Loading...</p>;
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;
    const updatedProduct = {
      image: form.image.value,
      name: form.name.value,
      brand: form.brand.value,
      category: form.category.value,
      rating: parseFloat(form.rating.value),
      description: form.description.value,
      mainQuantity: parseInt(form.mainQuantity.value),
      minQuantity: parseInt(form.minQuantity.value),
    };

    fetch(`http://localhost:3000/products/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updatedProduct),
    })
      .then((res) => res.json())
      .then(() => {
        Swal.fire("Updated!", "Product has been updated.", "success");
        navigate("/all-products");
      })
      .catch((error) => {
        Swal.fire("Error", error.message, "error");
      });
  };

  return (
    <div>
        <div><Navbar></Navbar></div>
    <div className="max-w-xl mx-auto px-4 py-30">
      <h1 className="text-2xl font-bold mb-6 text-red-600">Update Product</h1>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="image"
          defaultValue={product.image}
          placeholder="Image URL"
          className="w-full border p-2 rounded"
          required
        />
        <input
          type="text"
          name="name"
          defaultValue={product.name}
          placeholder="Product Name"
          className="w-full border p-2 rounded"
          required
        />
        <input
          type="text"
          name="brand"
          defaultValue={product.brand}
          placeholder="Brand Name"
          className="w-full border p-2 rounded"
          required
        />

        <select
          name="category"
          defaultValue={product.category}
          className="w-full border p-2 rounded"
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
          name="rating"
          min={1}
          max={5}
          step={0.1}
          defaultValue={product.rating}
          placeholder="Rating"
          className="w-full border p-2 rounded"
          required
        />
        <textarea
          name="description"
          defaultValue={product.description}
          placeholder="Description"
          className="w-full border p-2 rounded"
          required
        ></textarea>
        <input
          type="number"
          name="mainQuantity"
          defaultValue={product.mainQuantity}
          placeholder="Main Quantity"
          className="w-full border p-2 rounded"
          required
        />
        <input
          type="number"
          name="minQuantity"
          defaultValue={product.minQuantity}
          placeholder="Minimum Selling Quantity"
          className="w-full border p-2 rounded"
          required
        />

        <button
          type="submit"
          className="bg-red-600 text-white px-4 py-2 rounded-xl"
        >
          Update Product
        </button>
      </form>
    </div>
    <Footer></Footer>
    </div>
  );
};

export default UpdateProduct;
