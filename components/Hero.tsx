import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Play, TrendingUp } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <div id="home" className="position-relative w-100 vh-100 overflow-hidden d-flex align-items-center bg-dark">
      {/* Dynamic Background */}
      <div className="position-absolute top-0 start-0 w-100 h-100 z-0">
         <img 
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop" 
            alt="Corporate Skyline"
            className="w-100 h-100 object-fit-cover opacity-50"
         />
         {/* Gradient Overlay */}
         <div className="position-absolute top-0 start-0 w-100 h-100" 
              style={{ background: 'linear-gradient(90deg, #1a0517 0%, rgba(74, 13, 68, 0.8) 60%, rgba(126, 25, 116, 0.4) 100%)' }}>
         </div>
      </div>

      <div className="container position-relative z-2">
        <div className="row align-items-center">
          {/* Text Content - Visual Hierarchy Lvl 1 */}
          <div className="col-lg-7 text-white mb-5 mb-lg-0">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="d-inline-flex align-items-center gap-2 mb-4 px-3 py-1 rounded-pill border border-white border-opacity-25 bg-white bg-opacity-10 backdrop-blur-sm">
                <span className="badge rounded-pill bg-primary">NEW</span>
                <span className="small fw-bold tracking-wide">Q3 Financial Report Released</span>
              </div>

              <h1 className="display-1 fw-bold mb-4 lh-1 tracking-tight">
                One Abans. <br />
                <span className="text-transparent" style={{ 
                    background: 'linear-gradient(to right, #fff, #d4d4d4)', 
                    WebkitBackgroundClip: 'text', 
                    WebkitTextFillColor: 'transparent' 
                }}>Limitless Future.</span>
              </h1>
              
              <p className="lead mb-5 text-white-50 w-75 text-balance">
                United under one home, we empower lives through innovation, diversity, and trust. Explore the diversified world of Abans Group.
              </p>

              <div className="d-flex flex-wrap gap-3">
                <motion.button 
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="btn btn-custom btn-lg d-flex align-items-center gap-2 shadow-lg"
                >
                  Explore Our World <ArrowRight size={20} />
                </motion.button>
                <motion.button 
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="btn btn-outline-light btn-lg rounded-pill px-4 fw-bold"
                >
                  Investor Relations
                </motion.button>
              </div>
            </motion.div>
          </div>

          {/* Video Widget - Visual Hierarchy Lvl 2 */}
          <div className="col-lg-5 d-none d-lg-block">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 50 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="position-relative ms-auto"
              style={{ maxWidth: '450px' }}
            >
                {/* Floating Video Card */}
                <div className="card border-0 rounded-5 shadow-lg overflow-hidden animate-float bg-dark" style={{ borderRadius: '32px' }}>
                    <div className="position-relative">
                        {/* Simulated Video Player */}
                        <div style={{ paddingBottom: '100%', position: 'relative', overflow: 'hidden' }}>
                           <img 
                                src="https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=1548&auto=format&fit=crop"
                                className="position-absolute top-0 start-0 w-100 h-100 object-fit-cover opacity-75"
                                alt="Video Thumbnail"
                           />
                           <div className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center">
                              <div className="bg-white bg-opacity-20 backdrop-blur-md rounded-circle p-4 cursor-pointer hover-scale transition-transform">
                                <Play size={32} fill="white" className="text-white" />
                              </div>
                           </div>
                        </div>
                        
                        {/* Floating Stats on Video */}
                        <div className="position-absolute bottom-0 start-0 w-100 p-4 bg-gradient-to-t from-black to-transparent">
                            <div className="d-flex justify-content-between align-items-end text-white">
                                <div>
                                    <h5 className="fw-bold mb-1">Corporate Showreel</h5>
                                    <p className="small mb-0 opacity-75">50 Years of Excellence</p>
                                </div>
                                <span className="badge bg-white text-dark rounded-pill px-3 py-2 fw-bold">02:30</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Decorative Blur behind */}
                <div className="position-absolute top-50 start-50 translate-middle rounded-circle" 
                     style={{ width: '120%', height: '120%', background: 'radial-gradient(circle, rgba(126,25,116,0.4) 0%, transparent 70%)', zIndex: -1, filter: 'blur(60px)' }}>
                </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;