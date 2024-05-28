import React, { useState, useEffect } from "react";
import '../css/Style.css';

const Navbar = () => {
  const [isNavbarActive, setNavbarActive] = useState(false);
  const [isScrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleNavbar = () => {
    setNavbarActive(!isNavbarActive);
  };

  const closeNavbar = () => {
    setNavbarActive(false);
  };

  const handleScroll = () => {
    if (window.scrollY > 100) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`header ${isScrolled ? 'active' : ''}`} data-header>
      <div className="container">
        <a href="#" className="logo">EvelWeb</a>

        <nav className={`navbar container ${isNavbarActive ? 'active' : ''}`} data-navbar>
          <ul className="navbar-list">
            <li>
              <a href="#home" className="navbar-link" data-nav-link onClick={closeNavbar}>Home</a>
            </li>
            <li>
              <a href="#service" className="navbar-link" data-nav-link onClick={closeNavbar}>Servicios</a>
            </li>
            <li>
              <a href="#project" className="navbar-link" data-nav-link onClick={closeNavbar}>Project</a>
            </li>
            <li>
              <a href="#about" className="navbar-link" data-nav-link onClick={closeNavbar}>Nosotros</a>
            </li>
            <li>
              <a href="#blog" className="navbar-link" data-nav-link onClick={closeNavbar}>Blog</a>
            </li>
            <li>
              <a href="#contact" className="navbar-link" data-nav-link onClick={closeNavbar}>Contactanos</a>
            </li>
            <li>
              <a href="#" className="btn btn-primary">Empezamos</a>
            </li>
          </ul>
        </nav>

        <button
          className="nav-toggle-btn"
          aria-label="Toggle menu"
          data-nav-toggler
          onClick={() => {
            toggleNavbar();
            toggleMenu();
          }}
        >
          {/* Ícono del menú */}
          {isMenuOpen ? (
            <ion-icon name="close-outline" className="close"></ion-icon>
          ) : (
            <ion-icon name="menu-outline" className="open"></ion-icon>
          )}
        </button>
      </div>
    </header>
  );
};

export default Navbar;

