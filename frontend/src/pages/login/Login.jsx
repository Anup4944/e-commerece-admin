import React, { useState, useEffect } from "react";
import "./login.css";
import {
  LockOpen,
  MailOutlined,
  RemoveRedEyeOutlined,
  VisibilityOff,
} from "@material-ui/icons";
import { useHistory } from "react-router-dom";
import { loginAction } from "./loginAction";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

const initialState = {
  email: "aj@w.com",
  password: "aspirinE@49",
};

export const Login = () => {
  const [loginInfo, setLoginInfo] = useState(initialState);
  const [show, setShow] = useState(true);
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
              type={show ? "password" : "text"}
              name="password"
              id="password"
              onChange={handleOnChange}
              value={loginInfo.password}
              placeholder="enter your password"
              required
            />
            {show ? (
              <VisibilityOff onClick={() => setShow(false)} />
            ) : (
              <RemoveRedEyeOutlined onClick={() => setShow(true)} />
            )}
          </div>
          <div className="bottomContainer">
            <button className="btn" type="submit" name="submit" id="submit">
              Sign In{" "}
            </button>
            <Link className="link" to="/enter-email">
              <button className="btn" type="submit">
                Reset Password
              </button>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};
