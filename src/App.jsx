import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Banner from './components/Banner/Banner';
import Stats from './components/Stats/Stats';
import Footer from './components/Footer/Footer';
import Pricing from './components/Pricing/Pricing';

const App = () => {
  return (
    <>
      <Navbar />
      <main>
        <Banner />
        <Stats />
        <Pricing />
      </main>
      <Footer />
    </>
  );
};

export default App;