import React, { useEffect, useState } from "react";
import { ButtonComponent, FormComponent } from "../components";
import { addNewContact, editContact } from "../service/contact.service";
import { useLocation, useNavigate } from "react-router-dom";

const ContactAddPage = () => {
  const nav = useNavigate();
  const location = useLocation();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
  });
  useEffect(() => {
    if (location.state?.edit) {
      const { name, email, phone, address } = location.state.data;
      setFormData({ name, email, phone, address });
    }
  }, [location]);
  const handleFormDataChange = (e) => {
    setFormData((pre) => ({ ...pre, [e.target.name]: e.target.value }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    let res;
    if (location.state?.edit) {
      res = await editContact(location.state.id, formData);
    } else {
      res = await addNewContact(formData);
    }
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
          <ButtonComponent type="submit">
            {location.state?.edit ? "Edit Contact" : "Create Contact"}
          </ButtonComponent>
        </form>
      </div>
    </div>
  );
};

export default ContactAddPage;
