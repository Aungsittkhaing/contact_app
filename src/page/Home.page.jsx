import React, { useEffect } from "react";
import { PreventComponent } from "../components";
import { Outlet, useNavigate } from "react-router-dom";
import { getProfile } from "../service/auth.service";

const HomePage = () => {
  const nav = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("auth");
    nav("/");
  };
  useEffect(() => {
    (async () => {
      const res = await getProfile();
    })();
  }, []);

  const handleAdd = () => {
    nav("/home/add");
  };
  return (
    <PreventComponent fail={"/"} check={!localStorage.getItem("auth")}>
      <div className="container mx-auto h-screen">
        <div className="w-[80%] mx-auto h-full">
          <nav className="flex justify-between items-center px-2 py-3 shadow">
            <h1>Home Contact</h1>

            <div className="">
              <button
                className="px-5 py-2.5 me-1 text-white bg-blue-400 hover:ring-2 ring-blue-600 rounded-lg text-center"
                onClick={handleAdd}
              >
                Add
              </button>
              <button
                className="px-5 py-2.5 text-white bg-red-400 hover:ring-2 ring-red-600 rounded-lg text-center"
                onClick={handleLogout}
              >
                Logout
              </button>
            </div>
          </nav>
          <Outlet />
        </div>
      </div>
    </PreventComponent>
  );
};

export default HomePage;
