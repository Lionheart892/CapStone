import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import ProductList from './components/ProductList';
import ProductDetail from './components/ProductDetail';
import Login from './components/Login';
import SignUp from './components/Signup';
import Cart from './components/Cart';
import Checkout from './components/Checkout';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route exact path="/" component={ProductList} />
          <Route path="/product/:id" component={ProductDetail} />
          <Route path="/Login" component={Login} />
          <Route path="/Signup" component={SignUp} />
          <Route path="/Cart" component={Cart} />
          <Route path="/Checkout" component={Checkout} />
        </Routes>
        <ProductList />
      </div>
    </Router>
  );
}

export default App;