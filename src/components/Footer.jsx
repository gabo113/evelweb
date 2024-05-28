import React from 'react';
import '../css/Style.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top section">
          <div className="footer-brand">
            <a href="#" className="logo">
              <img src="./assets/images/logo.svg" width="209" height="52" alt="dprod logo" />
            </a>
            <a href="mailto:companyinfo@mail.com" className="footer-link">companyinfo@mail.com</a>
            <a href="tel:+0987654321" className="footer-link">+098 765 4321</a>
            <ul className="social-list">
              <li>
                <a href="#" className="social-link">
                  <ion-icon name="logo-facebook"></ion-icon>
                </a>
              </li>
              <li>
                <a href="#" className="social-link">
                  <ion-icon name="logo-twitter"></ion-icon>
                </a>
              </li>
              <li>
                <a href="#" className="social-link">
                  <ion-icon name="logo-pinterest"></ion-icon>
                </a>
              </li>
              <li>
                <a href="#" className="social-link">
                  <ion-icon name="logo-dribbble"></ion-icon>
                </a>
              </li>
            </ul>
          </div>
          <ul className="footer-list">
            <li>
              <p className="h4 footer-list-title">Links</p>
            </li>
            <li>
              <a href="#" className="footer-link">Company Details</a>
            </li>
            <li>
              <a href="#" className="footer-link">Our Newsfeed</a>
            </li>
            <li>
              <a href="#" className="footer-link">Service Standard</a>
            </li>
            <li>
              <a href="#" className="footer-link">Team Members</a>
            </li>
            <li>
              <a href="#" className="footer-link">Pricing Standard</a>
            </li>
          </ul>
          <ul className="footer-list">
            <li>
              <p className="h4 footer-list-title">Legal</p>
            </li>
            <li>
              <a href="#" className="footer-link">Agency Minimal</a>
            </li>
            <li>
              <a href="#" className="footer-link">Creative Agency</a>
            </li>
            <li>
              <a href="#" className="footer-link">Creative Layout</a>
            </li>
            <li>
              <a href="#" className="footer-link">Dark Layout</a>
            </li>
            <li>
              <a href="#" className="footer-link">FAQ with Filter</a>
            </li>
          </ul>
          <ul className="footer-list">
            <li>
              <p className="h4 footer-list-title">Projects</p>
            </li>
            <li>
              <a href="#" className="footer-link">Projects Common</a>
            </li>
            <li>
              <a href="#" className="footer-link">Projects Creative</a>
            </li>
            <li>
              <a href="#" className="footer-link">Projects Standard</a>
            </li>
            <li>
              <a href="#" className="footer-link">Dark Layout</a>
            </li>
            <li>
              <a href="#" className="footer-link">eCommerce</a>
            </li>
          </ul>
        </div>
        <div className="footer-bottom">
          <p className="copyright">
            Copyright 2022 All Rights Reserved by codewithsadee.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
