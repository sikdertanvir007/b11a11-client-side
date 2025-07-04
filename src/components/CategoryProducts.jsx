
import { useEffect, useState } from "react";
import ReactStars from "react-rating-stars-component";
import { useParams } from "react-router";

const CategoryProducts = () => {
  const { categoryName } = useParams();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:3000/products/category/${encodeURIComponent(categoryName)}`)
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, [categoryName]);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
      {products.map((product) => (
        <div key={product.name} className="border rounded shadow p-4">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-48 object-cover mb-4"
          />
          <h3 className="text-lg font-bold">{product.name}</h3>
          <p className="text-sm text-gray-600">{product.brand}</p>
          <p className="text-sm">Min Quantity: {product.minQuantity}</p>
          <p className="text-sm mb-2">{product.description}</p>
          <p className="text-orange-500 font-bold mb-2">${product.price.toFixed(2)}</p>
          <ReactStars
            value={product.rating}
            edit={false}
            size={20}
            activeColor="#ffd700"
          />
          <button className="mt-3 px-3 py-2 bg-orange-500 text-white rounded">
            Details
          </button>
        </div>
      ))}
    </div>
  );
};

export default CategoryProducts;
