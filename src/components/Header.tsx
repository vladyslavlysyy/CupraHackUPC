import React from 'react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  return (
    <header className="bg-black py-4 sticky top-0 z-50 shadow-md">
      <div className="container mx-auto px-4 flex justify-center items-center">
        <div className="flex items-center">
          <Link to="/" className="flex items-center gap-3">
            <img src="/assets/images/logo.png" alt="CUPRA Logo" className="h-20" />
            <span className="text-white font-bold text-xl">CupraViewer</span>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;