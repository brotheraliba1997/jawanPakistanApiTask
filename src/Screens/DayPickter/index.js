import { addYears, format } from "date-fns";
import React, { useState } from "react";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import { addMonths, isSameMonth } from "date-fns";

function DayPickter() {
  // const [selected, setSelected] = React.useState();
  // let footer = <p>Please pick a day.</p>;
  // if (selected) {
  //   footer = <p>You picked {format(selected, 'PP')}.</p>;
  // }

  const today = new Date();
  const nextMonth = addMonths(new Date(), 1);
  const [month, setMonth] = useState(nextMonth);
  console.log(month, ">>>>>>>>>>>>>");

  const footer = (
    <button
      defaultValue={isSameMonth(today, month)}
      onClick={() => setMonth(today)}
    >
      Go to Today
    </button>
  );

  const defaultMonth = new Date(2015, 5);
  return (
    <div>
      {/* <DayPicker
      mode="single"
      selected={selected}
      onSelect={setSelected}
      footer={footer}
    /> */}
            
      <DayPicker month={month} onMonthChange={setMonth} footer={footer} />
      <DayPicker
      defaultMonth={defaultMonth}
      fromMonth={defaultMonth}
      toDate={new Date(2015, 6, 10)}
    />

<DayPicker id="example" numberOfMonths={2} />
    </div>
  );
}

export default DayPickter;
