import React from "react";
import "./App.scss";
import { Navbar, SocialMedia } from "./components";
import { About, Footer, Header, Work } from "./container";
import Skills from "./container/Skills/Skills";

const App = () => (
  <div className="app">
    <Navbar />
    <Header />
    <About />
    <Work />
    <Skills />
    <Footer />
    <SocialMedia />

    {/* <Testimonial /> */}
  </div>
);

export default App;
