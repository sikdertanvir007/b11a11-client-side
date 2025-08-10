import { useEffect, useState } from "react";
import { Link } from "react-router";


const Categories = () => {
  const [categories, setCategories] = useState([]);

  // Soft, pleasant color classes
  
  useEffect(() => {
    fetch("https://b11a11-server-side-self.vercel.app/categories")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);

  return (

    <div>
    <h1 className="text-3xl font-bold text-center mb-16  text-red-600 italic"> All Categories</h1>
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
      {categories.map((cat, index) => {
      
        return (
          <Link
            key={cat}
            to={`/category/${encodeURIComponent(cat)}`}
            className="border p-4 rounded shadow hover:shadow-lg transition bg-red-500 "
          >
            <h2 className="text-xl font-bold text-center text-white">
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
