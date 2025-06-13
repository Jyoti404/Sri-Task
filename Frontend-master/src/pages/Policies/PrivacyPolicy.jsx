import React from "react";
import Layout from "../../components/Layout/Layout";
import { motion } from "framer-motion";
import { Shield, Lock, Eye, FileText } from "lucide-react";

const PrivacyPolicy = () => {
  return (
    <Layout title="Privacy Policy - STYHERE">
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
                Privacy Policy
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
                    <Shield className="w-6 h-6 text-pink-600" />
                    <h2 className="text-2xl font-semibold text-gray-900">
                      Information We Collect
                    </h2>
                  </div>
                  <p className="text-gray-600">
                    At STYHERE, we collect personal information to deliver the best shopping experience. This may include:
                  </p>
                  <ul className="list-disc pl-6 text-gray-600 space-y-2">
                    <li>Your name and contact details</li>
                    <li>Shipping and billing addresses</li>
                    <li>Payment details (securely processed)</li>
                    <li>Your orders, wishlist, and browsing preferences</li>
                    <li>Device and interaction data</li>
                  </ul>
                </section>

                <section>
                  <div className="flex items-center gap-3 mb-4">
                    <Lock className="w-6 h-6 text-pink-600" />
                    <h2 className="text-2xl font-semibold text-gray-900">
                      How We Use Your Information
                    </h2>
                  </div>
                  <p className="text-gray-600">
                    We use your information to:
                  </p>
                  <ul className="list-disc pl-6 text-gray-600 space-y-2">
                    <li>Fulfill your orders and process payments</li>
                    <li>Provide shipping and delivery updates</li>
                    <li>Send exclusive fashion offers and updates (only with consent)</li>
                    <li>Improve our products, collections, and website</li>
                    <li>Protect our platform against fraud or misuse</li>
                  </ul>
                </section>

                <section>
                  <div className="flex items-center gap-3 mb-4">
                    <Eye className="w-6 h-6 text-pink-600" />
                    <h2 className="text-2xl font-semibold text-gray-900">
                      Information Sharing
                    </h2>
                  </div>
                  <p className="text-gray-600">
                    Your privacy is our priority. We do not sell your information. We may share it with:
                  </p>
                  <ul className="list-disc pl-6 text-gray-600 space-y-2">
                    <li>Logistics partners to deliver your orders</li>
                    <li>Payment gateways for secure transactions</li>
                    <li>Marketing platforms (only if opted in)</li>
                    <li>Authorities if required under law</li>
                  </ul>
                </section>

                <section>
                  <div className="flex items-center gap-3 mb-4">
                    <FileText className="w-6 h-6 text-pink-600" />
                    <h2 className="text-2xl font-semibold text-gray-900">
                      Your Rights
                    </h2>
                  </div>
                  <p className="text-gray-600">You can always:</p>
                  <ul className="list-disc pl-6 text-gray-600 space-y-2">
                    <li>View or update your personal information</li>
                    <li>Request removal of your data</li>
                    <li>Unsubscribe from promotional emails</li>
                    <li>Ask us how your data is being used</li>
                    <li>File a complaint with a data protection authority</li>
                  </ul>
                </section>
              </div>

              {/* Contact Section */}
              <div className="mt-12 p-6 bg-pink-50 rounded-xl">
                <h2 className="text-xl font-semibold text-gray-900 mb-4">
                  Contact Us
                </h2>
                <p className="text-gray-600">
                  If you have any questions regarding our privacy practices, reach out to us:
                </p>
                <div className="mt-4">
                  <p className="text-gray-600">Email: care@styhere.com</p>
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

export default PrivacyPolicy;
