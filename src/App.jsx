import React from "react";
import { Routes, Route } from "react-router-dom";
import { HomePage, LoginPage, RegisterPage } from "./page";
const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/home" element={<HomePage />} />
      </Routes>
    </div>
  );
};

export default App;
