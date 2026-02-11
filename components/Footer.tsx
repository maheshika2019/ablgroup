import React from 'react';
import { Facebook, Linkedin, Twitter, Instagram, MapPin, Phone, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-dark text-white pt-5 pb-4 border-top border-secondary">
      <div className="container">
        <div className="row g-5 mb-5">
            {/* Brand Column */}
            <div className="col-lg-4">
                <div className="h3 fw-bold mb-4" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                    ABANS<span className="text-secondary">GROUP</span>
                </div>
                <p className="text-secondary mb-4 small">
                    One Abans – united under one home. A diversified conglomerate empowering Sri Lankan lives through innovation and excellence.
                </p>
                <div className="d-flex gap-3">
                    {[Facebook, Twitter, Linkedin, Instagram].map((Icon, i) => (
                        <a key={i} href="#" className="btn btn-outline-secondary rounded-circle p-2 d-flex align-items-center justify-content-center" style={{ width: '40px', height: '40px' }}>
                            <Icon size={18} />
                        </a>
                    ))}
                </div>
            </div>

            {/* Quick Links */}
            <div className="col-sm-6 col-lg-2">
                <h5 className="fw-bold mb-4 text-white">Quick Links</h5>
                <ul className="list-unstyled d-flex flex-column gap-2 small text-secondary">
                    <li><a href="#" className="text-decoration-none text-secondary hover-white">About Us</a></li>
                    <li><a href="#" className="text-decoration-none text-secondary hover-white">Board of Directors</a></li>
                    <li><a href="#" className="text-decoration-none text-secondary hover-white">Sustainability</a></li>
                    <li><a href="#" className="text-decoration-none text-secondary hover-white">Investor Relations</a></li>
                    <li><a href="#" className="text-decoration-none text-secondary hover-white">Careers</a></li>
                </ul>
            </div>

            {/* Business Sectors */}
            <div className="col-sm-6 col-lg-2">
                <h5 className="fw-bold mb-4 text-white">Our Businesses</h5>
                <ul className="list-unstyled d-flex flex-column gap-2 small text-secondary">
                    <li><a href="#" className="text-decoration-none text-secondary hover-white">Retail</a></li>
                    <li><a href="#" className="text-decoration-none text-secondary hover-white">Services</a></li>
                    <li><a href="#" className="text-decoration-none text-secondary hover-white">Logistics</a></li>
                    <li><a href="#" className="text-decoration-none text-secondary hover-white">Real Estate</a></li>
                    <li><a href="#" className="text-decoration-none text-secondary hover-white">Finance</a></li>
                </ul>
            </div>

            {/* Contact */}
            <div className="col-lg-4">
                <h5 className="fw-bold mb-4 text-white">Contact Us</h5>
                <ul className="list-unstyled d-flex flex-column gap-3 small text-secondary">
                    <li className="d-flex align-items-start gap-3">
                        <MapPin size={20} className="text-primary mt-1 flex-shrink-0" />
                        <span>Abans Head Office,<br/>498, Galle Road, Colombo 03,<br/>Sri Lanka.</span>
                    </li>
                    <li className="d-flex align-items-center gap-3">
                        <Phone size={20} className="text-primary flex-shrink-0" />
                        <span>+94 11 256 5290</span>
                    </li>
                    <li className="d-flex align-items-center gap-3">
                        <Mail size={20} className="text-primary flex-shrink-0" />
                        <span>info@abansgroup.com</span>
                    </li>
                </ul>
            </div>
        </div>

        <div className="border-top border-secondary pt-4 d-flex flex-column flex-md-row justify-content-between align-items-center small text-secondary">
            <p className="mb-2 mb-md-0">&copy; {new Date().getFullYear()} Abans Group PLC. All rights reserved.</p>
            <div className="d-flex gap-4">
                <a href="#" className="text-decoration-none text-secondary">Privacy Policy</a>
                <a href="#" className="text-decoration-none text-secondary">Terms of Use</a>
                <a href="#" className="text-decoration-none text-secondary">Cookie Policy</a>
            </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;