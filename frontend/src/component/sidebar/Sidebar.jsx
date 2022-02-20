import React from "react";
import "./sidebar.css";
import {
  LineStyle,
  Timeline,
  TrendingUp,
  Person,
  AttachMoney,
  Feedback,
  MailOutline,
  Settings,
  Assessment,
  PowerSettingsNew,
  AddIcCallOutlined,
  AddIcCallTwoTone,
  PlusOneOutlined,
  CategorySharp,
} from "@material-ui/icons";
import { Link, useHistory } from "react-router-dom";
import { logoutAction } from "../../pages/login/loginAction";
import { useDispatch } from "react-redux";

export const Sidebar = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const logMeOut = () => {
    dispatch(logoutAction());
    history.push("/");
  };
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Dashboard</h3>
          <ul className="sidebarList">
            <Link to="/" className="link">
              <li className="sidebarListItem">
                <LineStyle className="sidebarIcon" /> Home
              </li>
            </Link>
            <Link to="/newProduct" className="link">
              <li className="sidebarListItem">
                <PlusOneOutlined className="sidebarIcon" /> Add new product
              </li>
            </Link>
            <Link to="/newProduct" className="link">
              <li className="sidebarListItem">
                <CategorySharp className="sidebarIcon" /> Add new category
              </li>
            </Link>
            <li className="sidebarListItem">
              <TrendingUp className="sidebarIcon" /> Sales
            </li>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Quick Menu</h3>
          <ul className="sidebarList">
            <Link to="/users" className="link">
              <li className="sidebarListItem">
                <Person className="sidebarIcon" /> Users
              </li>
            </Link>
            <Link to="/products" className="link">
              <li className="sidebarListItem">
                <Timeline className="sidebarIcon" /> Products
              </li>
            </Link>
            <li className="sidebarListItem">
              <AttachMoney className="sidebarIcon" /> Transactions
            </li>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Notifications</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem">
              <MailOutline className="sidebarIcon" /> Mail
            </li>
            <li className="sidebarListItem">
              <Feedback className="sidebarIcon" /> Feedbacks
            </li>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Staff</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem">
              <Settings className="sidebarIcon" /> Manage
            </li>
            <li className="sidebarListItem">
              <Timeline className="sidebarIcon" /> Analytics
            </li>
            <li className="sidebarListItem">
              <TrendingUp className="sidebarIcon" /> Report
            </li>

            <li className="sidebarListItem" onClick={logMeOut}>
              {/* <Link to="/" className="link"> */}
              <PowerSettingsNew className="sidebarIcon" /> Logout
              {/* </Link> */}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
