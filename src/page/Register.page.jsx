import React, { useEffect, useState } from "react";
import {
  ButtonComponent,
  ContainerComponent,
  ErrorComponent,
  FormComponent,
  LoadingComponent,
  PreventComponent,
} from "../components";
import { useNavigate } from "react-router-dom";
import { Register } from "../service/auth.service";
import useApi from "../hook/useApi";

const RegisterPage = () => {
  //using nav with useNavigate
  const nav = useNavigate();
  //custom hook
  const { handleDealApi, loading, error, data } = useApi(Register);
  //using formData with useState
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    password_confirmation: "",
  });
  //for data at useApi
  useEffect(() => {
    if (data) {
      nav("/");
    }
  }, [data]);
  //onChange for input
  const handleInputChange = (e) => {
    setFormData((pre) => ({ ...pre, [e.target.name]: e.target.value }));
  };
  //form subit
  const handleSubmit = async (e) => {
    e.preventDefault();
    // const res = await Register(formData);
    // console.log(res);
    handleDealApi(formData);
  };
  // console.log(loading, error, data);

  return (
    <PreventComponent fail={"/home"} check={localStorage.getItem("auth")}>
      <ContainerComponent>
        {loading ? (
          <LoadingComponent />
        ) : (
          <div className="Center">
            <div className="w-2/6 h-auto">
              <h1 className="font-serif text-4xl mb-5 text-center">
                Register Contact
              </h1>
              {error && <ErrorComponent>{error}</ErrorComponent>}
              <form onSubmit={handleSubmit} className="space-y-5 mt-5">
                <FormComponent
                  onChange={handleInputChange}
                  type="text"
                  name="name"
                  label={"Enter your Name"}
                  value={formData.name}
                />
                <FormComponent
                  onChange={handleInputChange}
                  type="email"
                  name="email"
                  label={"Enter your Email"}
                  placeholder="example@gmail.com"
                  value={formData.email}
                />
                <FormComponent
                  onChange={handleInputChange}
                  type="password"
                  name="password"
                  label={"Password"}
                  value={formData.password}
                />
                <FormComponent
                  onChange={handleInputChange}
                  type="password"
                  name="password_confirmation"
                  label={"password_confirmation"}
                  value={formData.password_confirmation}
                />
                <ButtonComponent style={"!rounded-lg"} type="submit">
                  Register
                </ButtonComponent>
              </form>
              <p className="mt-5">
                You have account please login{" "}
                <button
                  className="text-blue-600 underline"
                  onClick={() => nav("/")}
                >
                  Login
                </button>
              </p>
            </div>
          </div>
        )}
      </ContainerComponent>
    </PreventComponent>
  );
};

export default RegisterPage;
