// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

import Home from "./pages/Home.tsx";

import About from "./pages/About.tsx";

import Farewell2025 from "./pages/gallery/2025/Farewell2025.tsx";
import Defy2025 from "./pages/gallery/2025/defy2025.tsx";
import Arc2024 from "./pages/arc/Arc2024.tsx";

import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="about/" element={<About />} />
      <Route path="arc/">
        <Route path="2024" element={<Arc2024 />} />
      </Route>
      <Route path="gallery/">
        <Route path="2025/">
          <Route path="farewell2025" element={<Farewell2025 />} />
          <Route path="defy2025" element={<Defy2025 />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
