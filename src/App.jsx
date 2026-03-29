import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Banner from './components/Banner/Banner';
import Stats from './components/Stats/Stats';
import Footer from './components/Footer/Footer';

const App = () => {
  return (
    <>
      <Navbar />
      <main>
        <Banner />
        <Stats />
      </main>
      <Footer />
    </>
  );
};

export default App;