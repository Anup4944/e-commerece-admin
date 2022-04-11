import "./featuredInfo.css";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  ArrowDownwardSharp,
  ArrowUpward,
  ArrowUpwardOutlined,
} from "@material-ui/icons";
import { revenueAction } from "./orderAction";

export const FeaturedInfo = () => {
  const dispatch = useDispatch();
  const { revenueDt } = useSelector((state) => state.revenue);

  const onlyTot = revenueDt?.map((item) => item.total);

  const arrSum = onlyTot[0] > onlyTot[1];

  useEffect(() => {
    dispatch(revenueAction());
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
          <div className="featureMoney">$2,475</div>
        </div>
        <div className="featuredSub">Total revenue</div>
      </div>

      {/* <div className="featuredItem">
        <div className="featuredTitle">Cost </div>
        <div className="featuredMoneyContainer">
          <div className="featureMoney">$2,475</div>
          <div className="featuredMoneyRate">
            11.5 <ArrowUpward className="featuredIcon" />{" "}
          </div>
        </div>
        <div className="featuredSub">Compared to last month</div>
      </div> */}
    </div>
  );
};
