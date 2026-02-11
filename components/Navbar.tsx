import React, { useState, useEffect } from 'react';
import { Globe, Search, Menu } from 'lucide-react';
import { NAV_ITEMS } from '../constants';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar navbar-expand-lg fixed-top transition-all duration-300 ${isScrolled ? 'navbar-glass py-2' : 'bg-transparent py-4 navbar-dark'}`}>
      <div className="container">
        <a className="navbar-brand d-flex align-items-center gap-2" href="#">
          <div className={`fw-bold fs-3 ${isScrolled ? 'text-dark' : 'text-white'}`} style={{ fontFamily: 'Montserrat, sans-serif' }}>
            ABANS<span className={isScrolled ? 'text-primary' : 'text-white-50'} style={{ color: isScrolled ? '#7e1974' : '' }}>GROUP</span>
          </div>
        </a>
        
        <button className="navbar-toggler border-0" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <Menu className={isScrolled ? 'text-dark' : 'text-white'} size={28} />
        </button>

        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav align-items-center gap-4">
            {NAV_ITEMS.map((item) => (
              <li className="nav-item" key={item.label}>
                <a 
                  className={`nav-link text-uppercase fs-6 fw-bold tracking-wide ${isScrolled ? 'text-dark' : 'text-white opacity-75 hover:opacity-100'}`} 
                  href={item.href}
                  target={item.isExternal ? '_blank' : '_self'}
                >
                  {item.label}
                </a>
              </li>
            ))}
            
            <li className="nav-item d-flex gap-3 ms-lg-3">
              <button className={`btn btn-sm rounded-circle p-2 ${isScrolled ? 'text-dark' : 'text-white'}`}>
                <Search size={20} />
              </button>
              <button className={`btn btn-sm rounded-pill px-3 d-flex align-items-center gap-2 fw-bold ${isScrolled ? 'btn-outline-dark' : 'btn-outline-light'}`}>
                <Globe size={16} /> EN
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;