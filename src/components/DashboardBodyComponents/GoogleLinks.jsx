import React, { useEffect } from "react";
import useSWR, { mutate } from "swr";
import { GetAll } from "../../api";
import { subDays, format } from 'date-fns';
import Spinner from "../Spinner";
const GoogleLinks = ({ value, id, name }) => {
  const startDate = value?.startDate || format(subDays(new Date(), 7), 'yyyy-MM-dd');
  const endDate = value?.endDate || format(new Date(), 'yyyy-MM-dd');
  const { data, error, isLoading } = useSWR(
    `${id === '1' ? '/api/Dashboard/GetGoogleLinkReport?StartDate=' : '/api/Dashboard/GetAppleLinkReport?StartDate='}${startDate}&EndDate=${endDate}`,
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
      <div  className="flex flex-col">
        <div className="bg-white px-6 py-2 m-4">
          <h1 className="text-black text-[20px] text-center font-medium flex items-center justify-center">
            <img
              src={id && id === "1" ? "/googleicon.svg" : "/appleicon.svg"}
              alt=""
              className="mr-2"
            />{" "}
            {name}
          </h1>
        </div>
        <h1 className="text-center mt-10">Not Found</h1>
      </div>
    ); // or an error message or loading indicator
  }
  return (
    <div>
      <div className="bg-white px-6 py-2 m-4">
        <h1 className="text-black text-[20px] text-center font-medium flex items-center justify-center">
          <img
            src={id && id === "1" ? "/googleicon.svg" : "/appleicon.svg"}
            alt=""
            className="mr-2"
          />{" "}
          {name}
        </h1>
      </div>

      <div className="grid grid-cols-3 ">
        {/* <div>
        <div className="bg-white px-6 py-4 mx-4 rounded-[10px]">
          <h1 className="text-[#6C7081] py-2 bg-[#E7F6FF] 2xl:text-[16px] lg:text-[14px]] rounded-[10px] text-center font-medium flex items-center justify-center">
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
          <h1 className="text-[#6C7081] py-2 bg-[#E7FFE9] 2xl:text-[16px] lg:text-[14px] rounded-[10px] text-center font-medium flex items-center justify-center">
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
        <div className="bg-white px-4 py-1 mx-4 my-2 rounded-[10px]">
          <span className="2xl:text-[12px] lg:text-[10px] text-[#6C7081]">
            Lounge Visits - 1500
          </span>
        </div>
      </div>
      <div>
        {" "}
        <div className="bg-white px-6 py-4 mx-4 rounded-[10px]">
          <h1 className="text-[#6C7081] py-2 bg-[#FFF8E7] 2xl:text-[16px] lg:text-[14px]rounded-[10px] text-center font-medium flex items-center justify-center">
            Standart
          </h1>
        </div>
        <div className="bg-white px-4 py-1 mx-4 my-2 rounded-[10px]">
          <span className="2xl:text-[12px] lg:text-[10px] text-[#6C7081]">
            Lounge Visits - 1500
          </span>
        </div>
      </div> */}
        {Object.keys(data.result).map(
          (key) => (
            console.log(key, "key"),
            (
              <div key={key}>
                <div className={`bg-white px-6 py-4 mx-4 rounded-[10px]`}>
                  <h1
                    className={`text-[#6C7081] py-2 ${
                      key === "worldElite"
                        ? "bg-[#E7F6FF]"
                        : key === "worldBlackEdition"
                        ? "bg-[#E7FFE9]"
                        : "bg-[#FFF8E7]"
                    } 2xl:text-[16px] lg:text-[14px]] rounded-[10px] text-center font-medium flex items-center justify-center`}
                  >
                    {key}
                  </h1>
                </div>
                {data.result[key].map((item) => (
                  <div
                    key={item.name}
                    className={`bg-white px-4 py-1 mx-4 my-2 rounded-[10px]`}
                  >
                    <span
                      className={`2xl:text-[12px] lg:text-[10px] text-[#6C7081]`}
                    >
                      {item.name} - {item.count}
                    </span>
                  </div>
                ))}
              </div>
            )
          )
        )}
      </div>
    </div>
  );
};

export default GoogleLinks;
