import React, { useState } from "react";
import { ButtonComponent, FormComponent } from "../components";
import { addNewContact } from "../service/contact.service";
import { useNavigate } from "react-router-dom";

const ContactAddPage = () => {
  const nav = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
  });
  const handleFormDataChange = (e) => {
    setFormData((pre) => ({ ...pre, [e.target.name]: e.target.value }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    let res = await addNewContact(formData);
    console.log(res);
    if (res) {
      nav("/home");
    }
  };
  return (
    <div className="Center">
      <div className="w-3/5 h-auto shadow px-6 py-7 border">
        <h1 className="font-serif text-xl mb-10 text-center">
          Create Your Contact
        </h1>
        <form className="space-y-5" onSubmit={handleSubmit}>
          <FormComponent
            type="text"
            name="name"
            label={"Name"}
            value={formData.name}
            onChange={handleFormDataChange}
          />
          <FormComponent
            type="text"
            name="email"
            label={"Email"}
            value={formData.email}
            onChange={handleFormDataChange}
          />
          <FormComponent
            type="text"
            name="phone"
            label={"Phone"}
            value={formData.phone}
            onChange={handleFormDataChange}
          />
          <FormComponent
            type="text"
            name="address"
            label={"Address"}
            value={formData.address}
            onChange={handleFormDataChange}
          />
          <ButtonComponent type="submit">Create Contact</ButtonComponent>
        </form>
      </div>
    </div>
  );
};

export default ContactAddPage;
