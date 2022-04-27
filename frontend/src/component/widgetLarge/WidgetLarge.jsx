import { LocalShippingOutlined } from "@material-ui/icons";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { allOrderAction } from "../featuredInfo/orderAction";
import "./widgetLarge.css";

export const WidgetLarge = () => {
  const [search, setSearch] = useState("");
  const dispatch = useDispatch();

  const { allOrders } = useSelector((state) => state.revenue);

  const sortByCreated = allOrders.slice().sort((a, b) => {
    const dateA = new Date(a.createdAt);
    const dateB = new Date(b.createdAt);

    return dateB - dateA;
  });

  const Button = ({ type }) => {
    return <button className={"widgetLgButton " + type}>{type}</button>;
  };

  useEffect(() => {
    dispatch(allOrderAction());
  }, [dispatch]);
  return (
    <div className="widgetLg">
      <div className="searchBar">
        {" "}
        <h3 className="widgetLgTitle">
          {" "}
          <LocalShippingOutlined style={{ marginRight: "10px" }} /> Latest Order
          placed
        </h3>
        <input
          className="searchInput"
          placeholder="Search by email"
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      <table className="widgetLgTable">
        <tr className="widgetLgTr">
          <th className="widgetLfTh">Cutomers email</th>
          <th className="widgetLfTh">Date</th>
          <th className="widgetLfTh">Amount</th>
          <th className="widgetLfTh">Status</th>
        </tr>

        {sortByCreated.length &&
          sortByCreated
            .filter((item) => {
              if (search === "") {
                return item;
              } else if (item.email.toLowerCase().includes(search)) {
                return item;
              }
              return false;
            })
            .map((item, i) => {
              return (
                <>
                  <tr className="widgetLgTr" key={i}>
                    <td className="widgetLgUser">
                      <div className="widgetLgName">{item.email}</div>
                    </td>
                    <td className="widgetLgDate">
                      {new Date(item.createdAt).toDateString()}
                    </td>
                    <td className="widgetLgAmonut">${item.amount}</td>
                    <td className="widgetLgStatus">
                      <Button type="Approved" />
                    </td>
                  </tr>
                </>
              );
            })}
      </table>
    </div>
  );
};
