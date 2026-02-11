import React from 'react';
import Section from './ui/Section';
import { motion } from 'framer-motion';
import { CheckCircle2, Zap, Leaf, Cpu } from 'lucide-react';

const Innovation: React.FC = () => {
  return (
    <Section id="innovation" className="py-6">
      <div className="row align-items-center gx-lg-5">
        
        {/* Visual Side */}
        <div className="col-lg-6 mb-5 mb-lg-0 position-relative">
             <div className="position-relative pe-lg-5">
                 <motion.div 
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    className="overflow-hidden shadow-lg position-relative z-1"
                    style={{ borderRadius: '20px 100px 20px 20px' }}
                 >
                    <img 
                        src="https://images.unsplash.com/photo-1581093458791-9f302e6d8169?q=80&w=2070&auto=format&fit=crop" 
                        alt="Innovation Lab" 
                        className="w-100 object-fit-cover"
                        style={{ height: '550px' }}
                    />
                    <div className="position-absolute inset-0 bg-primary opacity-10 mix-blend-overlay"></div>
                 </motion.div>
                 
                 {/* Decorative Elements */}
                 <div className="position-absolute bottom-0 end-0 mb-n4 me-n4 rounded-circle bg-warning p-4 shadow-lg d-flex align-items-center justify-content-center z-2" style={{ width: '100px', height: '100px' }}>
                    <Zap size={40} className="text-dark" />
                 </div>
                 <div className="position-absolute top-0 start-0 mt-n4 ms-n4 w-50 h-50 bg-abstract-blob blob-primary z-0"></div>
             </div>
        </div>

        {/* Content Side */}
        <div className="col-lg-6">
            <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="ps-lg-4"
            >
                <h6 className="text-primary fw-bold text-uppercase mb-3" style={{ letterSpacing: '2px' }}>Future Forward</h6>
                <h2 className="display-4 fw-bold text-dark mb-4">
                    Innovating for <br/>
                    <span className="text-gradient">Tomorrow</span>
                </h2>
                
                <p className="lead text-muted mb-5">
                    We are constantly evolving to meet the digital age, integrating smart technologies into our manufacturing, logistics, and retail experiences.
                </p>

                <div className="row g-4 mb-5">
                    {[
                        { icon: Leaf, title: 'Sustainable Tech', desc: 'Eco-friendly manufacturing processes.' },
                        { icon: Cpu, title: 'Digital First', desc: 'AI-driven retail and logistics solutions.' }
                    ].map((item, i) => (
                        <div key={i} className="col-md-6">
                            <div className="d-flex gap-3">
                                <div className="bg-light rounded-circle p-3 h-auto align-self-start">
                                    <item.icon className="text-primary" size={24} />
                                </div>
                                <div>
                                    <h5 className="fw-bold mb-1">{item.title}</h5>
                                    <p className="text-muted small mb-0">{item.desc}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <button className="btn btn-custom shadow-lg">
                    Discover Innovations
                </button>
            </motion.div>
        </div>
      </div>
    </Section>
  );
};

export default Innovation;