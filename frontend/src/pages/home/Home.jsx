import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Chart } from "../../component/chart/Chart";
import { FeaturedInfo } from "../../component/featuredInfo/FeaturedInfo";
import "./home.css";
import { WidgetSmall } from "../../component/widgetSmall/WidgetSmall";
import { WidgetLarge } from "../../component/widgetLarge/WidgetLarge";
import { userData } from "../user-list/dummyData";
import { getUserStatsAction } from "../user-list/clientAction";

export const Home = () => {
  const dispatch = useDispatch();

  const { userStat } = useSelector((state) => state.users);

  const sortedData = userStat.slice().sort((a, b) => a._id - b._id);

  useEffect(() => {
    dispatch(getUserStatsAction());
  }, [dispatch]);
  return (
    <div className="home">
      <FeaturedInfo />
      <Chart data={sortedData} title="User Analytics" dataKey="total" />
      <div className="homeWidgets">
        <WidgetSmall />
        <WidgetLarge />
      </div>
    </div>
  );
};
