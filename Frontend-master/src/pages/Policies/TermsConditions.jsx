import React from "react";
import Layout from "../../components/Layout/Layout";
import { motion } from "framer-motion";
import { Scale, FileCheck, AlertCircle, HelpCircle } from "lucide-react";

const TermsConditions = () => {
  return (
    <Layout title="Terms & Conditions - STYHERE">
      <div className="bg-gradient-to-b from-gray-50 to-white py-12 sm:py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            {/* Header */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center mb-12"
            >
              <h1 className="text-4xl font-bold text-gray-900 mb-4">
                Terms & Conditions
              </h1>
              <p className="text-gray-600">
                Last updated: {new Date().toLocaleDateString()}
              </p>
            </motion.div>

            {/* Content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="prose prose-lg max-w-none"
            >
              <div className="space-y-8">
                <section>
                  <div className="flex items-center gap-3 mb-4">
                    <Scale className="w-6 h-6 text-pink-600" />
                    <h2 className="text-2xl font-semibold text-gray-900">
                      Agreement to Terms
                    </h2>
                  </div>
                  <p className="text-gray-600">
                    By using the STYHERE platform, including browsing our
                    collections or making a purchase, you agree to comply with
                    and be bound by these Terms & Conditions. If you disagree
                    with any part of these terms, please discontinue use.
                  </p>
                </section>

                <section>
                  <div className="flex items-center gap-3 mb-4">
                    <FileCheck className="w-6 h-6 text-pink-600" />
                    <h2 className="text-2xl font-semibold text-gray-900">
                      Use License
                    </h2>
                  </div>
                  <ul className="list-disc pl-6 text-gray-600 space-y-2">
                    <li>
                      All fashion products sold are intended for personal use
                      only unless otherwise mentioned.
                    </li>
                    <li>
                      Commercial resale of our products without prior
                      authorization is strictly prohibited.
                    </li>
                    <li>
                      Website content including images, descriptions, and
                      designs are owned by STYHERE and cannot be copied or
                      modified.
                    </li>
                  </ul>
                </section>

                <section>
                  <div className="flex items-center gap-3 mb-4">
                    <AlertCircle className="w-6 h-6 text-pink-600" />
                    <h2 className="text-2xl font-semibold text-gray-900">
                      Disclaimer
                    </h2>
                  </div>
                  <ul className="list-disc pl-6 text-gray-600 space-y-2">
                    <li>
                      All products are sold “as is.” We do not offer warranties
                      unless explicitly stated.
                    </li>
                    <li>
                      STYHERE is not liable for any damage or misuse resulting
                      from improper handling or use of garments and accessories.
                    </li>
                    <li>
                      Product images are for reference. Colors and fit may vary
                      slightly due to lighting or fabric characteristics.
                    </li>
                  </ul>
                </section>

                <section>
                  <div className="flex items-center gap-3 mb-4">
                    <HelpCircle className="w-6 h-6 text-pink-600" />
                    <h2 className="text-2xl font-semibold text-gray-900">
                      Governing Law
                    </h2>
                  </div>
                  <p className="text-gray-600">
                    These Terms are governed by the laws of India. Any disputes
                    arising shall fall under the jurisdiction of courts located
                    in Uttar Pradesh, India.
                  </p>
                </section>
              </div>

              {/* Contact Section */}
              <div className="mt-12 p-6 bg-pink-50 rounded-xl">
                <h2 className="text-xl font-semibold text-gray-900 mb-4">
                  Questions or Concerns?
                </h2>
                <p className="text-gray-600">
                  For any questions related to these Terms & Conditions, feel
                  free to get in touch:
                </p>
                <div className="mt-4">
                  <p className="text-gray-600">Email: legal@styhere.com</p>
                  <p className="text-gray-600">Phone: +91 6307193440</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default TermsConditions;
