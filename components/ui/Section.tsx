import React, { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface SectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
  noPadding?: boolean;
  background?: 'white' | 'gray' | 'dark' | 'accent';
  abstractType?: 'none' | 'blobs' | 'mesh';
}

const Section: React.FC<SectionProps> = ({ 
  children, 
  className = '', 
  id, 
  noPadding = false,
  background = 'white',
  abstractType = 'none'
}) => {
  const bgClasses = {
    white: 'bg-white',
    gray: 'bg-light',
    dark: 'bg-dark text-white',
    accent: 'bg-dark text-white' // Dark base for accents to pop
  };

  const accentStyle = background === 'accent' ? { 
    background: 'linear-gradient(180deg, #2a0a25 0%, #4a0d44 100%)' 
  } : {};

  return (
    <section 
      id={id} 
      className={`position-relative overflow-hidden ${bgClasses[background]} ${noPadding ? '' : 'py-5 py-lg-6'}`}
      style={accentStyle}
    >
      {/* Abstract Backgrounds */}
      {abstractType === 'blobs' && (
        <>
          <div className="bg-abstract-blob blob-primary" style={{ width: '40vw', height: '40vw', top: '-10%', right: '-10%' }}></div>
          <div className="bg-abstract-blob blob-blue" style={{ width: '30vw', height: '30vw', bottom: '-5%', left: '-5%', opacity: 0.1 }}></div>
        </>
      )}

      {abstractType === 'mesh' && (
        <div className="position-absolute inset-0 w-100 h-100" style={{ 
          background: 'radial-gradient(circle at 50% 50%, rgba(126, 25, 116, 0.05) 0%, transparent 50%)',
          zIndex: 0
        }}></div>
      )}

      <div className={`container position-relative z-1 ${className}`}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          {children}
        </motion.div>
      </div>
    </section>
  );
};

export default Section;