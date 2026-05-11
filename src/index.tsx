import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./style/index.css";
import Layout from "@/components/Layout";
import Home from "@/pages/Home";
import DemoUI from "@/pages/DemoUI";
import PracticeTest from "@/pages/PracticeTest";
import GenerateQuestions from "@/pages/GenerateQuestions";

function AppRoutes() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/demo" element={<DemoUI />} />
        <Route path="/practice-test" element={<PracticeTest />} />
        <Route path="/generate-questions" element={<GenerateQuestions />} />
      </Route>
    </Routes>
  );
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  </StrictMode>,
);
