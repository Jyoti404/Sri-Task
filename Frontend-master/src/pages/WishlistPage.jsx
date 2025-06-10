import { motion } from "framer-motion";
import Layout from "../components/Layout/Layout";
import { useWishlist } from "../Context/wishlist";
import { useNavigate } from "react-router-dom";
import { FiTrash2 } from "react-icons/fi";
import toast from "react-hot-toast";

const WishlistPage = () => {
  const { wishlist, removeFromWishlist } = useWishlist();
  const navigate = useNavigate();

  const handleRemove = (id) => {
    removeFromWishlist(id);
    toast.success("Item removed from wishlist", {
      style: {
        border: "1px solid #713200",
        padding: "16px",
        color: "#713200",
      },
      iconTheme: {
        primary: "#713200",
        secondary: "#FFFAEE",
      },
    });
  };

  return (
    <Layout title="Wishlist" description="Your saved items">
      <div className="container mx-auto p-4 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex justify-between items-center mb-8"
        >
          <h1 className="text-3xl font-bold text-gray-800">My Wishlist</h1>
        </motion.div>

        {wishlist.length === 0 ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="bg-white rounded-xl shadow-sm p-12 text-center"
          >
            <div className="flex flex-col items-center">
              <img
                src="/empty-wishlist.png"
                alt="Empty Wishlist"
                className="w-48 h-48 mb-4 opacity-50"
              />
              <h2 className="text-2xl font-semibold mb-2 text-gray-800">
                Your wishlist is empty
              </h2>
              <p className="text-gray-600 mb-4">
                Browse products and add your favorites!
              </p>
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate("/store")}
              className="bg-pink-500 text-white px-6 py-3 rounded-lg hover:bg-pink-600"
            >
              Browse Products
            </motion.button>
          </motion.div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {wishlist.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="flex gap-6 p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="w-1/3">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-48 object-cover rounded-lg"
                  />
                </div>
                <div className="w-2/3 flex flex-col justify-between">
                  <div>
                    <h4 className="text-xl font-semibold text-gray-800 mb-2">
                      {item.name}
                    </h4>
                    <p className="text-gray-600 mb-4 line-clamp-2">
                      {item.description}
                    </p>
                    <p className="text-2xl font-bold text-blue-600 mb-4">
                      ₹{item.price}
                    </p>
                  </div>
                  <div className="flex justify-end">
                    <button
                      onClick={() => handleRemove(item.id)}
                      className="p-2 text-red-500 hover:bg-red-50 rounded-full transition-colors"
                    >
                      <FiTrash2 className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </Layout>
  );
};

export default WishlistPage;
