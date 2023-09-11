import { Card } from "./Card";
import { Dates } from "./Dates";
export const MonthCalender = () => {
  const maxDays = 31;  // Maximum days in the month
  let dayCount = 0;  // Counter for days

  return (
    <div className="calender container">
      <div>
        <Dates />
      </div>
      {Array.from({ length: 6 }, (_, rowIndex) => (
        <div key={rowIndex} className="row gx-3 gy-6 col-md-auto">
          {Array.from({ length: 7 }, (_, colIndex) => {
            dayCount++;
            if (dayCount <= maxDays) {
              return (
                <div key={rowIndex * 7 + colIndex} className="col gy-3 col-auto">
                  <Card />
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
