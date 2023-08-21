import React, { useEffect } from "react";
import useSWR, { mutate } from "swr";
import { GetAll } from "../../api";
import Spinner from "../Spinner";
const OverAll = ({ value }) => {
  console.log("overr");

  const { data, error, isLoading } = useSWR(
    value.startDate &&
      value.endDate &&
      `/api/Dashboard/GetOverallReport?StartDate=${value?.startDate}&EndDate=${value?.endDate}`,
    (key) => GetAll.user(key)
  );
  console.log(data, "data");

  if (isLoading)
    return (
      <div className="w-full  mt-20 flex items-center justify-center">
        <Spinner />
      </div>
    );
  if (error)
    return (
      <div className="w-full  mt-40 flex items-center justify-center">
        error
      </div>
    );
  if (!data) {
    return (
      <div className="flex flex-col">
        <div className="bg-white px-6 py-2 m-4 flex items-center justify-center rounded-[6px]">
          <h1 className="text-black text-[20px] px-6 py-2 text-center font-medium flex items-center justify-center">
            Overall
          </h1>
        </div>
        <h1 className="text-center my-10">Not Found</h1>
      </div>
    ); // or an error message or loading indicator
  }
  return (
    <div>
      <div className="bg-white px-6 py-2 m-4 flex items-center justify-center rounded-[6px]">
        <h1 className="text-black text-[20px] px-6 py-2 text-center font-medium flex items-center justify-center">
          Overall
        </h1>
      </div>
      <div className="grid grid-cols-2 gap-4 rounded-[6px]">
        {data?.result?.cardInfos?.map((item,index) => (
          <div key={index} className="bg-white px-6 py-2 mx-4 flex flex-col items-center justify-center rounded-[6px]">
            <span className="text-[#6C7081] font-normal text-[28px]">
              {item?.count}
            </span>
            <span className="text-[#6C7081] font-normal text-[17px] text-center m-2">
              {item?.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OverAll;
