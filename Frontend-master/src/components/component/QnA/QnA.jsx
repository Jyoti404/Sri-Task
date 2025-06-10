import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, ChevronDown } from "lucide-react";

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "What types of fashion do you offer?",
      answer:
        "We offer a wide variety of fashion including casual wear, formal attire, ethnic wear, activewear, and accessories for both men and women.",
    },
    {
      question: "Do you have size guides available?",
      answer:
        "Yes, each product page includes a detailed size chart to help you choose the perfect fit. If you’re unsure, our support team can assist you in picking the right size.",
    },
    {
      question: "Can I return or exchange an item?",
      answer:
        "Absolutely! We offer a hassle-free return and exchange policy within 7 days of delivery, provided the item is unused and in its original packaging.",
    },
    {
      question: "How long does delivery take?",
      answer:
        "Standard delivery usually takes 3–5 business days depending on your location. Express delivery options are also available at checkout.",
    },
    {
      question: "Do you offer discounts or seasonal sales?",
      answer:
        "Yes! We frequently run seasonal sales, flash deals, and offer discounts to our newsletter subscribers and loyal customers.",
    },
  ];

  return (
    <div className="bg-gradient-to-b from-gray-50 to-white py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Left Section */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-6"
            >
              <h2 className="text-4xl font-bold text-gray-900">
                Need Help with Your Fashion Choices?
              </h2>
              <p className="text-lg text-gray-600">
                Our fashion experts are available Monday to Friday, 10am–6:30pm
                to assist you with product selection, orders, returns, and more.
              </p>
              <motion.a
                href="https://wa.me/916307193440"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center px-6 py-3 bg-pink-600 text-white rounded-xl font-semibold hover:bg-pink-700 transition-colors"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Ask Assistant
              </motion.a>
            </motion.div>

            {/* Right Section */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-4"
            >
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={false}
                  className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow"
                >
                  <button
                    onClick={() =>
                      setActiveIndex(activeIndex === index ? null : index)
                    }
                    className="w-full px-6 py-4 text-left flex items-center justify-between"
                  >
                    <span className="font-semibold text-gray-900">
                      {faq.question}
                    </span>
                    <ChevronDown
                      className={`w-5 h-5 text-gray-500 transition-transform ${
                        activeIndex === index ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  <AnimatePresence>
                    {activeIndex === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <p className="px-6 pb-4 text-gray-600">{faq.answer}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQSection;
