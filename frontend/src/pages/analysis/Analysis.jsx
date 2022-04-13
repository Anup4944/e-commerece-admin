import React, { useEffect } from "react";
import "./analysis.css";
import { Chart } from "../../component/chart/Chart";
import { useDispatch, useSelector } from "react-redux";
import { getUserStatsAction } from "../user-list/clientAction";

const Analysis = () => {
  const dispatch = useDispatch();
  const { userStat } = useSelector((state) => state.users);

  const sortedData = userStat.slice().sort((a, b) => a._id - b._id);

  useEffect(() => {
    dispatch(getUserStatsAction());
  }, [dispatch]);
  return (
    <div className="analysis">
      <Chart
        data={sortedData}
        title="Number of users per month"
        dataKey="total"
      />
    </div>
  );
};

export default Analysis;
