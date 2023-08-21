import React, { useEffect, useState } from "react";
import Datepicker from "react-tailwindcss-datepicker";
import DashboardBody from "../../components/DashboardBody";
const Dashboard = () => {
  const [value, setValue] = useState({
    startDate: "",
    endDate: "",
  });

  const handleValueChange = (newValue) => {
    console.log("newValue:", newValue);
    setValue(newValue);
  };

console.log(value?.startDate, "value");
  return (
    <React.Fragment>
      <div className="w-[100%] flex items-center justify-between mx-auto px-4 py-3">
        <h1 className="text-[#3E3E3E] text-[26px] font-medium ">Dashboard</h1>
        <div className="w-1/4 flex items-center justify-between">
          <div className="w-[260px]">
            <Datepicker 
              primaryColor={"blue"}
              value={value}
              onChange={handleValueChange}
              showShortcuts={true}
            />
          </div>

          <div className="w-[40px] h-[40px] flex items-center justify-center p-[8px] rounded-[5px] bg-[#DF7540] cursor-pointer">
            <img src="/exporticon.svg" alt="" />
          </div>
        </div>
      </div>
      <DashboardBody value={value}/>
    </React.Fragment>
  );
};

export default Dashboard;
