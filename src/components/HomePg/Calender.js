import { useState } from "react";
import { Card } from "./Card";
import { Dates } from "./Dates";

import { monthArr } from "./Dates";


export const MonthCalender = () => {
  let maxDays = 31;  // Maximum days in the month
  let dayCount = 0;  // Counter for days

  const [month, setmonth] = useState(new Date().getMonth() + 1);

  if (month == 2) { maxDays = 28; }

  else if (month == 4 || month == 6 || month == 9 || month == 11) { maxDays = 30; }

  return (
    <div className="calender container">
      <div>
        <Dates month={month} setmonth={setmonth}/>
      </div>
      {Array.from({ length: 6 }, (_, rowIndex) => (
        <div key={rowIndex} className="row gx-3 gy-6 col-md-auto">
          {Array.from({ length: 7 }, (_, colIndex) => {
            dayCount++;
            
            if (dayCount <= maxDays) {
              return (
                <div key={rowIndex * 7 + colIndex} className="col gy-3 col-auto">
                  <Card month={monthArr[month]} day={dayCount} />
                </div>
              );
            }
            return null;
          })}
        </div>
      ))}
    </div>
  );
}
