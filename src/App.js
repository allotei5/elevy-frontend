import { useState } from "react";
import { FiChevronLeft, FiCreditCard } from "react-icons/fi";
import logo from "./logo.svg";
import "./App.css";
import Dashboard from "./Dashboard.component";
import { Route, Routes } from "react-router-dom";
import Media from "./pages/Media.component";
import Home from "./pages/Home.component";
import Publication from "./pages/Publication.component";

function App() {

  return (
    <Routes>
      <Route exact path="/" element={<Dashboard />}>
        <Route index element={<Home />} />
        <Route path="/media" element={<Media />} />
        <Route path="/publication" element={<Publication />} />
      </Route>
    </Routes>
  );
}

export default App;
