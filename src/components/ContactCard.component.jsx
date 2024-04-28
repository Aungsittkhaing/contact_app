import React from "react";
import { useNavigate } from "react-router-dom";

const ContactCardComponent = ({ data }) => {
  const nav = useNavigate();
  const handleRedirect = () => {
    nav(`/home/contact/${data.id}`);
  };
  return (
    <button className="w-2/4 h-auto border" onClick={handleRedirect}>
      <h1>{data.name}</h1>
      <p>{data.phone}</p>
    </button>
  );
};

export default ContactCardComponent;
