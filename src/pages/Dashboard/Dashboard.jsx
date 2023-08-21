import React, { useEffect, useState } from "react";
import Datepicker from "react-tailwindcss-datepicker";
import DashboardBody from "../../components/DashboardBody";
import { subDays, format } from "date-fns";
const Dashboard = () => {
  const defaultStartDate = format(subDays(new Date(), 7), 'yyyy-MM-dd');
  const defaultEndDate = format(new Date(), 'yyyy-MM-dd');
  const [value, setValue] = useState({
    startDate: defaultStartDate,
    endDate: defaultEndDate,

  });

  const handleValueChange = (newValue) => {
    console.log("newValue:", newValue);
    setValue(newValue);
  };


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
