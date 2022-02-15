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
              <div className="userShowUserName">Anna Becker</div>
              <div className="userShowUserTitle">Software Engineer </div>
            </div>
          </div>

          <div className="userShowBottom">
            <div className="accDetails">Account Details</div>
            <div className="userShowInfo">
              {" "}
              <PermIdentity className="userShowIcon" />
              <div className="userShowTitle">annabeck99</div>
            </div>

            <div className="userShowInfo">
              {" "}
              <CalendarToday className="userShowIcon" />
              <div className="userShowTitle"> 10.22.1999</div>
            </div>

            <div className="accDetails">Contact Details</div>

            <div className="userShowInfo">
              {" "}
              <PhoneAndroidOutlined className="userShowIcon" />
              <div className="userShowTitle">+61 458 896 214 </div>
            </div>

            <div className="userShowInfo">
              {" "}
              <Email className="userShowIcon" />
              <div className="userShowTitle">annabeck@gmail.com</div>
            </div>

            <div className="userShowInfo">
              {" "}
              <LocationCity className="userShowIcon" />
              <div className="userShowTitle">Sydney | Australia</div>
            </div>
          </div>
        </div>
        <div className="userUpdate">
          <div className="userUpdateTitle">Edit</div>
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
