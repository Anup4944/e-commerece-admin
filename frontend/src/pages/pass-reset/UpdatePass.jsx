import React, { useState } from "react";
import Img from "../login/bg1.jpg";
import { useDispatch, useSelector } from "react-redux";
import { updatePasswordAction } from "./passAction";
import { Link } from "react-router-dom";

const initialState = {
  pin: "",
  newPass: "",
  confPassword: "",
};

const passVerificationError = {
  confPassword: false,
};

export const UpdatePass = () => {
  const [update, setUpdate] = useState(initialState);
  const [passwordError, setPasswordError] = useState(passVerificationError);

  const { message, status, email } = useSelector(
    (state) => state.passwordReset
  );

  const dispatch = useDispatch();

  const handleOnChange = (e) => {
    const { name, value } = e.target;

    setUpdate({
      ...update,
      [name]: value,
    });

    if (name === "confPassword") {
      setPasswordError({
        ...passwordError,
        confPassword: update.newPass === value,
      });
    }
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    const { pin, newPass } = update;
    const newPassObj = { pin, password: newPass, email };
    dispatch(updatePasswordAction(newPassObj));
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
        {status === "success"
          ? message && <span style={{ color: "white" }}>{message}</span>
          : null}
        {status === "successful"
          ? message && (
              <Link to="/">
                <span style={{ color: "white" }}>{message}</span>
              </Link>
            )
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
          Enter your 5 digit pin
        </label>
        <input
          type="text"
          name="pin"
          value={update.pin}
          onChange={handleOnChange}
          placeholder="Enter your 5 digit pin"
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
          Enter your new password
        </label>
        <input
          type="password"
          name="newPass"
          value={update.newPass}
          onChange={handleOnChange}
          placeholder="Enter your new password"
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
          Confirm Password
        </label>
        <input
          type="password"
          name="confPassword"
          value={update.confPassword}
          onChange={handleOnChange}
          placeholder="Re-enter new password"
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
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
            outline: "none",
            padding: "6px",
            margin: "12px 0px",
            borderRadius: "10px",
            border: "20x solid #00dd00",
            background: "none",
            color: "white",
            fontWeight: "700",
          }}
        >
          Change Password
        </button>
        {!passwordError.confPassword && (
          <span style={{ color: "tomato", fontWeight: "700" }}>
            Password doesnt match{" "}
          </span>
        )}{" "}
      </form>
    </div>
  );
};
