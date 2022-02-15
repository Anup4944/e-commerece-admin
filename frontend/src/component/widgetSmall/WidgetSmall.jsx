import React from "react";
import "./widgetSmall.css";
import { Visibility } from "@material-ui/icons";

export const WidgetSmall = () => {
  return (
    <div className="widgetSm">
      <div className="widgetSmTitle">New join members</div>
      <ul className="widgetSmList">
        <li className="widgetSmListItem">
          <img
            src="https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500"
            alt=""
            className="widgetSmImg"
          />
          <div className="widgetSmUser">
            <div className="widgetSmUserName">Anna Keller</div>
            <div className="widgetSmUserTitle">Software Engineer</div>
          </div>
          <button className="widgetSmButton">
            <Visibility className="widgetSmIcon" /> Display
          </button>
        </li>
        <li className="widgetSmListItem">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/4/4c/Marcus_Padley_Photo.jpg"
            alt=""
            className="widgetSmImg"
          />
          <div className="widgetSmUser">
            <div className="widgetSmUserName">Marcus Rashford</div>
            <div className="widgetSmUserTitle">Nurse</div>
          </div>
          <button className="widgetSmButton">
            <Visibility className="widgetSmIcon" /> Display
          </button>
        </li>
        <li className="widgetSmListItem">
          <img
            src="https://assets.teenvogue.com/photos/5a01d0b76a66c92585b50f3b/3:2/w_1080,h_720,c_limit/james%20charles.png"
            alt=""
            className="widgetSmImg"
          />
          <div className="widgetSmUser">
            <div className="widgetSmUserName">Suzan Carrol</div>
            <div className="widgetSmUserTitle">Radiographer</div>
          </div>
          <button className="widgetSmButton">
            <Visibility className="widgetSmIcon" /> Display
          </button>
        </li>
      </ul>
    </div>
  );
};
