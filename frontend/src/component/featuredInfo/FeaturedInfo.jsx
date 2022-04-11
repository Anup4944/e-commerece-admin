import "./featuredInfo.css";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { ArrowDownwardSharp, ArrowUpward } from "@material-ui/icons";
import { revenueAction } from "./orderAction";

export const FeaturedInfo = () => {
  const [months, setMonths] = useState([
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "June",
    "July",
    "Aug",
    "Sept",
    "Oct",
    "Nov",
    "Dec",
  ]);
  const dispatch = useDispatch();
  const { revenueDt } = useSelector((state) => state.revenue);

  const monthOnly = revenueDt?.map((item) => item._id).toString();
  const incomeOnly = revenueDt?.map((item) => item.total).toString();

  useEffect(() => {
    dispatch(revenueAction());
  }, [dispatch]);

  return (
    <div className="featured">
      <div className="featuredItem">
        <div className="featuredTitle">Sales of month {monthOnly} </div>
        <div className="featuredMoneyContainer">
          <div className="featureMoney">${incomeOnly}</div>
          {/* <div className="featuredMoneyRate">
            -11.5 <ArrowDownwardSharp className="featuredIcon negative" />{" "}
          </div> */}
        </div>
        {/* <div className="featuredSub">Compared to last month</div> */}
      </div>

      <div className="featuredItem">
        <div className="featuredTitle">Sales </div>
        <div className="featuredMoneyContainer">
          <div className="featureMoney">$2,475</div>
          <div className="featuredMoneyRate">
            -11.5 <ArrowDownwardSharp className="featuredIcon negative" />{" "}
          </div>
        </div>
        <div className="featuredSub">Compared to last month</div>
      </div>

      <div className="featuredItem">
        <div className="featuredTitle">Cost </div>
        <div className="featuredMoneyContainer">
          <div className="featureMoney">$2,475</div>
          <div className="featuredMoneyRate">
            11.5 <ArrowUpward className="featuredIcon" />{" "}
          </div>
        </div>
        <div className="featuredSub">Compared to last month</div>
      </div>
    </div>
  );
};
