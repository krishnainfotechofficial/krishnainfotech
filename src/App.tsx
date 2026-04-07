import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import SplashScreen from './components/SplashScreen';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Projects from './pages/Projects';
import Founders from './pages/Founders';
import Contact from './pages/Contact';
import './App.css'

function App() {
  const [showSplash, setShowSplash] = useState(() => {
    // Check if splash screen has already been shown in this session
    return !sessionStorage.getItem('splashShown');
  });

  useEffect(() => {
    if (showSplash) {
      // Mark that splash screen has been shown
      sessionStorage.setItem('splashShown', 'true');
    }
  }, [showSplash]);

  const handleSplashFinish = () => {
    setShowSplash(false);
  };

  return (
    <Router>
      {showSplash && <SplashScreen onFinish={handleSplashFinish} />}
      <ScrollToTop />
      <div className="app-wrapper">
        <Navigation />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/founders" element={<Founders />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App
