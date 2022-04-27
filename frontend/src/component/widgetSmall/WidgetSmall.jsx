import React, { useState, useEffect } from "react";
import "./widgetSmall.css";
import { Visibility, SearchOutlined } from "@material-ui/icons";
import { useDispatch, useSelector } from "react-redux";
import { getAllUserAction } from "../../pages/user-list/clientAction";
import { useHistory } from "react-router-dom";

export const WidgetSmall = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const dispatch = useDispatch();
  const history = useHistory();

  const { allUsers } = useSelector((state) => state.users);

  const sortByCreated = allUsers.slice().sort((a, b) => {
    const dateA = new Date(a.createdAt);
    const dateB = new Date(b.createdAt);

    return dateB - dateA;
  });

  useEffect(() => {
    dispatch(getAllUserAction());
  }, [dispatch]);
  return (
    <div className="widgetSm">
      <div className="widgetSmTitle">
        New join members{" "}
        <div className="search">
          <input
            className="searchInput"
            placeholder="Search by fullname"
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <SearchOutlined className="icon" />
        </div>
      </div>
      <ul className="widgetSmList">
        {sortByCreated
          .filter((user) => {
            if (searchTerm === "") {
              return user;
            } else if (
              user.firstName.toLowerCase().includes(searchTerm.toLowerCase())
            ) {
              return user;
            }
          })
          .map((user, i) => {
            return (
              <>
                <li className="widgetSmListItem">
                  <div className="widgetSmUser">
                    <div className="widgetSmUserName">
                      {user.firstName} {user.lastName}{" "}
                    </div>
                    <label className="widgetSmUserEmail">{user.email} </label>
                    <label className="widgetSmUserEmail">{user._id} </label>
                  </div>
                  <button className="widgetSmButton">
                    <Visibility
                      className="widgetSmIcon"
                      onClick={() => history.push(`/user/${user._id}`)}
                    />{" "}
                  </button>
                </li>
              </>
            );
          })}
      </ul>
    </div>
  );
};
