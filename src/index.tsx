import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "motion/react";

import "./style/index.css";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import DemoUI from "@/pages/DemoUI";
import MotionWrapper from "./functions/MotionWrapper";

function AppRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Layout />}>
          <Route
            index
            element={
              <MotionWrapper>
                {" "}
                <Home />{" "}
              </MotionWrapper>
            }
          />
        </Route>
        <Route
          path="/demo"
          element={
            <MotionWrapper>
              <DemoUI />
            </MotionWrapper>
          }
        />
      </Routes>
    </AnimatePresence>
  );
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  </StrictMode>,
);
