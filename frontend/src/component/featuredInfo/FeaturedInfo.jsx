import "./featuredInfo.css";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  AccountBalance,
  AddCircleOutlineSharp,
  ArrowDownwardSharp,
  ArrowUpwardOutlined,
  AttachMoneyOutlined,
  CalendarToday,
  Money,
} from "@material-ui/icons";
import { revenueAction, revenueSumAction } from "./orderAction";

export const FeaturedInfo = () => {
  const dispatch = useDispatch();
  const { monthlyRev, totalIncome } = useSelector((state) => state.revenue);

  const sortByCreated = monthlyRev?.slice().sort((a, b) => {
    return b._id - a._id;
  });

  const onlyTot = sortByCreated?.map((item) => item.total);

  const income = totalIncome?.map((item) => item.total).toString();

  useEffect(() => {
    dispatch(revenueAction()) && dispatch(revenueSumAction());
  }, [dispatch]);

  return (
    <div className="featured">
      <div className="featuredItem">
        <div className="featuredTitle">
          {" "}
          <AddCircleOutlineSharp /> Sales{" "}
        </div>
        <div className="featuredMoneyContainer">
          <div className="featureMoney"></div>

          {onlyTot[0] > onlyTot[1] ? (
            <div className="featuredMoneyRate">
              <ArrowUpwardOutlined className="featuredIcon" />
              <span className="amountCon"> {onlyTot[0] - onlyTot[1]}</span>
            </div>
          ) : (
            <div className="featuredMoneyRate">
              <ArrowDownwardSharp className="featuredIcon negative" />
              <span className="amountCon"> {onlyTot[1] - onlyTot[0]}</span>
            </div>
          )}
        </div>
        <div className="featuredSub">
          {" "}
          <CalendarToday /> <h3>Compared to last month</h3>
        </div>
      </div>

      <div className="featuredItem">
        <div className="featuredTitle">
          {" "}
          <AccountBalance /> Revenue{" "}
        </div>
        <div className="featuredMoneyContainer">
          <div className="featureMoney">
            {" "}
            <Money /> <span className="amountCon"> ${income}</span>
          </div>
        </div>
        <div className="featuredSub">
          <AttachMoneyOutlined />
          <h3> Total revenue</h3>
        </div>
      </div>
    </div>
  );
};
