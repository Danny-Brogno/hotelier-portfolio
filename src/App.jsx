import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';

import { HomePage } from './pages/homepage.jsx';
import { ResumePage } from './pages/resumepage.jsx';
import { ContactPage } from './pages/contactpage.jsx';
import { Navbar } from './components/navbar.jsx';
import { Footer } from './components/footer.jsx';

// CSS IMPORTS (Kept right here!)
import './style-tricsy.css';
import './style-danny.css';

// 1. This component replaces your old useEffect. 
// It watches the URL path and resets the scroll instantly on every page change.
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    requestAnimationFrame(() => {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'instant'
      });
    });
  }, [pathname]); // Fires every time the URL path changes

  return null;
}

function App() {
  return (
    <Router>
      <ScrollToTop /> {/* Keeps your smooth animation logic intact */}
      <div id="App">
        {/* Header/Navbar stays visible on ALL pages */}
        <Navbar /> 
        
        {/* Dynamic page switching happens right here based on the URL */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/resume" element={<ResumePage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
        
        {/* Footer stays visible on ALL pages */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;