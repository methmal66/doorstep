import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PreviewPage from "./index/PreviewPage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PreviewPage />} />
      </Routes>
    </BrowserRouter>
  );
}
