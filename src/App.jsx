import React from "react";
import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";

import Hero from "./components/Hero";
import Highlight from "./components/Highlight";
import Navbar from "./components/Navbar";
import PopularSale from "./components/PopularSale";
import Story from "./components/Story";
import TopRated from "./components/TopRated";
import Cart from "./components/Cart";
import Wishlist from "./components/Wishlist";
import {
  footerAPI,
  heroapi,
  highlight,
  popularsales,
  sneaker,
  story,
  topratesales,
} from "./data/data";
const App = () => {
  return (
    <div className="bg-gray-200">
      <Navbar />

      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero heroapi={heroapi} />,
              <PopularSale popularsales={popularsales} />,
              <Highlight endpoint={highlight} />,
              <TopRated topratesales={topratesales} />,
              <Highlight endpoint={sneaker} />,
              <Story story={story} />,
              <Footer footerAPI={footerAPI} />,
            </>
          }
        />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </div>
  );
};

export default App;
