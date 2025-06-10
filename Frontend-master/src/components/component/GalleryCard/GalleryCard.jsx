import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import "./GalleryCard.css";

const GalleryCard = () => {
 const images = [
  {
    src: "/product_2.png",
    title: "New Summer Collection",
    description: "Explore the latest trends in summer fashion",
    buttonText: "Shop Now",
    buttonAction: () => (window.location.href = "/collection/summer"),
  },
  {
    src: "/product_3.png",
    title: "Exclusive Deals",
    description: "Up to 50% off on selected styles for a limited time",
    buttonText: "Grab Offers",
    buttonAction: () => (window.location.href = "/offers"),
  },
  {
    src: "/product_2.png",
    title: "About Our Store",
    description: "Get to know our story and passion for fashion",
    buttonText: "Learn More",
    buttonAction: () => (window.location.href = "/about"),
  },
  {
    src: "/product_2.png",
    title: "Join Our Style Club",
    description: "Become a member and enjoy exclusive benefits",
    buttonText: "Join Now",
    buttonAction: () => (window.location.href = "/style-club"),
  },
];


  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="bg-gradient-to-b from-gray-50 to-white py-12 sm:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left Side: Image */}
            <motion.div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-xl">
              <AnimatePresence mode="wait">
                <motion.img
                  key={currentIndex}
                  src={images[currentIndex].src}
                  alt={images[currentIndex].title}
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -100 }}
                  transition={{ duration: 0.3 }}
                  className="w-full h-full object-cover"
                />
              </AnimatePresence>

              {/* Navigation Buttons */}
              <div className="absolute inset-0 flex items-center justify-between p-4">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={prevImage}
                  className="w-10 h-10 sm:w-12 sm:h-12 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center text-gray-800 hover:bg-white transition-colors shadow-lg"
                >
                  <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={nextImage}
                  className="w-10 h-10 sm:w-12 sm:h-12 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center text-gray-800 hover:bg-white transition-colors shadow-lg"
                >
                  <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
                </motion.button>
              </div>

              {/* Image Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-50" />
            </motion.div>

            {/* Right Side: Content */}
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="space-y-6 text-center md:text-left"
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 leading-tight">
                {images[currentIndex].title}
              </h2>
              <p className="text-base sm:text-lg text-gray-600 max-w-xl">
                {images[currentIndex].description}
              </p>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={images[currentIndex].buttonAction}
                className="px-6 sm:px-8 py-3 sm:py-4 bg-pink-600 text-white rounded-xl font-semibold hover:bg-pink-700 transition-colors w-full md:w-auto"
              >
                {images[currentIndex].buttonText}
              </motion.button>

              {/* Dots Navigation */}
              <div className="flex gap-2 justify-center md:justify-start pt-6">
                {images.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-2.5 h-2.5 rounded-full transition-colors ${
                      index === currentIndex
                        ? "bg-pink-600 w-6"
                        : "bg-pink-300 hover:bg-pink-700"
                    }`}
                  />
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GalleryCard;
