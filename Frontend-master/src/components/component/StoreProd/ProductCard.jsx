import React from "react";
import "./ProductCard.css";

const ProductCard = () => {
  return (
    <div className="product-card">
      <div className="product-image">
        <img src="/fashion1.png" alt="Elegant Summer Dress" />
      </div>
      <div className="product-info">
        <h3 className="product-title">Elegant Summer Dress</h3>
        <p className="product-price">
          Starting at ₹1,499
          <br />
          Flat 20% Off on First Purchase*
        </p>
        <button className="buy-button">Shop Now</button>
      </div>
    </div>
  );
};

export default ProductCard;
