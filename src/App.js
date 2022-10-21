import React from 'react';
import Navigation from './components/Navigation';
import Homepage from './components/Homepage';
import Footer from './components/Footer';

import './App.css';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Homepage />
      <Footer />
    </div>
  );
}

export default App;
