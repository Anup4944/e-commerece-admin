import React, { useEffect } from "react";
import "./singleUser.css";
import {
  CalendarToday,
  Email,
  PermIdentity,
  MoodBadOutlined,
  MoodRounded,
} from "@material-ui/icons";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getSingleUserAction } from "../user-list/clientAction";
import Spinner from "../../component/spinner/Spinner";

export const SingleUser = () => {
  const dispatch = useDispatch();

  const { isLoading, singleUser } = useSelector((state) => state.users);

  console.log(singleUser);

  let { userId } = useParams();

  useEffect(() => {
    dispatch(getSingleUserAction(userId));
  }, [userId, dispatch]);
  return (
    <div className="SingleUser">
      <div className="userTitleCon">
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
          <form className="userUpdateForm">
            <label className="label">Password</label>
            <input
              type="password"
              placeholder="Enter new password"
              className="userUpdateInput"
            />

            <label className="label">Confirm Password</label>

            <input
              type="password"
              placeholder="Re-enter new password"
              className="userUpdateInput"
            />

            <button className="userUpdateButton">Update</button>
          </form>
        </div>
      </div>
    </div>
  );
};
