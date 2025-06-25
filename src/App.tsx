import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import CareersExplorer from './pages/CareersExplorer';
import CareerDetail from './pages/CareerDetail';
import CareerQuiz from './pages/CareerQuiz';
import About from './pages/About';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50 flex flex-col">
        <Header />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/careers" element={<CareersExplorer />} />
            <Route path="/career/:id" element={<CareerDetail />} />
            <Route path="/quiz" element={<CareerQuiz />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;