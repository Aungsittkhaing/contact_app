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
import useApi from "../hook/useApi";
import { Login } from "../service/auth.service";
import { useDispatch, useSelector } from "react-redux";
import { LoginAction } from "../store/actions/auth.action";

const LoginPage = () => {
  //using formData with useState
  const [formData, setFormData] = useState({ email: "", password: "" });
  //using nav with useNavigate
  const nav = useNavigate();
  //use selector
  const { loading, error, data, auth } = useSelector((store) => store.auth);
  const dispatch = useDispatch();

  //custom hook
  // const { handleDealApi, loading, error, data } = useApi(Login);

  //onChange for input
  const handleInputChange = (e) => {
    setFormData((pre) => ({ ...pre, [e.target.name]: e.target.value }));
  };

  //for data at useApi
  useEffect(() => {
    if (data) {
      nav("/home");
    }
  }, [data]);

  //form submit
  const handleSubmit = (e) => {
    e.preventDefault();
    // handleDealApi(formData);
    LoginAction(dispatch, formData);
  };
  return (
    <PreventComponent fail={"/home"} check={localStorage.getItem("auth")}>
      <ContainerComponent>
        {loading ? (
          <LoadingComponent />
        ) : (
          <div className="Center">
            <div className="w-2/6 h-auto">
              <h1 className="font-serif text-4xl mb-5 text-center">
                Login Contact
              </h1>
              {error && <ErrorComponent>{error}</ErrorComponent>}
              <form className="space-y-5 mt-5" onSubmit={handleSubmit}>
                <FormComponent
                  type={"email"}
                  name={"email"}
                  label={"Enter your Email"}
                  placeholder="example@gmail.com"
                  value={formData.email}
                  onChange={handleInputChange}
                />
                <FormComponent
                  type={"password"}
                  name={"password"}
                  label={"Password"}
                  value={formData.password}
                  onChange={handleInputChange}
                />
                <ButtonComponent style={"!rounded-lg"} type="submit">
                  Login
                </ButtonComponent>
              </form>
              <p className="mt-5">
                You haven't account please register{" "}
                <button
                  className="text-blue-600 underline"
                  onClick={() => nav("/register")}
                >
                  Register
                </button>
              </p>
            </div>
          </div>
        )}
      </ContainerComponent>
    </PreventComponent>
  );
};

export default LoginPage;
