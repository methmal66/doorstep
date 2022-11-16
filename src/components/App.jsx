import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PreviewPage from "./PreviewPage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PreviewPage />} />
      </Routes>
    </BrowserRouter>
  );
}
