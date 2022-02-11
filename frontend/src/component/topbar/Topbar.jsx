import React from "react";
import "./topbar.css";
import { NotificationsNone, Language, Settings } from "@material-ui/icons";

export const Topbar = () => {
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <div className="logo">Admin</div>
        </div>
        <div className="topRight">
          <div className="topBarIconContainer">
            <NotificationsNone />
            <div className="topIconBadge">2</div>
          </div>
          <div className="topBarIconContainer">
            <Language />
          </div>
          <div className="topBarIconContainer">
            <Settings />
          </div>
        </div>
      </div>
    </div>
  );
};
