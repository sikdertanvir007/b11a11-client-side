import { motion } from "framer-motion";

const FeaturedBrands = ({ products }) => {
  const uniqueBrands = [...new Set(products.map(item => item.brand))];

  return (
    <motion.section
      className="mb-12"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      <h2 className="text-3xl font-bold mb-16 text-center text-orange-600 italic">
        Featured Brands
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
        {uniqueBrands.map((brand, idx) => (
          <motion.div
            key={idx}
            className="bg-white shadow p-4 rounded text-center border hover:shadow-lg transition"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              delay: idx * 0.1,
              duration: 0.4,
              ease: "easeOut"
            }}
            whileHover={{ scale: 1.1 }}
          >
            <h3 className="text-lg font-semibold text-gray-800">
              {brand}
            </h3>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default FeaturedBrands;
