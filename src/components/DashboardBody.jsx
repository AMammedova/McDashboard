import React from "react";
import Chart from "react-apexcharts";
import OverAll from "./DashboardBodyComponents/OverAll";
import GoogleCard from "./DashboardBodyComponents/GoogleCard";
import GoogleLinks from "./DashboardBodyComponents/GoogleLinks";
const DashboardBody = ({ value }) => {
  console.log(value.startDate, "valuedashboard");
  return (
    <div className="w-full min-h-screen bg-[#F3F5F9] flex flex-col">
      <div className="grid grid-cols-3 gap-4">
     <OverAll value={value}/>
<GoogleCard value={value} name="Google cards" id="1"/>
<GoogleCard value={value} name="Apple cards" id="2"/>

       
      </div>
      <div className="grid grid-cols-2 gap-4">

<GoogleLinks value={value} id="1" name="Google links"/>
<GoogleLinks value={value} id="2" name="Apple links"/>
        {/* <div>
          <div className="bg-white px-6 py-2 m-4">
            <h1 className="text-[#6C7081] text-[20px] rounded-[10px] text-center font-medium flex items-center justify-center">
              <img src="/appleicon.svg" alt="" className="mr-2" /> Apple Links
            </h1>
          </div>
          <div className="grid grid-cols-3 ">
            <div>
              <div className="bg-white px-6 py-4 mx-4 rounded-[10px]">
                <h1 className="text-[#6C7081] py-2 px-2 bg-[#E7F6FF] 2xl:text-[16px] lg:text-[14px] rounded-[10px] text-center font-medium flex items-center justify-center">
                  World Elite
                </h1>
              </div>
              <div className="bg-white px-4 py-1 mx-4 my-2 rounded-[10px]">
                <span className="2xl:text-[12px] lg:text-[10px] text-[#6C7081]">
                  Lounge Visits - 1500
                </span>
              </div>
              <div className="bg-white px-4 py-1 mx-4 my-2 rounded-[10px]">
                <span className="2xl:text-[12px] lg:text-[10px] text-[#6C7081]">
                  Lounge Visits - 1500
                </span>
              </div>
              <div className="bg-white px-4 py-1 mx-4 my-2 rounded-[10px]">
                <span className="2xl:text-[12px] lg:text-[10px] text-[#6C7081]">
                  Lounge Visits - 1500
                </span>
              </div>
              <div className="bg-white px-4 py-1 mx-4 my-2 rounded-[10px]">
                <span className="2xl:text-[12px] lg:text-[10px] text-[#6C7081]">
                  Lounge Visits - 1500
                </span>
              </div>
            </div>
            <div>
              {" "}
              <div className="bg-white px-6 py-4 mx-4 rounded-[10px]">
                <h1 className="text-[#6C7081] py-2 px-1 bg-[#E7FFE9] 2xl:text-[16px] lg:text-[14px] rounded-[10px] text-center font-medium flex items-center justify-center">
                  World Black Edition
                </h1>
              </div>
              <div className="bg-white px-4 py-1 mx-4 my-2 rounded-[10px]">
                <span className="2xl:text-[12px] lg:text-[10px] text-[#6C7081]">
                  Lounge Visits - 1500
                </span>
              </div>
              <div className="bg-white px-4 py-1 mx-4 my-2 rounded-[10px]">
                <span className="2xl:text-[12px] lg:text-[10px] text-[#6C7081]">
                  Lounge Visits - 1500
                </span>
              </div>
            </div>
            <div>
              <div className="bg-white px-6 py-4 mx-4 rounded-[10px]">
                <h1 className="text-[#6C7081] py-2 px-2 bg-[#FFF8E7] 2xl:text-[16px] lg:text-[14px] rounded-[10px] text-center font-medium flex items-center justify-center">
                  Standart
                </h1>
              </div>
              <div className="bg-white px-4 py-1 mx-4 my-2 rounded-[10px]">
                <span className="2xl:text-[12px] lg:text-[10px] text-[#6C7081]">
                  Lounge Visits - 1500
                </span>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default DashboardBody;
