import React, { useState, useEffect } from "react";
import "./login.css";
import { LockOpen, MailOutlined } from "@material-ui/icons";
import { useHistory } from "react-router-dom";
import { loginAction } from "./loginAction";
import { useDispatch, useSelector } from "react-redux";

const initialState = {
  email: "aj@w.com",
  password: "vangunneR45",
};

export const Login = () => {
  const [loginInfo, setLoginInfo] = useState(initialState);
  const { isAuth, status, message } = useSelector((state) => state.login);

  const history = useHistory();
  const dispatch = useDispatch();

  const handleOnChange = (e) => {
    const { name, value } = e.target;

    setLoginInfo({
      ...loginInfo,
      [name]: value,
    });
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    dispatch(loginAction(loginInfo));
  };

  useEffect(() => {
    if (isAuth) history.push("/home");
  }, [isAuth]);
  return (
    <div className="page">
      <div className="wrapper">
        <form className="loginForm " onSubmit={handleOnSubmit}>
          {status === "error"
            ? message && <span style={{ color: "tomato" }}>{message}</span>
            : null}
          <h1 className="header">Log In</h1>

          <div className="box">
            <MailOutlined className="icon" />
            <input
              type="email"
              name="email"
              id="email"
              value={loginInfo.email}
              onChange={handleOnChange}
              placeholder="enter your email"
              className="inputContainer"
              required
            />
          </div>

          <div className="box">
            <LockOpen className="icon" />
            <input
              className="inputContainer"
              type="password"
              name="password"
              id="password"
              onChange={handleOnChange}
              value={loginInfo.password}
              placeholder="enter your password"
              required
            />
          </div>
          <div className="bottomContainer">
            <button className="btn" type="submit" name="submit" id="submit">
              Sign In{" "}
            </button>
            <button className="btn" type="submit">
              Reset Password
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
