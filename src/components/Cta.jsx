import React from 'react';
import '../css/Style.css';
const Cta = () => {
  return (
    <section className="section cta" aria-label="cta" style={{ backgroundImage: "url('./assets/images/cta-bg.jpg')" }}>
      <div className="container">
        <p className="cta-subtitle">So What is Next?</p>
        <h2 className="h2 section-title">Are You Ready? Let's get to Work!</h2>
        <a href="#" className="btn btn-secondary">Get Started</a>
      </div>
    </section>
  );
};

export default Cta;
