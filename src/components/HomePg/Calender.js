import { useEffect, useState } from "react";
import { Card } from "./Card";
import { Dates } from "./Dates";
import { monthArr } from "./Dates";
import { ThreeDots } from "react-loader-spinner";
import { useMonthsReservations } from "../Utilities/Operation/DataFetching";
import { NewPatientBtn } from "../Btns/NewPatientBtn";

export const MonthCalender = () => {
  const [month, setmonth] = useState(new Date().getMonth() + 1);
  const [year, setyear] = useState(new Date().getFullYear());
  const daysOfWeek = [
    "السبت",
    "الأحد",
    "الاثنين",
    "الثلاثاء",
    "الأربعاء",
    "الخميس",
    "الجمعة",
  ];

  // ? Getting reservations for current month

  const { isError, isLoading, data, refetch } = useMonthsReservations({
    month,
    year,
  });

  const calendarData = Object.values(data?.data || {});

  let startIndex =
    7 - calendarData.findIndex((item) => item.Weekday === "السبت");

  startIndex = startIndex === 7 ? 0 : startIndex;

  // ?  //

  function handleStartday() {
    let cards = [];
    const nDisableCards = startIndex;

    while (startIndex > 0) {
      cards.push(
        <div className="col gy-4 col-auto" key={startIndex}>
          <Card
            month={""}
            day={""}
            year={"-"}
            monthNum={"-"}
            apiData={{ Weekday: daysOfWeek[nDisableCards - startIndex] }}
            refetchReserve={""}
          />
        </div>
      );
      startIndex--;
    }

    return cards;
  }

  return (
    <div className="calender container">
      <div className="">
        <div>
        <Dates
          month={month}
          setmonth={setmonth}
          year={year}
          setyear={setyear}
        />
        </div>

        {/* <div className="w-25">
          <NewPatientBtn />
        </div> */}
      </div>

      {isLoading && !isError ? (
        <div className=" d-flex justify-content-center">
          <ThreeDots color="var(--logo-colortypap-lightnesscolor)" />
        </div>
      ) : (
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
      )}
    </div>
  );
};
