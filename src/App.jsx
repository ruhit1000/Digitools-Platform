import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Banner from './components/Banner/Banner';
import Stats from './components/Stats/Stats';

const App = () => {
  return (
    <>
      <Navbar />
      <main>
        <Banner />
        <Stats />
      </main>
    </>
  );
};

export default App;