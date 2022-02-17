import React, { useState } from "react";
import Img from "../login/bg1.jpg";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { getPassOtpAction } from "./passAction";

export const EnterEmail = () => {
  const [email, setEmail] = useState("");

  const { message, status } = useSelector((state) => state.passwordReset);

  const history = useHistory();
  const dispatch = useDispatch();

  const handleOnChange = (e) => {
    setEmail(e.target.value);
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    dispatch(getPassOtpAction(email));

    status === "success"
      ? history.push("/update-password")
      : history.push("/enter-email");
  };
  return (
    <div
      style={{
        margin: "0",
        padding: "0",
        height: "100vh",
        width: "100vw",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundImage: `url(${Img})`,
        backgroundSize: "cover",
        objectFit: "cover",
      }}
    >
      <form
        autoComplete="off"
        style={{ width: "25%" }}
        onSubmit={handleOnSubmit}
      >
        {status === "error"
          ? message && <span style={{ color: "tomato" }}>{message}</span>
          : null}
        <label
          style={{
            display: "block",
            fontSize: "20px",
            padding: "12px 0px",
            borderBottom: " 3px solid #00dd00",
            marginBottom: "30px",
            color: "white",
          }}
          l
        >
          Enter your email
        </label>
        <input
          type="email"
          name="email"
          value={email}
          onChange={handleOnChange}
          placeholder="Enter your email"
          required
          style={{
            width: "95%",
            color: "white",
            outline: "none",
            height: "100%",
            padding: " 10px 23px 2px 5px",
            background: "none",
            margin: "0",
            borderTop: "2px solid #00dd00",
            borderBottom: "2px solid #00dd00",
            borderRadius: "10px",
          }}
        />

        <button
          type="submit"
          style={{
            cursor: "pointer",
            outline: "none",
            padding: "6px",
            margin: "12px 0px",
            borderRadius: "10px",
            border: "20x solid #00dd00",
            background: "none",
            color: "white",
          }}
        >
          Send Password Reset Pin
        </button>
      </form>
    </div>
  );
};
