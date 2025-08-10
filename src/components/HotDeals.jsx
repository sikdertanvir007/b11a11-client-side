import { motion } from "framer-motion";

const HotDeals = ({ products }) => {
  const hotDeals = products
    .filter(item => parseFloat(item.rating?.$numberDouble || item.rating) >= 4.5)
    .slice(0, 6);

  return (
    <section>
      <h2 className="text-3xl font-bold mb-6 text-center italic text-red-600">
        🔥 Hot Deals
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {hotDeals.map(product => {
          const price = parseFloat(product.price?.$numberDouble || product.price);

          return (
            <motion.div
              key={product._id?.$oid || product._id}
              className="bg-white border rounded shadow p-4 space-y-2 cursor-pointer"
              initial={{ opacity: 0, scale: 0.8, y: 50 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              whileHover={{
                scale: 1.05,
                boxShadow: "0 8px 24px rgba(0,0,0,0.2)",
              }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.div
                className="flex justify-center items-center mb-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.5 }}
              >
                <motion.img
                  src={product.image}
                  alt={product.name}
                  className="h-48 w-50 object-cover rounded"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>
              <motion.h3
                className="text-xl font-bold"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                {product.name}
              </motion.h3>
              <motion.p
                className="text-gray-500"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                {product.description?.slice(0, 60)}...
              </motion.p>
              <motion.p
                className="text-orange-600 font-bold text-lg"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
              >
                ${price.toFixed(2)}
              </motion.p>
              <motion.p
                className="text-sm text-gray-600"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7 }}
              >
                Brand: {product.brand}
              </motion.p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default HotDeals;
