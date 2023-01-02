import { Route, Routes, useLocation } from "react-router-dom";
import Home from "../page/Home";
import Works from "../page/Works";
import About from "../page/About";
import { AnimatePresence } from "framer-motion";

const AnimatedRoutes = () => {
  const location = useLocation();
  return (
    <AnimatePresence initial={false} mode={'wait'}>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/works" element={<Works />} />
      </Routes>
    </AnimatePresence>
  );
};

export default AnimatedRoutes;
