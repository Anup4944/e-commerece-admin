import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { mostSoldAction } from "../featuredInfo/orderAction";
import "./mostSold.css";

const MostSold = () => {
  const dispatch = useDispatch();

  const { mostSoldProd } = useSelector((state) => state.revenue);

  useEffect(() => {
    dispatch(mostSoldAction());
  }, [dispatch]);
  return (
    <div className="mostSoldTop">
      <h3 className="mostSoldHeader">Most Sold Product</h3>
      <table className="mostSoldTable">
        <th className="mostSoldTh">
          <h2>Product Name</h2>
        </th>
        <th className="mostSoldTh">
          <h2>Total Qty Sold</h2>
        </th>

        {mostSoldProd.map((item, i) => {
          return (
            <tr key={i}>
              <td className="mostSoldTd">
                <h4> {item._id}</h4>
              </td>
              <td className="mostSoldTd">
                <h4>{item.sum}</h4>
              </td>
            </tr>
          );
        })}
      </table>
    </div>
  );
};

export default MostSold;
