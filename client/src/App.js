import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/home/Home";
import List from "./pages/list/List";
import Hotel from "./pages/hotel/Hotel";

import GlobalStyle from "./components/styles/Global.styled";
import { Login } from './components/Login';

function App() {
  return (
    <>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/hotels" element={<List />} />
        <Route path="/hotels/:id" element={<Hotel />} />
      </Routes>
    </>
  );
}

export default App;
