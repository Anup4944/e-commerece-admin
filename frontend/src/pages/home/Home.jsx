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

  console.log(userStat);

  const sortedData = userStat.map((item) => {});

  console.log(sortedData);

  useEffect(() => {
    dispatch(getUserStatsAction());
  }, [dispatch]);
  return (
    <div className="home">
      <FeaturedInfo />
      <Chart data={userStat} title="User Analytics" dataKey="total" />
      <div className="homeWidgets">
        <WidgetSmall />
        <WidgetLarge />
      </div>
    </div>
  );
};
