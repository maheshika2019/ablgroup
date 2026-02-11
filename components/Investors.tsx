import React from 'react';
import Section from './ui/Section';
import { KEY_STATS } from '../constants';
import { motion } from 'framer-motion';
import { TrendingUp, FileText, ArrowRight } from 'lucide-react';

const Investors: React.FC = () => {
  return (
    <Section id="investors" background="accent" className="py-6" abstractType="none">
      <div className="container position-relative z-2">
          {/* Background Gradient */}
          <div className="position-absolute top-0 start-50 translate-middle-x w-100 h-100 bg-gradient-to-b from-purple-900 to-black opacity-50 z-0"></div>

          <div className="row align-items-end mb-5">
            <div className="col-lg-7">
                <h6 className="text-warning fw-bold text-uppercase mb-3 opacity-75" style={{ letterSpacing: '2px' }}>Investor Relations</h6>
                <h2 className="display-3 fw-bold mb-3 text-white">Growing Together, <br/>Sustainably.</h2>
                <p className="lead text-white-50 w-75">
                    Delivering consistent value through strategic diversification. We are committed to transparency and long-term wealth creation.
                </p>
            </div>
            <div className="col-lg-5 text-lg-end mt-4 mt-lg-0">
                <div className="d-flex justify-content-lg-end gap-3">
                    <button className="btn btn-light rounded-pill px-4 py-2 fw-bold d-flex align-items-center gap-2">
                        <FileText size={18} /> Annual Reports
                    </button>
                    <button className="btn btn-outline-light rounded-pill px-4 py-2 fw-bold d-flex align-items-center gap-2">
                        <TrendingUp size={18} /> Stock Info
                    </button>
                </div>
            </div>
          </div>

          <div className="row g-4 mt-5 pt-4 border-top border-white border-opacity-10">
            {KEY_STATS.map((stat, index) => (
              <div className="col-6 col-md-3" key={stat.label}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <h3 className="display-3 fw-bold mb-0 text-white">
                    {stat.prefix}{stat.value}<span className="text-warning fs-1">{stat.suffix}</span>
                  </h3>
                  <p className="small text-uppercase fw-bold text-white-50 mb-0 tracking-wide">{stat.label}</p>
                </motion.div>
              </div>
            ))}
          </div>
      </div>
    </Section>
  );
};

export default Investors;