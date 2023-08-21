import React from "react";
import Chart from "react-apexcharts";
import OverAll from "./DashboardBodyComponents/OverAll";
import GoogleCard from "./DashboardBodyComponents/GoogleCard";
import GoogleLinks from "./DashboardBodyComponents/GoogleLinks";
const DashboardBody = ({ value }) => {
  console.log(value.startDate, "valuedashboard");
  return (
    <div className="w-full h-[85vh] bg-[#F3F5F9] flex flex-col">
      <div className="h-full overflow-y-auto">
        <div className="grid grid-cols-3 gap-4">
          <OverAll value={value} />
          <GoogleCard value={value} name="Google cards" id="1" />
          <GoogleCard value={value} name="Apple cards" id="2" />
        </div>
        <div className="grid grid-cols-2 gap-4 mb-4">
          <GoogleLinks value={value} id="1" name="Google links" />
          <GoogleLinks value={value} id="2" name="Apple links" />
        </div>
      </div>
    </div>
  );
};

export default DashboardBody;
