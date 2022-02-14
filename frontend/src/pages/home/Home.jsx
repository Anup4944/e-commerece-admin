import { Chart } from "../../component/chart/Chart";
import { FeaturedInfo } from "../../component/featuredInfo/FeaturedInfo";
import "./home.css";
import React from "react";
import { WidgetSmall } from "../../component/widgetSmall/WidgetSmall";
import { WidgetLarge } from "../../component/widgetLarge/WidgetLarge";
import { userData } from "../user-list/dummyData";

export const Home = () => {
  return (
    <div className="home">
      <FeaturedInfo />
      <Chart data={userData} title="User Analytics" dataKey="Active" />
      <div className="homeWidgets">
        <WidgetSmall />
        <WidgetLarge />
      </div>
    </div>
  );
};
