import React from 'react';
import Section from './ui/Section';
import { LATEST_NEWS } from '../constants';
import { motion } from 'framer-motion';
import { Calendar, ArrowRight } from 'lucide-react';

const News: React.FC = () => {
  return (
    <Section id="news" background="gray" className="py-6" abstractType="blobs">
      <div className="d-flex flex-column flex-md-row justify-content-between align-items-end mb-5">
        <div>
            <h6 className="text-primary fw-bold text-uppercase mb-2" style={{ letterSpacing: '2px' }}>Updates</h6>
            <h2 className="display-4 fw-bold text-dark">Latest from Abans</h2>
        </div>
        <a href="#" className="btn btn-link text-dark fw-bold text-decoration-none mt-3 mt-md-0 d-flex align-items-center gap-2 group">
            View All News <ArrowRight size={18} className="transition-transform group-hover-translate-x" />
        </a>
      </div>

      <div className="row g-4">
        {LATEST_NEWS.map((news, index) => (
            <div className="col-md-6 col-lg-4" key={news.id}>
                <motion.article 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="card h-100 border-0 shadow-sm hover-card"
                    style={{ borderRadius: '24px', background: 'white' }}
                >
                    <div className="position-relative overflow-hidden" style={{ height: '240px' }}>
                        <img 
                            src={news.image} 
                            alt={news.title} 
                            className="w-100 h-100 object-fit-cover transition-transform duration-500 hover-zoom"
                        />
                        <div className="position-absolute top-0 start-0 m-3">
                             <span className="badge bg-white text-dark shadow-sm rounded-pill px-3 py-2 text-uppercase fw-bold small">
                                {news.category}
                            </span>
                        </div>
                    </div>
                    <div className="card-body p-4 d-flex flex-column">
                        <div className="d-flex align-items-center gap-2 text-muted small mb-3 fw-bold">
                            <Calendar size={14} />
                            {news.date}
                        </div>
                        <h5 className="card-title fw-bold mb-3 text-dark lh-sm">
                            {news.title}
                        </h5>
                        <p className="card-text text-muted small flex-grow-1 line-clamp-3">
                            {news.excerpt}
                        </p>
                        <a href="#" className="text-primary fw-bold text-uppercase text-decoration-none small mt-4 d-flex align-items-center gap-2">
                            Read Article <ArrowRight size={14} />
                        </a>
                    </div>
                </motion.article>
            </div>
        ))}
      </div>
    </Section>
  );
};

export default News;