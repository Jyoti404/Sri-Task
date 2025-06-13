import React from "react";
import { FaUserShield, FaCookieBite, FaLock } from "react-icons/fa";
import "./PolicyCommon.css";

const PrivacyPolicy = () => {
  return (
    <div className="policy-container">
      <header className="policy-header">
        <h1 className="policy-title">
          <FaLock size={40} color="#007BFF" />
          Privacy Policy
        </h1>
      </header>

      <div className="policy-content">
        <div className="policy-item" style={{ animationDelay: "0.2s" }}>
          <div className="policy-item-header">
            <FaUserShield size={28} color="#004080" />
            <h2>Data Collection and Usage</h2>
          </div>
          <p>
            STYHERE collects personal information such as your name, email,
            shipping address, and browsing behavior to <b>process orders</b>,{" "}
            <b>enhance your shopping experience</b>, and offer <b>personalized recommendations</b>.
            We do not sell or share your data with third parties without your consent.
          </p>
        </div>

        <div className="policy-item" style={{ animationDelay: "0.4s" }}>
          <div className="policy-item-header">
            <FaCookieBite size={28} color="#004080" />
            <h2>Cookies and Tracking</h2>
          </div>
          <p>
            Our website uses cookies to remember your preferences, track
            browsing activity, and collect analytics to improve our fashion catalog
            and user interface. You can control cookie settings via your browser.
          </p>
        </div>

        <div className="policy-item" style={{ animationDelay: "0.6s" }}>
          <div className="policy-item-header">
            <FaLock size={28} color="#004080" />
            <h2>Security and Data Protection</h2>
          </div>
          <p>
            We implement secure encryption protocols and maintain strict
            access controls to ensure your <b>personal and payment data</b> remain
            protected while shopping with STYHERE.
          </p>
        </div>
      </div>
    </div>
  );
};
export default PrivacyPolicy;
