import React from "react";
import { Routes, Route } from "react-router-dom";
import {
  ContactAddPage,
  ContactPage,
  DetailContactPage,
  HomePage,
  LoginPage,
  RegisterPage,
} from "./page";
const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/home" element={<HomePage />}>
          <Route index element={<ContactPage />} />
          <Route path="add" element={<ContactAddPage />} />
          <Route path="contact/:id" element={<DetailContactPage />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
