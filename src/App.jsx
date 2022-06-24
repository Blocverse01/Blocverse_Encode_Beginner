import * as React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import "./App.css";
import Home from "./Home";
import Room from "./Room";
import AOS from "aos";
import "aos/dist/aos.css";

AOS.init();

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="rooms/:address" element={<Room />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
