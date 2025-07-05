const FeaturedBrands = ({ products }) => {
  const uniqueBrands = [...new Set(products.map(item => item.brand))];

  return (
    <section className="mb-12">
      <h2 className="text-3xl font-bold mb-6 text-center text-orange-600">Featured Brands</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
        {uniqueBrands.map((brand, idx) => (
          <div
            key={idx}
            className="bg-white shadow p-4 rounded text-center border hover:shadow-lg transition"
          >
            <h3 className="text-lg font-semibold text-gray-800">{brand}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedBrands;
