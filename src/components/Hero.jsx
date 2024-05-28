import React from 'react';
import '../css/Style.css';
import evelwebbanner from '../assets/images/evelwebbanner.jpg';



function Hero() {
  return (
    <section className="section hero" id="home" aria-label="hero">
      <div className="container">
        <div className="hero-content">
          <p className="hero-subtitle">Evel Web Agencia de Marketing</p>
          <h1 className="h1 hero-title">Marketing para tu empresa</h1>
          <p className="hero-text">
          En Evel Web, estamos comprometidos a proporcionarte todas las soluciones digitales que impulsarán el crecimiento y éxito de tu negocio.
          </p>
          <a href="#" className="btn btn-primary">Da el primer paso</a>
        </div>
        <figure className="hero-banner">
          <img src={evelwebbanner} width="720" height="673" alt="hero banner" className="w-100" />
        </figure>
      </div>
    </section>
  );
}

export default Hero;
