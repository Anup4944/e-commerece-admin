import React from "react";
import "./login.css";
import { LockOpen, MailOutlined } from "@material-ui/icons";

export const Login = () => {
  return (
    <div className="container">
      <div className="wrapper">
        <form className="loginForm">
          <h1 className="header">Log In</h1>

          <div className="box">
            <MailOutlined className="icon" />
            <input
              type="email"
              name="email"
              id="email"
              placeholder="enter your email"
              className="inputContainer"
            />
          </div>

          <div className="box">
            <LockOpen className="icon" />
            <input
              className="inputContainer"
              type="password"
              name="password"
              id="password"
              placeholder="enter your password"
            />
          </div>
          <div className="bottomContainer">
            <button className="btn" type="submit" name="submit" id="submit">
              Sign In{" "}
            </button>
            <button className="btn" type="reset" name="reset" id="reset">
              Reset Password
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
