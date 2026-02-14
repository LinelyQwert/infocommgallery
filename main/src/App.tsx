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
import Ohana2026day3 from "./pages/gallery/2026/ohana2026day3.tsx";
import Ohana2026day4 from "./pages/gallery/2026/ohana2026day4.tsx";
import Ohana2026day5 from "./pages/gallery/2026/ohana2026day5.tsx";
import Ccafair2026 from "./pages/gallery/2026/ccafair2026.tsx";
import Cheerios2026 from "./pages/gallery/2026/cheerios2026.tsx";
// import Ofest2026 from "./pages/gallery/2026/ofest2026.tsx";
// import Gamesday2026 from "./pages/gallery/2026/gamesday2026.tsx";

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
          <Route path="ohana2026day3" element={<Ohana2026day3 />} />
          <Route path="ohana2026day4" element={<Ohana2026day4 />} />
          <Route path="ohana2026day5" element={<Ohana2026day5 />} />
          <Route path="ccafair2026" element={<Ccafair2026 />} />
          <Route path="cheerios2026" element={<Cheerios2026 />} />
          {/* <Route path="ofest2026" element={<Ofest2026 />} /> */}
          {/* <Route path="gamesday2026" element={<Gamesday2026 />} /> */}
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
