import React from "react";
import Styles from "./Footer.module.css";
import { FaFacebook, FaInstagram, FaTwitter, FaGithub } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();

  return (
    <footer className={Styles.footer}>
      <div className={Styles.footerContainer}>
        {/* Logo / Brand */}
        <div className={Styles.brandSection}>
          <h2 className={Styles.logo} onClick={() => navigate("/")}>
            🍽️ Royal-Food
          </h2>
          <p className={Styles.tagline}>
            Discover. Taste. Enjoy your favorite meals anytime!
          </p>
        </div>

        {/* Navigation Links */}
        <div className={Styles.linksSection}>
          <h4>Quick Links</h4>
          <ul>
            <li onClick={() => navigate("/")}>Home</li>
            <li onClick={() => navigate("/")}>Menu</li>
            <li onClick={() => navigate("/")}>About</li>
            <li onClick={() => navigate("/")}>Contact</li>
          </ul>
        </div>

        {/* Social Media */}
        <div className={Styles.socialSection}>
          <h4>Follow Us</h4>
          <div className={Styles.socialIcons}>
            <a href="https://facebook.com" target="_blank" rel="noreferrer">
              <FaFacebook />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer">
              <FaInstagram />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer">
              <FaTwitter />
            </a>
            <a href="https://github.com" target="_blank" rel="noreferrer">
              <FaGithub />
            </a>
          </div>
        </div>
      </div>

      <div className={Styles.footerBottom}>
        <p>© {new Date().getFullYear()} Royal-Food. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
