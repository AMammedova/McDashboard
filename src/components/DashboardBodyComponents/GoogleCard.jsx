import React, { useEffect, useState } from "react";
import useSWR, { mutate } from "swr";
import { subDays, format } from "date-fns";
import Chart from "react-apexcharts";
import { GetAll } from "../../api";
import Spinner from "../Spinner";
const GoogleCard = ({ value, name, id }) => {
  console.log("overr");
  const [chartWidth, setChartWidth] = useState(400);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 1600) {
        setChartWidth(430);
      } else {
        setChartWidth(500);
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  const startDate =
    value?.startDate || format(subDays(new Date(), 7), "yyyy-MM-dd");
  const endDate = value?.endDate || format(new Date(), "yyyy-MM-dd");

  const { data, error, isLoading } = useSWR(
    `${
      id === "1"
        ? "/api/Dashboard/GetGoogleCardReport?StartDate="
        : "/api/Dashboard/GetAppleCardReport?StartDate="
    }${startDate}&EndDate=${endDate}`,
    (key) => GetAll.user(key)
  );
  console.log(data, "data");
  const chartData = data?.result?.cardInfos
    .slice(1)
    .map((cardInfo) => cardInfo.count);
  const chartLabels = data?.result?.cardInfos
    .slice(1)
    .map((cardInfo) => `${cardInfo.name}  -  ${cardInfo.count}`);
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
        <h1 className="text-center my-10">Not Found</h1>
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
      <div className="bg-white rounded-[6px] lg:p-[30px] 3xl:p-1 flex items-center justify-center m-4 text-[#6C7081]text-[12px] ">
        <Chart
          width={chartWidth}
          // height={500}
          series={chartData}
          options={{
            labels: chartLabels,
            dataLabels: {
              enabled: false,
            },

            plotOptions: {
              pie: {
                donut: {
                  labels: {
                    show: true,
                    total: {
                      show: true,
                      showAlways: true,
                      fontSize: 18,
                      color: "#669E5E",
                      fontFamily: "Inter",
                    },
                  },
                },
              },
            },
          }}
          type="donut"
        />
      </div>
    </div>
  );
};

export default GoogleCard;
