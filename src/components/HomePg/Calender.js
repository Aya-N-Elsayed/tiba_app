import { useEffect, useState } from "react";
import { Card } from "./Card";
import { Dates } from "./Dates";

import { monthArr } from "./Dates";
import axios from "axios";

import { baseURL } from "../../App";
import { useQuery } from "react-query";
import { ThreeDots } from "react-loader-spinner";

export const MonthCalender = () => {
  let dayCount = 0; // Counter for days

  const [month, setmonth] = useState(new Date().getMonth() + 1);
  const [year, setyear] = useState(new Date().getFullYear());

  // ? Getting reservations for current month

  // # axios
  function getMonthReservations() {
    return axios.get(`${baseURL}calendar/?month=${month}&year=${year}`, {});
  }

  const { isError, isFetching, isLoading, data, refetch } = useQuery(
    "MonthReservations",
    getMonthReservations,
    {
      enabled: true,
    }
  );

  useEffect(() => {
    refetch(); // Manually refetch when month changes
  }, [month, refetch]); // Dependency array

  const calendarData = Object.values(data?.data || {});


  let startIndex = 7 - calendarData.findIndex((item) => item.Weekday === "السبت");
  
  startIndex = startIndex === 7 ? 0 : startIndex;
    console.log({ startIndex })


  // ?  //

  function handleStartday() {
    let cards = [];
    
    while (startIndex > 0) {
      cards.push(
        <div className="col gy-4 col-auto" key={startIndex}>
          <Card
            month={''}
            day={''}
            year={''}
            monthNum={''}
            apiData={''}
            refetchReserve={''}
          />
        </div>
      )
      startIndex--;
    }
    
    return cards;
}


  // # Loading screen

  if (isLoading && !isError) {
    return (
      <div className=" d-flex justify-content-center">
        <ThreeDots color="var(--logo-colortypap-lightnesscolor)" />
      </div>
    );
  }

  return (
    <div className="calender container">
      <div>
        <Dates
          month={month}
          setmonth={setmonth}
          year={year}
          setyear={setyear}
        />
      </div>
      <div className="row gx-2 gy-1 col-md-auto">
        {handleStartday()}
        {Array.isArray(calendarData) &&
          calendarData.map((card, index) => {
            return (
              <>
                <div className="col gy-4 col-auto">
                  <Card
                    key={index}
                    month={monthArr[month]}
                    day={index + 1}
                    year={year}
                    monthNum={month}
                    apiData={card}
                    refetchReserve={refetch}
                  />
                </div>
              </>
            );
          })}
      </div>
    </div>
  );
};
