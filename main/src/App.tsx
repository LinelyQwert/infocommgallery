// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

import Home from "./pages/Home.tsx";
import About from "./pages/About.tsx";

import Farewell2025 from "./pages/gallery/Farewell2025.tsx";
import StaffDay2025 from "./pages/gallery/StaffDay2025.tsx";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />

        <Route path="/gallery/">
          <Route path="farewell2025" element={<Farewell2025 />} />
          <Route path="staffday2025" element={<StaffDay2025 />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
