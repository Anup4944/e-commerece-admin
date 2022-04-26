import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { transactionAction } from "../../component/featuredInfo/orderAction";

import "./transaction.css";

const Transaction = () => {
  const dispatch = useDispatch();

  const { userExp } = useSelector((state) => state.revenue);

  useEffect(() => {
    dispatch(transactionAction());
  }, [dispatch]);

  return (
    <div className="transactionHead">
      <table className="transactionHeadTable">
        <tr>
          <th className="transTh">Cutomers email</th>
          <th className="transTh">Amount spent so far</th>
        </tr>

        {userExp.length &&
          userExp.map((item, i) => {
            return (
              <tr key={i}>
                <td>
                  <div className="transEmail">{item._id}</div>
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
