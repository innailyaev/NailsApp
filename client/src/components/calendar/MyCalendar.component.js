import React, { useState } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "moment/locale/he";
import "react-big-calendar/lib/css/react-big-calendar.css";

moment.locale();
const localizer = momentLocalizer(moment);
// const start = moment().startOf("month").format("YYYY-MM-DD hh:mm");
// const end = moment().endOf("month").format("YYYY-MM-DD hh:mm");

const MyCalendar = (props) => {
  const [Events, setEvents] = useState([
    {
      start: moment().toDate(),
      end: moment().add(1, "days").toDate(),
      title: "some title",
    },
  ]);

  const handleSelectSlot = (start) => {
  
    console.log("hello");
  };

  return (
    <div className="calenderWrapper">
      <Calendar
        localizer={localizer}
        rtl={true}
        selectable={true}
        onSelectSlot={handleSelectSlot}
        defaultDate={new Date()}
        defaultView="month"
        events={Events}
        style={{ height: 500 }}
        messages={{
          next: "הבא",
          previous: "קודם",
          today: "היום",
          month: "חודש",
          week: "שבוע",
          day: "יום ",
          agenda: "סיכום",
        }}
      />
    </div>
  );
};

export default MyCalendar;