import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Banner from './components/Banner/Banner';
import Stats from './components/Stats/Stats';
import Footer from './components/Footer/Footer';
import Pricing from './components/Pricing/Pricing';
import GetStarted from './components/GetStarted/GetStarted';

const App = () => {
  return (
    <>
      <Navbar />
      <main>
        <Banner />
        <Stats />
        <GetStarted />
        <Pricing />
      </main>
      <Footer />
    </>
  );
};

export default App;