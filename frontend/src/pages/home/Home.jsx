import React, { useEffect } from "react";
import { Chart } from "../../component/chart/Chart";
import { FeaturedInfo } from "../../component/featuredInfo/FeaturedInfo";
import "./home.css";
import { WidgetSmall } from "../../component/widgetSmall/WidgetSmall";
import { WidgetLarge } from "../../component/widgetLarge/WidgetLarge";
import { userData } from "../user-list/dummyData";
import axios from "axios";

export const Home = () => {
  useEffect(() => {
    const makeReq = async () => {
      const { data } = await axios.get(
        "http://localhost:5000/api/v1/client/clientInfo"
      );
      console.log(data);
    };
    makeReq();
  }, []);
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
