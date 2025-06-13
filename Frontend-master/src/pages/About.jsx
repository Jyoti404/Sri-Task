import React from "react";
import { motion } from "framer-motion";
import { FaRocket, FaEye, FaStar, FaLinkedin, FaGithub } from "react-icons/fa";
import { BiSolidQuoteLeft } from "react-icons/bi";

const About = () => {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  };

  return (
    <motion.div
      initial="initial"
      animate="animate"
      className="min-h-screen bg-gradient-to-b from-gray-50 to-white"
    >
      {/* Hero Section */}
      <motion.div
        variants={fadeIn}
        className="container mx-auto px-4 py-24 md:py-32"
      >
        <div className="flex flex-col md:flex-row items-center justify-between gap-16 max-w-6xl mx-auto">
          <div className="flex-1 space-y-8 text-center md:text-left">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
              Redefining
              <span className="text-pink-600"> Everyday Fashion</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed max-w-2xl">
              Welcome to <strong>STYHERE</strong> — your go-to destination for modern, stylish, and inclusive fashion. Where confidence meets comfort.
            </p>
          </div>

          <div className="relative group w-full md:w-1/2">
            <div className="absolute -inset-1 bg-gradient-to-r from-pink-600 to-pink-400 rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-1000"></div>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="/fashion-banner.png"
                alt="Fashion Banner"
                className="w-full h-[400px] object-cover transform transition duration-500 group-hover:scale-105"
              />
            </div>
          </div>
        </div>
      </motion.div>

      {/* Founder Section */}
      <motion.div variants={fadeIn} className="bg-white py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-16">
            <div className="relative group w-full md:w-1/3">
              <div className="absolute -inset-1 bg-gradient-to-r from-pink-600 to-pink-400 rounded-full blur opacity-25 group-hover:opacity-75 transition duration-1000"></div>
              <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white shadow-2xl mx-auto">
                <img
                  src="./founder.jpg"
                  alt="Founder"
                  className="w-full h-full object-cover transform transition duration-500 group-hover:scale-110"
                />
              </div>
            </div>

            <div className="flex-1 space-y-6 text-center md:text-left">
              <BiSolidQuoteLeft className="text-6xl text-pink-600" />
              <h2 className="text-4xl font-bold text-gray-900">
                Meet Our Founder
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                I'm XYZ, the creative mind behind STYHERE. Fashion, for me, is about telling your story — confidently, colorfully, and comfortably.
              </p>
              <div className="flex gap-4 justify-center md:justify-start">
                <a
                  href="#"
                  className="text-pink-600 hover:text-pink-700 transition-colors"
                >
                  <FaLinkedin className="text-3xl" />
                </a>
                <a
                  href="#"
                  className="text-gray-700 hover:text-gray-900 transition-colors"
                >
                  <FaGithub className="text-3xl" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Values Section */}
      <motion.div variants={fadeIn} className="bg-gray-50 py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">
            Our Core Beliefs
          </h2>
          <div className="grid md:grid-cols-3 gap-12 max-w-6xl mx-auto">
            {[
              {
                icon: <FaRocket className="text-5xl text-pink-600" />,
                title: "Mission",
                description:
                  "To empower individuality by providing affordable fashion that feels good and looks even better.",
              },
              {
                icon: <FaEye className="text-5xl text-pink-600" />,
                title: "Vision",
                description:
                  "To be the leading fashion brand known for style, sustainability, and inclusivity.",
              },
              {
                icon: <FaStar className="text-5xl text-pink-600" />,
                title: "Values",
                description:
                  "Bold creativity, everyday elegance, and a deep respect for diverse identities and bodies.",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -10 }}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                <div className="flex flex-col items-center text-center space-y-4">
                  {item.icon}
                  <h3 className="text-2xl font-bold text-gray-900">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Stats Section */}
      <motion.div variants={fadeIn} className="bg-white py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-12">
            {[
              {
                number: "10K+",
                label: "Products Sold",
                description:
                  "Delivering top-tier fashion items to thousands of happy customers.",
              },
              {
                number: "25+",
                label: "Countries Shipped",
                description: "Our style knows no borders — worldwide delivery.",
              },
              {
                number: "100K+",
                label: "Happy Customers",
                description: "Join our growing tribe of style-savvy shoppers.",
              },
            ].map((stat, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="bg-gray-50 rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="text-5xl font-bold text-pink-600 mb-4">
                  {stat.number}
                </div>
                <div className="text-2xl font-semibold text-gray-900 mb-4">
                  {stat.label}
                </div>
                <p className="text-gray-600">{stat.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Call to Action */}
      <motion.div variants={fadeIn} className="py-24 border border-pink-300">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center text-gray-900 space-y-8">
            <h2 className="text-4xl font-bold">Style Starts Here</h2>
            <p className="text-xl opacity-90">
              Be bold. Be you. Discover fashion that speaks your language.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-pink-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-pink-700 transition-colors"
            >
              Shop Now
            </motion.button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default About;
