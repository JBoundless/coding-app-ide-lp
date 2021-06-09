import React from "react";
import "./style.css";
import Header from './Components/Header.js';
import Cards from './Components/Cards.js';
import Footer from './Components/Footer.js';

export default function App() {
  return (
    <div>
      <Header />
      <h2>About</h2>
      <p>Code World was developed in San Francisco with the goal of people being able to code from anywhere without a laptop. Our UI is similar to other traditional IDEs but our features make us stand out from the crowd.</p>
    <h2>Check out our other features</h2>
    <Cards />
    <Footer />
    </div>
  );
}
