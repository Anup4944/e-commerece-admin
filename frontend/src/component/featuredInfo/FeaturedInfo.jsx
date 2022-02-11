import "./featuredInfo.css";

import { ArrowDownwardSharp, ArrowUpward } from "@material-ui/icons";

export const FeaturedInfo = () => {
  return (
    <div className="featured">
      <div className="featuredItem">
        <div className="featuredTitle">Revenue </div>

        <div className="featuredMoneyContainer">
          <div className="featureMoney">$2,475</div>
          <div className="featuredMoneyRate">
            -11.5 <ArrowDownwardSharp className="featuredIcon negative" />{" "}
          </div>
        </div>
        <div className="featuredSub">Compared to last month</div>
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
