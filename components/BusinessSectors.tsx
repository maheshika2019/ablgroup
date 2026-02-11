import React from 'react';
import Section from './ui/Section';
import { BUSINESS_SECTORS } from '../constants';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const BusinessSectors: React.FC = () => {
  return (
    <Section id="business" abstractType="blobs" className="py-6">
      <div className="text-center mx-auto mb-5" style={{ maxWidth: '800px' }}>
        <h6 className="text-uppercase fw-bold text-primary mb-3" style={{ letterSpacing: '2px' }}>Our Ecosystem</h6>
        <h2 className="display-4 fw-bold mb-4">Diversified Strength</h2>
        <p className="lead text-muted text-balance">
          A synergy of six core sectors driving the nation's economy. We are one family of companies, united by a vision of excellence.
        </p>
      </div>

      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
        {BUSINESS_SECTORS.map((sector, index) => (
          <div className="col" key={sector.title}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="h-100"
            >
                <div className="gradient-border-card p-1">
                    <div className="bg-white rounded-4 h-100 overflow-hidden d-flex flex-column position-relative" style={{ borderRadius: '22px' }}>
                        
                        {/* Image Area */}
                        <div className="position-relative overflow-hidden" style={{ height: '240px' }}>
                            <img 
                                src={sector.image} 
                                alt={sector.title} 
                                className="w-100 h-100 object-fit-cover transition-transform duration-700 hover-zoom"
                                style={{ transition: 'transform 0.6s ease' }}
                            />
                            <div className="position-absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                            
                            {/* Icon Badge */}
                            <div className="position-absolute bottom-0 start-0 m-4">
                                <div className="bg-white rounded-circle p-3 shadow-lg d-inline-flex">
                                    <sector.icon size={24} className="text-primary" />
                                </div>
                            </div>
                        </div>

                        {/* Content Area */}
                        <div className="p-4 flex-grow-1 d-flex flex-column">
                            <div className="d-flex justify-content-between align-items-start mb-3">
                                <h3 className="h4 fw-bold m-0 text-dark">{sector.title}</h3>
                                <ArrowUpRight className="text-muted opacity-50" size={20} />
                            </div>
                            
                            <p className="text-muted small mb-4 flex-grow-1">
                                {sector.description}
                            </p>

                            <button className="btn btn-link p-0 text-primary fw-bold text-decoration-none text-uppercase small d-flex align-items-center gap-2" style={{ letterSpacing: '1px' }}>
                                Learn More <div className="bg-primary bg-opacity-10 rounded-circle p-1"><ArrowUpRight size={14} /></div>
                            </button>
                        </div>
                    </div>
                </div>
            </motion.div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default BusinessSectors;