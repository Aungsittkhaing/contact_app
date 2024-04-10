import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const PreventComponent = ({ fail, children, check }) => {
  const nav = useNavigate();

  useEffect(() => {
    if (check) {
      nav(fail);
    }
  }, []);
  return <>{children}</>;
};

export default PreventComponent;
