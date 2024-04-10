import React from "react";
import { PreventComponent } from "../components";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const nav = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("auth");
    nav("/");
  };
  return (
    <PreventComponent fail={"/"} check={!localStorage.getItem("auth")}>
      <div className="font-serif flex justify-around items-center p-5">
        <h1 className="text-4xl">Home Page</h1>
        <button
          className="px-5 py-2.5 text-white bg-red-400 hover:ring-2 ring-red-600 rounded-lg text-center"
          onClick={handleLogout}
        >
          Log Out
        </button>
      </div>
    </PreventComponent>
  );
};

export default HomePage;
