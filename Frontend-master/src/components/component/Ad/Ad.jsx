import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Clock, Check } from "lucide-react";
import axios from "axios";
import { API_URL } from "../../../api";
import toast from "react-hot-toast";



const ProductAdCard = () => {
  const [product, setProduct] = useState(null); // State for product data

  const getProduct = async () => {
    try {
      const { data } = await axios.get(`${API_URL}/api/ad/get-ads`);
      if (data?.success) {
        setProduct(data.ads[0]);  // Assuming you want the first ad
      }
    } catch (error) {
      console.error(error);
      toast.error("Failed to load product");
    }
  };

  useEffect(() => {
    getProduct();
  }, []);

  if (!product) {
    return (
     <div className="min-h-[400px] flex items-center justify-center">
      <div className="text-gray-500 align-items-center justfy center">
        <img src="/banner_women.png "alt="Banner" />
      </div>
    </div>
    );
  }

  return (
    <div className="bg-gradient-to-b from-gray-50 to-white py-12 sm:py-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-6xl mx-auto bg-white rounded-3xl shadow-xl overflow-hidden"
        >
          <div className="grid md:grid-cols-2 gap-8 p-6 sm:p-8 lg:p-12">
            {/* Content Section */}
            <div className="space-y-6 order-2 md:order-1">
              <div className="inline-flex items-center px-4 py-2 bg-blue-50 text-blue-600 rounded-full text-sm font-medium">
                <Clock className="w-4 h-4 mr-2" />
                Limited Time Offer
              </div>

              <div className="space-y-3">
                <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 leading-tight">
                {product.title}
                </h2>
                <p className="text-2xl sm:text-3xl font-bold text-blue-600">
                ₹{product.price}
                </p>
              </div>

              <p className="text-base sm:text-lg text-gray-600">
                {product.description}
              </p>

              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-900">
                  Key Features
                </h3>
                <div className="grid sm:grid-cols-2 gap-3">
                {Array.isArray(product.features) && product.features.map((feature, index) => (
                    <div
                      key={index}
                      className="flex items-center text-yellow-700 bg-yellow-100 p-3 rounded-lg"
                    >
                      <Check className="w-5 h-5 text-yellow-600 mr-3 flex-shrink-0" />
                      <span className="text-sm sm:text-base">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 pt-6">
                <motion.a
                  href="/learn-more"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="px-6 sm:px-8 py-3 sm:py-4 border border-gray-300 text-gray-700 rounded-xl font-semibold hover:bg-gray-50 transition-colors text-center"
                >
                  Learn More
                </motion.a>
                <motion.a
                  href="/order-now"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="px-6 sm:px-8 py-3 sm:py-4 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center gap-2"
                >
                  Order Now
                  <ArrowRight className="w-5 h-5" />
                </motion.a>
              </div>
            </div>

            {/* Image Section */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="relative order-1 md:order-2"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-3xl blur-3xl"></div>
              <motion.div className="relative aspect-square sm:aspect-[4/3] md:aspect-square lg:aspect-[4/3] w-full max-w-lg mx-auto">
                <motion.img
                  src={product.imageUrl}
                  alt={product.name}
                  className="w-full h-full object-contain"
                  whileHover={{ scale: 1.05, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                />
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ProductAdCard;
