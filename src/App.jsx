import { Suspense, useState } from "react";
import Canvas from "./layout/Canvas";
import Header from "./components/Header";
import AnimatedRoutes from "./components/AnimatedRoutes";
import { FadeIn, LeftMiddle } from "./layout/styles";
import { useLocation } from "react-router-dom";
import { motion as m } from "framer-motion";

export default function App() {
  const [speed, set] = useState(1);
  const location = useLocation();
  return (
    <>
      <Header />
      <div className="fixed top-0 left-0 right-0 bottom-0 z-0">
        <Suspense fallback={null}>
          <Canvas speed={speed} />
          <FadeIn />
        </Suspense>
      </div>
      <main className="relative z-10 flex-auto container mx-auto px-4">
        <AnimatedRoutes />
        {/* <Home /> */}
        {location.pathname === "/" ? (
          <m.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            exit={{ opacity: 0 }}
          >
            <LeftMiddle>
              <input
                type="range"
                min="0"
                max="10"
                value={speed}
                step="1"
                onChange={(e) => set(e.target.value)}
              />
            </LeftMiddle>
          </m.div>
        ) : null}
      </main>
    </>
  );
}
