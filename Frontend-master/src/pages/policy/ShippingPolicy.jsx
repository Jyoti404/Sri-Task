import React from "react";
import { Truck, Timer, MapPin, ShieldCheck, AlertTriangle } from "lucide-react";
import "./PolicyCommon.css";

const ShippingPolicy = () => {
  return (
    <div className="policy-container">
      <header className="policy-header">
        <h1 className="policy-title">
          <Truck size={40} color="#007BFF" />
          Shipping Policy
        </h1>
      </header>

      <div className="policy-content">
        <div className="policy-item" style={{ animationDelay: "0.2s" }}>
          <div className="policy-item-header">
            <ShieldCheck size={28} color="#004080" />
            <h2>Free Shipping</h2>
          </div>
          <p>
            We provide <b>free shipping</b> on all fashion orders across India —
            no hidden delivery charges.
          </p>
        </div>

        <div className="policy-item" style={{ animationDelay: "0.4s" }}>
          <div className="policy-item-header">
            <Timer size={28} color="#004080" />
            <h2>Delivery Timeline</h2>
          </div>
          <p>
            Orders are usually <b>processed within 1–2 business days</b> and delivered in{" "}
            <b>5–7 business days</b>, depending on your location.
          </p>
        </div>

        <div className="policy-item" style={{ animationDelay: "0.6s" }}>
          <div className="policy-item-header">
            <MapPin size={28} color="#004080" />
            <h2>Track Your Order</h2>
          </div>
          <p>
            Once shipped, a <b>tracking ID</b> will be sent via email or SMS so you can
            monitor your order's journey.
          </p>
        </div>

        <div className="policy-item" style={{ animationDelay: "0.8s" }}>
          <div className="policy-item-header">
            <Truck size={28} color="#004080" />
            <h2>Courier Services</h2>
          </div>
          <p>
            We partner with <b>reliable and trusted courier providers</b> to ensure safe
            and timely delivery of your fashion essentials.
          </p>
        </div>

        <div className="policy-item" style={{ animationDelay: "1s" }}>
          <div className="policy-item-header">
            <AlertTriangle size={28} color="#FF5733" />
            <h2>Shipping Support</h2>
          </div>
          <p>
            Facing a delay or issue? Reach out to{" "}
            <b>support@styhere.com</b> with your order details — we’re here to help.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ShippingPolicy;
