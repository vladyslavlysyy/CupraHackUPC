import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import ModelDetailsPage from './pages/ModelDetailsPage';
import { ModelsProvider } from './context/ModelsContext';
import './styles/global.css';

function App() {
  return (
    <ModelsProvider>
      <Router>
        <div className="min-h-screen bg-black text-white">
          <Header />
          <main>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/model/:id" element={<ModelDetailsPage />} />
            </Routes>
          </main>
        </div>
      </Router>
    </ModelsProvider>
  );
}

export default App;