const HotDeals = ({ products }) => {
  const hotDeals = products
    .filter(item => parseFloat(item.rating?.$numberDouble || item.rating) >= 4.5)
    .slice(0, 6);

  return (
    <section>
      <h2 className="text-3xl font-bold mb-6 text-center italic text-red-600">🔥 Hot Deals</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {hotDeals.map(product => {
          const price = parseFloat(product.price?.$numberDouble || product.price);
          return (
            <div
              key={product._id?.$oid || product._id}
              className="bg-white border rounded shadow hover:shadow-lg p-4 space-y-2"
            >
                <div className="flex justify-center items-center mb-4">
              <img
                src={product.image}
                alt={product.name}
                className="h-48 w-50 object-cover rounded"
              />
              </div>
              <h3 className="text-xl font-bold">{product.name}</h3>
              <p className="text-gray-500">{product.description?.slice(0, 60)}...</p>
              <p className="text-orange-600 font-bold text-lg">${price.toFixed(2)}</p>
              <p className="text-sm text-gray-600">Brand: {product.brand}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default HotDeals;
