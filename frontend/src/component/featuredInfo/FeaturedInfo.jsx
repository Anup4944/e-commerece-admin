import "./featuredInfo.css";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  ArrowDownwardSharp,
  ArrowUpward,
  ArrowUpwardOutlined,
} from "@material-ui/icons";
import { revenueAction, revenueSumAction } from "./orderAction";

export const FeaturedInfo = () => {
  const dispatch = useDispatch();
  const { revenueDt, totalIncome } = useSelector((state) => state.revenue);

  const sortByCreated = revenueDt?.slice().sort((a, b) => {
    return b._id - a._id;
  });

  const onlyTot = sortByCreated?.map((item) => item.total);

  const arrSum = onlyTot[0] > onlyTot[1];

  const income = totalIncome?.map((item) => item.total).toString();

  useEffect(() => {
    dispatch(revenueAction()) && dispatch(revenueSumAction());
  }, [dispatch]);

  return (
    <div className="featured">
      <div className="featuredItem">
        <div className="featuredTitle">Sales </div>
        <div className="featuredMoneyContainer">
          <div className="featureMoney"></div>

          {arrSum ? (
            <div className="featuredMoneyRate">
              <ArrowUpwardOutlined className="featuredIcon" />
              {onlyTot[0] - onlyTot[1]}
            </div>
          ) : (
            <div className="featuredMoneyRate">
              <ArrowDownwardSharp className="featuredIcon negative" />
              {onlyTot[1] - onlyTot[0]}
            </div>
          )}
        </div>
        <div className="featuredSub">Compared to last month</div>
      </div>

      <div className="featuredItem">
        <div className="featuredTitle">Revenue </div>
        <div className="featuredMoneyContainer">
          <div className="featureMoney">${income}</div>
        </div>
        <div className="featuredSub">Total revenue</div>
      </div>
    </div>
  );
};
