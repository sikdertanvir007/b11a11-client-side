import { useEffect, useState } from "react";
import { Link } from "react-router";


const Categories = () => {
  const [categories, setCategories] = useState([]);

  // Soft, pleasant color classes
  const bgColors = [
    "bg-pink-400",
    "bg-emerald-400",
    "bg-indigo-400",
    "bg-orange-400",
    "bg-sky-400",
    "bg-lime-400",
    "bg-violet-400",
    "bg-yellow-400"
  ];

  useEffect(() => {
    fetch("http://localhost:3000/categories")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);

  return (

    <div>
    <h1 className="text-3xl font-bold text-center my-8  text-red-600 italic"> All Categories</h1>
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
      {categories.map((cat, index) => {
        const bgColor = bgColors[index % bgColors.length];
        return (
          <Link
            key={cat}
            to={`/category/${encodeURIComponent(cat)}`}
            className={`border p-4 rounded shadow hover:shadow-lg transition ${bgColor}`}
          >
            <h2 className="text-xl font-bold text-center text-gray-700">
              {cat}
            </h2>
          </Link>
        );
      })}
    </div>
    </div>
  );
};

export default Categories;
