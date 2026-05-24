import { Routes, Route } from "react-router-dom";

import Layout from "@/components/Layout";
import Home from "@/pages/Home";
import DemoUI from "@/pages/DemoUI";
import PracticeTest from "@/pages/PracticeTest";
import GenerateQuestions from "@/pages/GenerateQuestions";

export default function AppRoutes() {
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
