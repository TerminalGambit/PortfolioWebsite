// src/App.js
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './pages/Home';
import About from './pages/About';
// Import other pages similarly

const App = () => {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        {/* Define other Routes similarly */}
      </Switch>
      <Footer />
    </>
  );
};

export default App;

