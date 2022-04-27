import { EmailOutlined } from "@material-ui/icons";
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { transactionAction } from "../../component/featuredInfo/orderAction";

import "./transaction.css";

const Transaction = () => {
  const [serchBy, setSearchBy] = useState("");
  const dispatch = useDispatch();

  const { userExp } = useSelector((state) => state.revenue);

  useEffect(() => {
    dispatch(transactionAction());
  }, [dispatch]);

  return (
    <div className="transactionHead">
      <input
        className="searchInput"
        placeholder="Search by email"
        onChange={(e) => setSearchBy(e.target.value)}
      />
      <table className="transactionHeadTable">
        <tr>
          <th className="transTh">
            {" "}
            <h2>Cutomers email</h2>
          </th>
          <th className="transTh">
            {" "}
            <h2>Amount spent so far</h2>
          </th>
        </tr>

        {userExp.length &&
          userExp
            .filter((item) => {
              if (serchBy === "") {
                return item;
              } else if (
                item._id.toLowerCase().includes(serchBy.toLowerCase())
              ) {
                return item;
              }
            })
            .map((item, i) => {
              return (
                <tr key={i}>
                  <td>
                    <div className="transEmail">
                      {" "}
                      <EmailOutlined /> <h3>{item._id}</h3>
                    </div>
                  </td>

                  <td className="transAmt">${item.total}</td>
                </tr>
              );
            })}
      </table>
    </div>
  );
};

export default Transaction;
