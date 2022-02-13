import React from "react";
import "./singleUser.css";
import {
  CalendarToday,
  Email,
  Publish,
  LocationCity,
  PermIdentity,
  PhoneAndroidOutlined,
} from "@material-ui/icons";
import { Link } from "react-router-dom";

export const SingleUser = () => {
  return (
    <div className="SingleUser">
      <div className="userTitleCon">
        <h1 className="userTitle">Edit User</h1>
        <Link to="/newUser">
          <button className="userAddButton">Create </button>{" "}
        </Link>
      </div>
      <div className="userContainer">
        <div className="userShow">
          <div className="userShowTop">
            <img
              src="https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
              alt=""
              className="userShowImg"
            />
            <div className="userShowTopTitle">
              <span className="userShowUserName">Anna Becker</span>
              <span className="userShowUserTitle">Software Engineer </span>
            </div>
          </div>

          <div className="userShowBottom">
            <span className="accDetails">Account Details</span>
            <div className="userShowInfo">
              {" "}
              <PermIdentity className="userShowIcon" />
              <span className="userShowTitle">annabeck99</span>
            </div>

            <div className="userShowInfo">
              {" "}
              <CalendarToday className="userShowIcon" />
              <span className="userShowTitle"> 10.22.1999</span>
            </div>

            <span className="accDetails">Contact Details</span>

            <div className="userShowInfo">
              {" "}
              <PhoneAndroidOutlined className="userShowIcon" />
              <span className="userShowTitle">+61 458 896 214 </span>
            </div>

            <div className="userShowInfo">
              {" "}
              <Email className="userShowIcon" />
              <span className="userShowTitle">annabeck@gmail.com</span>
            </div>

            <div className="userShowInfo">
              {" "}
              <LocationCity className="userShowIcon" />
              <span className="userShowTitle">Sydney | Australia</span>
            </div>
          </div>
        </div>
        <div className="userUpdate">
          <span className="userUpdateTitle">Edit</span>
          <form action="" className="userUpdateForm">
            <div className="userUpdateLeft">
              <div className="userUpdateItem">
                <label>Username</label>
                <input
                  type="text"
                  placeholder="annabeck99"
                  className="userUpdateInput"
                />
              </div>
              <div className="userUpdateItem">
                <label>Full Name</label>
                <input
                  type="text"
                  placeholder="Anna Becker"
                  className="userUpdateInput"
                />
              </div>
              <div className="userUpdateItem">
                <label>Email</label>
                <input
                  type="text"
                  placeholder="annabeck@gmail.com"
                  className="userUpdateInput"
                />
              </div>
              <div className="userUpdateItem">
                <label>Address</label>
                <input
                  type="text"
                  placeholder="Sydney | Australia"
                  className="userUpdateInput"
                />
              </div>
              <div className="userUpdateItem">
                <label>Phone</label>
                <input
                  type="number"
                  placeholder="+61 458 896 214 "
                  className="userUpdateInput"
                />
              </div>
            </div>
            <div className="userUpdateRight">
              <div className="userUpload">
                <img
                  src="https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                  alt=""
                  className="userUpdateImg"
                />
                <label htmlFor="file">
                  <Publish className="userIcon" />
                </label>
                <input type="file" id="file" style={{ display: "none" }} />
              </div>
              <button className="userUpdateButton">Update</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
