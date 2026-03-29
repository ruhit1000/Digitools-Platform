import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Banner from './components/Banner/Banner';

const App = () => {
  return (
    <>
      <Navbar />
      <main className='w-[95%] lg:container mx-auto'>
        <Banner />
      </main>
    </>
  );
};

export default App;