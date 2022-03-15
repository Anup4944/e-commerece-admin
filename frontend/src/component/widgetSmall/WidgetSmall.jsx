import React, { useEffect } from "react";
import "./widgetSmall.css";
import { Visibility } from "@material-ui/icons";
import { useDispatch, useSelector } from "react-redux";
import { getAllUserAction } from "../../pages/user-list/clientAction";

export const WidgetSmall = () => {
  const dispatch = useDispatch();

  const { allUsers } = useSelector((state) => state.users);

  useEffect(() => {
    dispatch(getAllUserAction());
  }, []);
  return (
    <div className="widgetSm">
      <div className="widgetSmTitle">New join members</div>
      <ul className="widgetSmList">
        {allUsers.map((user, i) => {
          return (
            <>
              <li className="widgetSmListItem">
                <div className="widgetSmUser">
                  <div className="widgetSmUserName">
                    {user.firstName} {user.lastName}{" "}
                  </div>
                  <div className="widgetSmUserEmail">{user.email} </div>
                </div>
                <button className="widgetSmButton">
                  <Visibility className="widgetSmIcon" /> Display
                </button>
              </li>
            </>
          );
        })}
      </ul>
    </div>
  );
};
