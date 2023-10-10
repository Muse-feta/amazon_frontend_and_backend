import React from "react";
import "./Fotter.scss";
import amazon_logo from "../../Assets/amazon_logo.png";

function Footer() {
  return (
    <div className="fotter">
      <div className="fotter_first_section">
        <div className="fotter_links">
          <h2>Make Money with Us</h2>
          <a href="">Careers</a>
          <a href="">Blog</a>
          <a href="">About Amazon</a>
          <a href="">Investor Relations</a>
          <a href="">Amazon Devices</a>
          <a href="">Amazon Science</a>
        </div>
        <div className="fotter_links">
          <h2>Amazon Payment Products</h2>
          <a href="">Sell products on Amazon</a>
          <a href="">Sell on Amazon Business</a>
          <a href="">Sell apps on Amazon</a>
          <a href="">Become an Affiliate</a>
          <a href="">Advertise Your Products</a>
          <a href="">Self-Publish with Us</a>
          <a href="">Host an Amazon Hub</a>
          <a href="">›See More Make Money with Us</a>
        </div>
        <div className="fotter_links">
          <h2>Let Us Help You</h2>
          <a href="">Amazon Business Card</a>
          <a href="">Shop with Points</a>
          <a href="">Reload Your Balance</a>
          <a href="">Amazon Currency Converter</a>
        </div>
        <div className="fotter_links">
          <h2>Get to Know Us</h2>
          <a href="">Amazon and COVID-19</a>
          <a href="">Your Account</a>
          <a href="">Your Orders</a>
          <a href="">Shipping Rates & Policies</a>
          <a href="">Returns & Replacements</a>
          <a href="">Manage Your Content and Devices</a>
          <a href="">Amazon Assistant</a>
          <a href="">Help</a>
        </div>
      </div>
      <br />
      <br />

      <hr />

      <div className="fotter_bottom">
        <div>
          <img src={amazon_logo} alt="" />
        </div>

        <div className="border">
          <p>English</p>
        </div>

        <div className="border">
          <p>$ USD-U.S Dollar</p>
        </div>

        <div className="border">
          <p>United States</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
