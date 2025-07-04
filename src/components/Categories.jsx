import { useEffect, useState } from "react";
import { Link } from "react-router";


const Categories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/categories")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
      {categories.map((cat) => (
        <Link
          key={cat}
          to={`/category/${encodeURIComponent(cat)}`}
          className="border p-4 rounded shadow hover:shadow-lg transition"
        >
          <h2 className="text-xl font-bold text-center">{cat}</h2>
        </Link>
      ))}
    </div>
  );
};

export default Categories;
