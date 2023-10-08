import React, { useState, useEffect } from 'react';
import NAVBAR from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import BODY from './components/Body/Body';
import Collection from './components/Collection/Collection';
import Product from './components/Products/Product';
import Brands from './components/Brands/Brands';
import Footer from './components/Footer/Footer';
import Arrowup from './components/Arrowup/Arrowup';
import Loader from './components/NAMELOADER/Nameloader'; // Import the loader component

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate some asynchronous loading (e.g., data fetching) here
    setTimeout(() => {
      setLoading(false); // Set loading to false when loading is complete
    }, 7000); // You can adjust the time as needed
  }, []);

  return (
    <>
      {loading ? (
        <Loader /> // Show the loader if loading is true
      ) : (
        <>
          <NAVBAR />
          <Hero />
          <BODY />
          <Collection />
          <Product />
          <Brands />
          <Footer />
          <Arrowup />
        </>
      )}
    </>
  );
};

export default App;
