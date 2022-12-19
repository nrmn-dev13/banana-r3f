import { Route, Routes } from "react-router-dom";
import { Suspense, useState } from "react";
import Canvas from "./layout/Canvas";
import Home from "./page/Home";
import About from "./page/About";
import Works from "./page/Works";
import { FadeIn, LeftMiddle } from "./layout/styles";

export default function App() {
  const [speed, set] = useState(1);
  return (
    <>
      <Suspense fallback={null}>
        <Canvas speed={speed} />
        <FadeIn />
      </Suspense>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/works" element={<Works />} />
      </Routes>
      {/* <Home /> */}
      {/* <LeftMiddle>
        <input type="range" min="0" max="10" value={speed} step="1" onChange={(e) => set(e.target.value)} />
      </LeftMiddle> */}
    </>
  );
}
