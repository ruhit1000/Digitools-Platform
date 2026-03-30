import React from 'react';
import Navbar from './components/Navbar/Navbar';
import BannerTop from './components/Banner/BannerTop';
import Stats from './components/Stats/Stats';
import Footer from './components/Footer/Footer';
import Pricing from './components/Pricing/Pricing';
import GetStarted from './components/GetStarted/GetStarted';
import BannerBottom from './components/Banner/BannerBottom';

const App = () => {
  return (
    <>
      <Navbar />
      <main>
        <BannerTop />
        <Stats />
        <GetStarted />
        <Pricing />
        <BannerBottom />
      </main>
      <Footer />
    </>
  );
};

export default App;