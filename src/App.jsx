import React, { Suspense, useState } from 'react';
import Navbar from './components/Navbar/Navbar';
import BannerTop from './components/Banner/BannerTop';
import Stats from './components/Stats/Stats';
import Footer from './components/Footer/Footer';
import Pricing from './components/Pricing/Pricing';
import GetStarted from './components/GetStarted/GetStarted';
import BannerBottom from './components/Banner/BannerBottom';
import Products from './components/Products/Products';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';

const productsPromise = axios.get('/products.json');

const App = () => {
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);

  const handleCart = (product) => {
    setCart((prevCart) => [...prevCart, product])
    setTotal((prevTotal) => prevTotal + product.price)
    toast.success('Product added to cart', { position: "top-left" })
  }

  const handleRemove = (product) => {
    setCart((prevCart) => prevCart.filter((i) => i.id !== product.id))
    setTotal((prevTotal) => prevTotal - product.price)
    toast.success('Product removed from your cart', { position: "top-left" })
  }


  return (
    <>
      <Navbar cart={cart} />
      <main>
        <BannerTop />
        <Stats />
        <Suspense fallback={<span className="loading loading-dots loading-xl mx-auto block my-15"></span>}>
          <Products handleRemove={handleRemove} cart={cart} handleCart={handleCart} productsPromise={productsPromise} total={total} />
        </Suspense>
        <GetStarted />
        <Pricing />
        <BannerBottom />
      </main>
      <Footer />
      <ToastContainer />
    </>
  );
};

export default App;