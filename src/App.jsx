import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ProductDetails from './pages/ProductDetails';
import SideBar from './components/SideBar';
import Header from './components/Header';
import Footer from './components/Footer';

const App = () => {
  return (
    <>
      <div className='overflow-hidden'>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/product/:id' element={<ProductDetails />} />
          </Routes>
          <SideBar />
          <Footer />
        </BrowserRouter>
      </div>
    </>
  )
}

export default App