// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

import Home from "./pages/Home.tsx";

import About from "./pages/About.tsx";

import Farewell2025 from "./pages/gallery/2025/Farewell2025.tsx";
import Defy2025 from "./pages/gallery/2025/defy2025.tsx";
import Gradnight2025 from "./pages/gallery/2025/gradnight2025.tsx";
import Arc2025 from "./pages/arc/Arc2025.tsx";
import Ohana2026day1 from "./pages/gallery/2026/ohana2026day1.tsx";
import Ohana2026day2 from "./pages/gallery/2026/ohana2026day2.tsx";

import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="about/" element={<About />} />
      <Route path="arc/">
        <Route path="2025" element={<Arc2025 />} />
      </Route>
      <Route path="gallery/">
        <Route path="2025/">
          <Route path="defy2025" element={<Defy2025 />} />
          <Route path="farewell2025" element={<Farewell2025 />} />
          <Route path="gradnight2025" element={<Gradnight2025 />} />
        </Route>
        <Route path="2026/">
          <Route path="ohana2026day1" element={<Ohana2026day1 />} />
          <Route path="ohana2026day2" element={<Ohana2026day2 />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
