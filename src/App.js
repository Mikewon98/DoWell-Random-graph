import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SubScribeNewsletter from "./components/SubScribeNewsletter";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<SubScribeNewsletter />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
