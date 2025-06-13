import React from "react";
import {
  BookOpen,
  CheckCircle,
  AlertTriangle,
  ClipboardList,
  Package,
} from "lucide-react";
import "./PolicyCommon.css";

const TermsConditions = () => {
  return (
    <div className="policy-container">
      <header className="policy-header">
        <h1 className="policy-title">
          <BookOpen size={40} color="#007BFF" />
          Terms & Conditions
        </h1>
      </header>

      <div className="policy-content">
        <div className="policy-item" style={{ animationDelay: "0.2s" }}>
          <div className="policy-item-header">
            <CheckCircle size={28} color="#004080" />
            <h2>Size & Fit Guidance</h2>
          </div>
          <p>
            We provide detailed <b>size charts and fit recommendations</b> on
            all product pages to help customers make informed purchases.
          </p>
        </div>

        <div className="policy-item" style={{ animationDelay: "0.4s" }}>
          <div className="policy-item-header">
            <AlertTriangle size={28} color="#FF5733" />
            <h2>Returns & Exchanges</h2>
          </div>
          <p>
            You can return or exchange unworn and unwashed items within{" "}
            <b>10 days of delivery</b>. Items must have original tags and
            packaging intact.
          </p>
        </div>

        <div className="policy-item" style={{ animationDelay: "0.6s" }}>
          <div className="policy-item-header">
            <ClipboardList size={28} color="#004080" />
            <h2>Quality Assurance</h2>
          </div>
          <p>
            If you receive a <b>defective or wrong item</b>, please contact our
            support team within <b>48 hours</b> for a quick resolution.
          </p>
        </div>

        <div className="policy-item" style={{ animationDelay: "0.8s" }}>
          <div className="policy-item-header">
            <Package size={28} color="#004080" />
            <h2>Shipping & Delivery</h2>
          </div>
          <p>
            We offer <b>free shipping</b> across India. Orders are typically
            delivered within <b>5-7 business days</b>. Tracking details will be
            provided once your order ships.
          </p>
        </div>

        <div className="policy-item" style={{ animationDelay: "1s" }}>
          <div className="policy-item-header">
            <CheckCircle size={28} color="#004080" />
            <h2>Order Accuracy</h2>
          </div>
          <p>
            Please double-check your <b>shipping address and contact info</b>{" "}
            before confirming your order. <b>Changes are not allowed</b> once
            the order is placed.
          </p>
        </div>
      </div>
    </div>
  );
};

export default TermsConditions;
