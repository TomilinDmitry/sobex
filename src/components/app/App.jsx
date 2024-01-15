import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from '../footer/footer';
import Header from '../header/header';
import Main from '../main/main';
import Explore from '../Explore/explore';
import './App.css';
import ProductCard from '../ProductCard/productCard';

function App() {
  return (
    <div className="App">
      <Header/>
      <Router>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/explore" element={<Explore />} />
          <Route path='/productCard' element={<ProductCard/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
