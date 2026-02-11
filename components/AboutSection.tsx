import React from 'react';
import Section from './ui/Section';
import { motion } from 'framer-motion';

const AboutSection: React.FC = () => {
  return (
    <Section id="about" className="py-5" abstractType="mesh">
      <div className="row align-items-center gx-lg-5">
        
        {/* Content Side */}
        <div className="col-lg-6 order-2 order-lg-1">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="pe-lg-5"
          >
            <h6 className="text-uppercase fw-bold mb-3" style={{ color: '#7e1974', letterSpacing: '2px' }}>Who We Are</h6>
            <h2 className="display-4 fw-bold text-dark mb-4">
              Legacy of <span className="text-gradient">Trust</span><br/>
              Future of <span className="text-gradient">Innovation</span>
            </h2>
            
            <p className="lead text-muted mb-4">
              "One Abans" signifies our cohesive strength—bringing together Retail, Services, Logistics, Manufacturing, Real Estate, and Finance under a single, powerful vision.
            </p>
            
            <p className="text-secondary mb-5">
               We don't just sell products; we enhance lifestyles. Our unified approach ensures that every stakeholder benefits from the synergy of our interconnected businesses.
            </p>

            <div className="d-flex align-items-center gap-5 mb-5">
                <div>
                    <h3 className="fw-bold display-5 m-0 text-dark">50<span className="text-primary">+</span></h3>
                    <small className="text-uppercase text-muted fw-bold tracking-wide">Years of Trust</small>
                </div>
                <div className="vr opacity-25"></div>
                <div>
                    <h3 className="fw-bold display-5 m-0 text-dark">6<span className="text-primary">+</span></h3>
                    <small className="text-uppercase text-muted fw-bold tracking-wide">Key Sectors</small>
                </div>
            </div>
            
            <button className="btn btn-outline-dark rounded-pill px-5 py-3 fw-bold border-2">
              Our Journey
            </button>
          </motion.div>
        </div>

        {/* Image Composition Side */}
        <div className="col-lg-6 order-1 order-lg-2 mb-5 mb-lg-0">
            <div className="position-relative p-4">
                {/* Abstract Shape */}
                <div className="position-absolute top-0 end-0 w-75 h-75 bg-primary opacity-10 rounded-circle blur-3xl" style={{ filter: 'blur(60px)', transform: 'translate(20%, -20%)' }}></div>

                {/* Main Image */}
                <motion.div 
                    whileHover={{ scale: 1.02 }}
                    className="position-relative z-2"
                >
                    <img 
                        src="https://images.unsplash.com/photo-1556761175-b413da4baf72?q=80&w=1974&auto=format&fit=crop" 
                        alt="Corporate Meeting" 
                        className="img-fluid shadow-2xl rounded-5"
                        style={{ borderRadius: '40px 0 40px 0' }}
                    />
                </motion.div>
                
                {/* Floating Card */}
                <motion.div 
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    className="position-absolute bottom-0 start-0 m-lg-n4 bg-white p-4 shadow-lg rounded-4 z-3 d-none d-md-block border border-light"
                    style={{ maxWidth: '280px' }}
                >
                    <div className="d-flex align-items-center gap-3 mb-2">
                        <div className="bg-success bg-opacity-10 text-success rounded-circle p-2">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                        </div>
                        <span className="fw-bold text-dark">ISO 9001 Certified</span>
                    </div>
                    <p className="text-muted small m-0 lh-sm">
                        Committed to world-class quality standards across all operations.
                    </p>
                </motion.div>
            </div>
        </div>
      </div>
    </Section>
  );
};

export default AboutSection;