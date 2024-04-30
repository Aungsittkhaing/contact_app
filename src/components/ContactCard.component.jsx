import React from "react";
import { FaTrashAlt } from "react-icons/fa";
import { FaPencil } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

const ContactCardComponent = ({ data, handleDelete }) => {
  const nav = useNavigate();
  const handleRedirect = () => {
    nav(`/home/contact/${data.id}`);
  };
  const handleEdit = () => {
    console.log("Id is here bro", data.id);
    nav("/home/add", { state: { edit: true, data, id: data.id } });
  };
  // const handleDelete = () => {
  //   const res = deleteContact(data.id);
  //   console.log(res);
  // };
  return (
    <div className="w-2/4 h-auto border my-3 p-3 rounded-lg flex justify-between items-center">
      <button className="flex-1" onClick={handleRedirect}>
        <div className="">
          <h1>{data.name}</h1>
          <p>{data.phone}</p>
        </div>
      </button>
      <div className="space-x-3">
        <button onClick={handleEdit}>
          <FaPencil />
        </button>
        <button
          onClick={() => {
            if (window.confirm("Are you sure to delete?")) {
              handleDelete(data.id);
            }
          }}
        >
          <FaTrashAlt />
        </button>
      </div>
    </div>
  );
};

export default ContactCardComponent;
