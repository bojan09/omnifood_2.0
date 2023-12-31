import React from "react";

// components
import { Navbar, Footer } from "./components";

// pages
import {
  Home,
  Sponsors,
  HowItWorks,
  About,
  Testimonials,
  Meals,
  Pricing,
  Contact,
} from "./pages";

const App = () => {
  return (
    <div>
      <Navbar />
      <Home />
      <Sponsors />
      <HowItWorks />
      <Meals />
      <Testimonials />
      <Pricing />
      <About />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
