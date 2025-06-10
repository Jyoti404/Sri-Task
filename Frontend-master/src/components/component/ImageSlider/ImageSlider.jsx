import React from 'react';
import './ImageSlider.css';

const ImageSlider = () => {
  return (
    <div className="wrapper1">
      <div className="container1">
        <input type="radio" name="slide" id="c1" defaultChecked />
        <label htmlFor="c1" className="card1">
          <div className="row1">
            <div className="icon1">1</div>
            <div className="description1">
              <h4>Winter Collection</h4>
              <p>Stay warm and stylish with our latest winter fashion for men and women.</p>
            </div>
          </div>
        </label>

        <input type="radio" name="slide" id="c2" />
        <label htmlFor="c2" className="card1">
          <div className="row1">
            <div className="icon1">2</div>
            <div className="description1">
              <h4>Formal Wear</h4>
              <p>Elegant suits and dresses perfect for every occasion.</p>
            </div>
          </div>
        </label>

        <input type="radio" name="slide" id="c3" />
        <label htmlFor="c3" className="card1">
          <div className="row1">
            <div className="icon1">3</div>
            <div className="description1">
              <h4>Street Style</h4>
              <p>Trendy looks to keep you fashion-forward every day.</p>
            </div>
          </div>
        </label>

        <input type="radio" name="slide" id="c4" />
        <label htmlFor="c4" className="card1">
          <div className="row1">
            <div className="icon1">4</div>
            <div className="description1">
              <h4>Accessories</h4>
              <p>From bags to shoes — complete your look effortlessly.</p>
            </div>
          </div>
        </label>
      </div>
    </div>
  );
};

export default ImageSlider;
