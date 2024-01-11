// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Portfolio from './pages/Portfolio'; // Assuming you have a Portfolio.js
import Contact from './pages/Contact'; // Assuming you have a Contact.js
import './App.css'; // Assuming you have an App.css for global styles

const App = () => {
  return (
    <Router>
      <div className="App">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} exact />
            <Route path="/about" element={<About />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/contact" element={<Contact />} />
            {/* Add additional Routes here if needed */}
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
