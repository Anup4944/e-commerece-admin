import React from "react";
import "./chart.css";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

export const Chart = () => {
  const data = [
    {
      name: "January",
      "Active user": 4000,
    },
    {
      name: "Febuary",
      "Active user": 6000,
    },
    {
      name: "March",
      "Active user": 3000,
    },
    {
      name: "April",
      "Active user": 5000,
    },
    {
      name: "May",
      "Active user": 8000,
    },
    {
      name: "Jan",
      "Active user": 6000,
    },
    {
      name: "June",
      "Active user": 4000,
    },
    {
      name: "July",
      "Active user": 2000,
    },
    {
      name: "August",
      "Active user": 4000,
    },
    {
      name: "September",
      "Active user": 4000,
    },
    {
      name: "November",
      "Active user": 6000,
    },
    {
      name: "Decembe",
      "Active user": 1000,
    },
  ];
  return (
    <div className="chart">
      <h3 className="chartTitle">User Analytics</h3>
      <ResponsiveContainer width="100%" aspect={4 / 1}>
        <LineChart
          // width={500}
          // height={300}
          data={data}
          // margin={{
          //   top: 5,
          //   right: 30,
          //   left: 20,
          //   bottom: 5,
          // }}
        >
          <XAxis dataKey="name" stroke="#5550bd" />
          {/* <YAxis /> */}
          <Line
            type="monotone"
            dataKey="Active user"
            stroke="#8884d8"
            activeDot={{ r: 8 }}
          />
          <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
          <Tooltip />
          <CartesianGrid stroke="#e0dfdf" strokeDasharray="5 5" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};
