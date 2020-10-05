import React from 'react';
import './assets/styles/App.css';
import Footer from './components/Footer';
import Blog from './components/Blog';

function App() {
  return (
    <div className="app">
      <Blog />
      <Footer />
    </div>
  );
}

export default App;
