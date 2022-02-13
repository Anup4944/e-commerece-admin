import React from "react";
import "./singleUser.css";
import {
  CalendarToday,
  Email,
  LocalActivityOutlined,
  LocationCity,
  PermIdentity,
  PhoneAndroidOutlined,
} from "@material-ui/icons";

export const SingleUser = () => {
  return (
    <div className="SingleUser">
      <div className="userTitleCon">
        <h1 className="userTitle">Edit User</h1>
        <button className="userAddButton">Create </button>
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
              <span className="userShowTitle">+61 458 896 214 Details</span>
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
        <div className="userUpdate"></div>
      </div>
    </div>
  );
};
