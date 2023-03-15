import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import "./styles.css";
import Conatctus from "./Pages/Contactus";

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/contact" element={<Conatctus />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
