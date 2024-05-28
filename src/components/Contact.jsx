import React from 'react';
import '../css/Style.css';

const Contact = () => {
  return (
    <section className="section contact" id="contact" aria-label="contact">
      <div className="container">
        <h2 className="h2 section-title">Let's Contact With Us</h2>
        <p className="section-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <form action="" className="contact-form">
          <div className="input-wrapper">
            <input type="text" name="name" aria-label="name" placeholder="Your name*" required className="input-field" />
            <input type="email" name="email_address" aria-label="email" placeholder="Email address*" required className="input-field" />
          </div>
          <div className="input-wrapper">
            <input type="text" name="subject" aria-label="subject" placeholder="Subject" className="input-field" />
            <input type="number" name="phone" aria-label="phone" placeholder="Phone number" className="input-field" />
          </div>
          <textarea name="message" aria-label="message" placeholder="Your message...*" required className="input-field"></textarea>
          <div className="checkbox-wrapper">
            <input type="checkbox" name="terms_and_policy" id="terms" required className="checkbox" />
            <label htmlFor="terms" className="label">
              Accept <a href="#" className="label-link">Terms of Services</a> and <a href="#" className="label-link">Privacy Policy</a>
            </label>
          </div>
          <button type="submit" className="btn btn-primary">Send Message</button>
        </form>
        <ul className="contact-list">
          <li className="contact-item">
            <div className="contact-card">
              <div className="card-icon">
                <ion-icon name="mail-outline" aria-hidden="true"></ion-icon>
              </div>
              <div className="card-content">
                <h3 className="h3 card-title">Mail Here</h3>
                <a href="mailto:hello@luaz.com" className="card-link">hello@luaz.com</a>
                <a href="mailto:info@luaz.com" className="card-link">info@luaz.com</a>
              </div>
            </div>
          </li>
          <li className="contact-item">
            <div className="contact-card">
              <div className="card-icon">
                <ion-icon name="map-outline" aria-hidden="true"></ion-icon>
              </div>
              <div className="card-content">
                <h3 className="h3 card-title">Visit Here</h3>
                <address className="card-address">
                  27 Division St, New York,<br />
                  NY 10002, USA
                </address>
              </div>
            </div>
          </li>
          <li className="contact-item">
            <div className="contact-card">
              <div className="card-icon">
                <ion-icon name="headset-outline" aria-hidden="true"></ion-icon>
              </div>
              <div className="card-content">
                <h3 className="h3 card-title">Call Here</h3>
                <a href="tel:+1234567890" className="card-link">+123 456 7890</a>
                <a href="tel:+2414524526" className="card-link">+241 452 4526</a>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Contact;
