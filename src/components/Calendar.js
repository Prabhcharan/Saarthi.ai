import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const Calendar = ({name, value, onChange}) => {
  return (
    <div className="date">
      <DatePicker
        selected={value}
        onChange={val => {
          onChange(name, val);
      }}
        dateFormat="dd/MM/yyyy"
        maxDate={new Date()}
        isClearable
        showYearDropdown
        scrollableYearDropdown
      />
    </div>
  );
};

export default Calendar;
