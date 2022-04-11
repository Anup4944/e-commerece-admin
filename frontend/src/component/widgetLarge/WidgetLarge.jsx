import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { allOrderAction } from "../featuredInfo/orderAction";
import "./widgetLarge.css";

export const WidgetLarge = () => {
  const dispatch = useDispatch();

  const { allOrders } = useSelector((state) => state.revenue);

  const sortByCreated = allOrders?.slice().sort((a, b) => {
    return b.createdAt - a.createdAt;
  });

  const Button = ({ type }) => {
    return <button className={"widgetLgButton " + type}>{type}</button>;
  };

  useEffect(() => {
    dispatch(allOrderAction());
  }, [dispatch]);
  return (
    <div className="widgetLg">
      <h3 className="widgetLgTitle">Latest Order placed</h3>
      <table className="widgetLgTable">
        <tr className="widgetLgTr">
          <th className="widgetLfTh">Cutomers</th>
          <th className="widgetLfTh">Date</th>
          <th className="widgetLfTh">Amount</th>
          <th className="widgetLfTh">Status</th>
        </tr>

        {sortByCreated.length &&
          sortByCreated.map((item) => {
            return (
              <>
                <tr className="widgetLgTr">
                  <td className="widgetLgUser">
                    <div className="widgetLgName">{item.clientId}</div>
                  </td>
                  <td className="widgetLgDate">{item.createdAt}</td>
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
