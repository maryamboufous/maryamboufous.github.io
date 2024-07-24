// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Accounts/Login';
import Sign from './components/Accounts/Sign';
import AllCats from './components/AllCats';
import FranceListings from './components/FranceListings';
import MoroListings from './components/MoroListings';
import Product from './components/Product';
import Profile from './components/Profile';
import AddProductForm from './components/AddProductForm';
import Favoris from './components/Favoris';
import Messages from './components/Messages';
import Store from './components/Store';
import EditProduct from './components/EditProduct';
import CategoryProducts from './components/CategoryProducts';
import Cart from './components/Cart';
import Buy from './components/Buy';
import { UserProvider } from './context/UserContext';
import Uppernav from './components/Uppernav';
import SecondaryNav from './components/SecondaryNav';
import './App.css';

const App = () => {
  const location = useLocation();

  const showSecondaryNav = location.pathname.startsWith('/Profile') ||
                           location.pathname.startsWith('/Cart') ||
                           location.pathname.startsWith('/store') ||
                           location.pathname.startsWith('/Favoris');

  return (
    <div className="app">
      <UserProvider>
        <Uppernav userLoggedIn={true} />
        {showSecondaryNav && <SecondaryNav />}
        <Routes>
          <Route path="/Home" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Sign />} />
          <Route path="/France" element={<FranceListings />} />
          <Route path="/Morroco" element={<MoroListings />} />
          <Route path="/Product/:productId" element={<Product />} />
          <Route path="/Profile" element={<Profile />} />
          <Route path="/Favoris" element={<Favoris />} />
          <Route path="/Cart" element={<Cart />} />
          <Route path="/Buy" element={<Buy />} />
          <Route path="/" element={<Home />} />
          <Route path="/Messages" element={<Messages />} />
          <Route path="/Allcategories" element={<AllCats />} />
          <Route path="/userpage" element={<Home />} />
          <Route path="/userpage/add-product-form" element={<AddProductForm />} />
          <Route path="/store" element={<Store />} />
          <Route path="/edit-product/:productId" element={<EditProduct />} />
          <Route path="/all-categories" element={<AllCats />} />
          <Route path="/products/category/:category" element={<CategoryProducts />} />
        </Routes>
      </UserProvider>
    </div>
  );
};

export default App;
