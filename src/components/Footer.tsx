import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black py-12 border-t border-neutral-800">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center md:justify-start mb-8">
          <Link to="/" className="flex items-center gap-3">
            <img src="/assets/images/logo.png" alt="CUPRA Logo" className="h-8" />
            <span className="text-white font-bold text-xl">CupraViewer</span>
          </Link>
        </div>
        
        <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
          <p className="text-gray-400 text-sm">&copy; 2023 CupraViewer. All rights reserved.</p>
          
          <div className="flex gap-6">
            <Link to="/" className="text-gray-400 text-sm hover:text-red-600 transition-colors">
              Privacy Policy
            </Link>
            <Link to="/" className="text-gray-400 text-sm hover:text-red-600 transition-colors">
              Terms and Conditions
            </Link>
            <Link to="/" className="text-gray-400 text-sm hover:text-red-600 transition-colors">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;