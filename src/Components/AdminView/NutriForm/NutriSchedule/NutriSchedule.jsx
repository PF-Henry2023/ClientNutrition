import React, { useState } from "react";
import Select from "react-select";
import "./NutriSchedule.css"; // Import your CSS file for styling

const NutriSchedule = () => {
  const [schedules, setSchedules] = useState({
    1: [],
    2: [],
    3: [],
    4: [],
    5: [],
  });

  const daysOptions = [
    { value: "1", label: "Monday" },
    { value: "2", label: "Tuesday" },
    { value: "3", label: "Wednesday" },
    { value: "4", label: "Thursday" },
    { value: "5", label: "Friday" },
  ];

  const hoursOptions = Array.from({ length: 11 }, (_, i) => {
    const hour = i + 8;
    const formattedHour = hour.toString().padStart(2, "0");
    return {
      value: formattedHour,
      label: `${formattedHour}:00`,
    };
  });

  const handleHoursChange = (day, selectedHours) => {
    setSchedules((prevSchedules) => ({
      ...prevSchedules,
      [day]: selectedHours,
    }));
  };

  console.log(schedules);

  return (
    <div className="schedule-container">
      {" "}
      {daysOptions.map((dayOption) => (
        <div key={dayOption.value} className="day-schedule">
          {" "}
          {/* Apply a CSS class to each day's container */}
          <p className="title">{dayOption.label} Schedule:</p>
          <Select
            className="hours-select"
            options={hoursOptions}
            isMulti
            value={schedules[dayOption.value]}
            onChange={(selectedHours) =>
              handleHoursChange(dayOption.value, selectedHours)
            }
            placeholder="Select hours"
          />
        </div>
      ))}
    </div>
  );
};

export default NutriSchedule;
