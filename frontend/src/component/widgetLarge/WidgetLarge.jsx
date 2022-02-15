import React from "react";
import "./widgetLarge.css";

export const WidgetLarge = () => {
  const Button = ({ type }) => {
    return <button className={"widgetLgButton " + type}>{type}</button>;
  };
  return (
    <div className="widgetLg">
      <h3 className="widgetLgTitle">Latest Transactions</h3>
      <table className="widgetLgTable">
        <tr className="widgetLgTr">
          <th className="widgetLfTh">Cutomers</th>
          <th className="widgetLfTh">Date</th>
          <th className="widgetLfTh">Amount</th>
          <th className="widgetLfTh">Status</th>
        </tr>

        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img
              src="https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500"
              alt=""
              className="widgetLgImg"
            />
            <div className="widgetLgName">Suzan Carrol</div>
          </td>
          <td className="widgetLgDate">2 June 2021</td>
          <td className="widgetLgAmonut">$200.00</td>
          <td className="widgetLgStatus">
            <Button type="Approved" />
          </td>
        </tr>

        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/4/4c/Marcus_Padley_Photo.jpg"
              alt=""
              className="widgetLgImg"
            />
            <div className="widgetLgName">Marcus Rashord</div>
          </td>
          <td className="widgetLgDate">2 June 2021</td>
          <td className="widgetLgAmonut">$200.00</td>
          <td className="widgetLgStatus">
            <Button type="Declined" />
          </td>
        </tr>

        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img
              src="https://assets.teenvogue.com/photos/5a01d0b76a66c92585b50f3b/3:2/w_1080,h_720,c_limit/james%20charles.png"
              alt=""
              className="widgetLgImg"
            />
            <div className="widgetLgName">Suzan Carrol</div>
          </td>
          <td className="widgetLgDate">12 October 2021</td>
          <td className="widgetLgAmonut">$500.00</td>
          <td className="widgetLgStatus">
            <Button type="Pending" />
          </td>
        </tr>
      </table>
    </div>
  );
};
