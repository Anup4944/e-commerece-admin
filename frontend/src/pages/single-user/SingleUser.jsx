import React, { useState, useEffect } from "react";
import "./singleUser.css";
import {
  CalendarToday,
  Email,
  PermIdentity,
  MoodRounded,
} from "@material-ui/icons";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  getSingleUserAction,
  updateClientPassAction,
} from "../user-list/clientAction";
import Spinner from "../../component/spinner/Spinner";

const initialState = {
  newPass: "",
  confPass: "",
};

const passVerificationError = {
  confPassword: false,
};

export const SingleUser = () => {
  const [password, setPassword] = useState(initialState);

  const [passwordError, setPasswordError] = useState(passVerificationError);

  const dispatch = useDispatch();

  const { isLoading, singleUser, status, message } = useSelector(
    (state) => state.users
  );

  let { userId } = useParams();

  useEffect(() => {
    dispatch(getSingleUserAction(userId));
  }, [userId, dispatch]);

  const handleOnChange = (e) => {
    const { name, value } = e.target;

    setPassword({
      ...password,
      [name]: value,
    });

    if (name === "confPass") {
      setPasswordError({
        ...passwordError,
        confPass: password.newPass === value,
      });
    }
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    dispatch(updateClientPassAction(userId, password));
  };
  return (
    <div className="SingleUser">
      <div className="userTitleCon">
        {status === "success"
          ? message && <span style={{ color: "green" }}>{message}</span>
          : null}
        {isLoading && <Spinner />}
        <h1 className="userTitle">Edit User</h1>
        <Link to="/newUser">
          <button className="userAddButton">Create </button>{" "}
        </Link>
      </div>
      <div className="userContainer">
        <div className="userShow">
          <div className="userShowBottom">
            <div className="accDetails">Account Details</div>

            <div className="userShowInfo">
              {" "}
              <MoodRounded className="userShowIcon" />
              <div className="userShowTitle">
                {singleUser?.firstName} {singleUser?.lastName}
              </div>
            </div>

            <div className="userShowInfo">
              {" "}
              <PermIdentity className="userShowIcon" />
              <div className="userShowTitle">{singleUser?.userName}</div>
            </div>

            <div className="userShowInfo">
              {" "}
              <CalendarToday className="userShowIcon" />
              <div className="userShowTitle">
                {new Date(singleUser?.createdAt).toDateString()}
              </div>
            </div>

            <div className="accDetails">Contact Details</div>

            <div className="userShowInfo">
              {" "}
              <Email className="userShowIcon" />
              <div className="userShowTitle">{singleUser?.email}</div>
            </div>
          </div>
        </div>
        <div className="userUpdate">
          <form className="userUpdateForm" onSubmit={handleOnSubmit}>
            <label className="label">Password</label>
            <input
              type="password"
              placeholder="Enter new password"
              className="userUpdateInput"
              name="newPass"
              value={password.newPass}
              onChange={handleOnChange}
              required
            />

            <label className="label">Confirm Password</label>

            <input
              type="password"
              placeholder="Re-enter new password"
              className="userUpdateInput"
              name="confPass"
              value={password.confPass}
              onChange={handleOnChange}
              required
            />

            {!passwordError.confPass && (
              <div style={{ marginTop: "20px", color: "tomato" }}>
                Password doesnt match
              </div>
            )}

            <button className="userUpdateButton">Update</button>
          </form>
        </div>
      </div>
    </div>
  );
};
