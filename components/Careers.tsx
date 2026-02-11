import React from 'react';

const Careers: React.FC = () => {
  return (
    <div id="careers" className="position-relative py-5 overflow-hidden text-white" style={{ minHeight: '500px', display: 'flex', alignItems: 'center' }}>
        {/* Background Image */}
        <div className="position-absolute top-0 start-0 w-100 h-100">
            <img 
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071&auto=format&fit=crop" 
                alt="Careers at Abans" 
                className="w-100 h-100 object-fit-cover"
            />
            <div className="position-absolute top-0 start-0 w-100 h-100" style={{ background: 'linear-gradient(90deg, rgba(74,13,68,0.95) 0%, rgba(0,0,0,0.7) 100%)' }}></div>
        </div>
        
        <div className="container position-relative z-2">
            <div className="row">
                <div className="col-lg-7">
                    <h2 className="display-3 fw-bold mb-4">Build Your Future With Us</h2>
                    <p className="lead mb-5 opacity-75">
                        Join a diverse family of over 10,000 professionals. Be part of a culture that champions innovation, integrity, and growth.
                    </p>
                    <div className="d-flex gap-3 flex-wrap">
                        <button className="btn btn-light rounded-pill px-4 py-3 fw-bold text-primary">
                            View Open Positions
                        </button>
                        <button className="btn btn-outline-light rounded-pill px-4 py-3 fw-bold">
                            Life at Abans
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
};

export default Careers;