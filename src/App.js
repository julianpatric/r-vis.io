import About from "./pages/About";
import "./App.css";
import ProjectDetail from "./pages/ProjectDetail";
import Contact from "./pages/Contact";
import Test from "./pages/Test";
import Typography from "./pages/Typography";
import { Home } from "./pages/Home";
import { Routes, Route, BrowserRouter, useLocation } from "react-router-dom";
import { SpeedInsights } from "@vercel/speed-insights/react";
import NotFound from "./pages/NotFound";
import { useEffect } from "react";
import Lenis from "lenis";
import { motion, AnimatePresence } from "motion/react";

const PageTransition = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
    >
      {children}
    </motion.div>
  );
};

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait" onExitComplete={() => window.scrollTo(0, 0)}>
      <Routes location={location} key={location.pathname}>
        <Route
          path="/"
          element={
            <PageTransition>
              <Home />
            </PageTransition>
          }
        />
        <Route
          path="/about"
          element={
            <PageTransition>
              <About />
            </PageTransition>
          }
        />
        <Route
          path="/contact"
          element={
            <PageTransition>
              <Contact />
            </PageTransition>
          }
        />
        <Route
          path="/projects/:slug"
          element={
            <PageTransition>
              <ProjectDetail />
            </PageTransition>
          }
        />
        <Route
          path="/test"
          element={
            <PageTransition>
              <Test />
            </PageTransition>
          }
        />
        <Route
          path="/*"
          element={
            <PageTransition>
              <NotFound />
            </PageTransition>
          }
        />
        <Route
          path="/type"
          element={
            <PageTransition>
              <Typography />
            </PageTransition>
          }
        />
      </Routes>
    </AnimatePresence>
  );
};

function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: "vertical",
      gestureDirection: "vertical",
      smooth: true,
      smoothTouch: false,
      touchMultiplier: 2,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <>
      <BrowserRouter>
        <AnimatedRoutes />
      </BrowserRouter>
      <SpeedInsights />
    </>
  );
}

export default App;
