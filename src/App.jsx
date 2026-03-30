import React, { Suspense } from 'react';
import Navbar from './components/Navbar/Navbar';
import BannerTop from './components/Banner/BannerTop';
import Stats from './components/Stats/Stats';
import Footer from './components/Footer/Footer';
import Pricing from './components/Pricing/Pricing';
import GetStarted from './components/GetStarted/GetStarted';
import BannerBottom from './components/Banner/BannerBottom';
import Products from './components/Products/Products';
import axios from 'axios';

const productsPromise = axios.get('/products.json');

const App = () => {
  return (
    <>
      <Navbar />
      <main>
        <BannerTop />
        <Stats />
        <Suspense>
          <Products productsPromise={productsPromise} />
        </Suspense>
        <GetStarted />
        <Pricing />
        <BannerBottom />
      </main>
      <Footer />
    </>
  );
};

export default App;