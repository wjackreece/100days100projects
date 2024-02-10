import * as React from "react";
import { styled } from "@mui/system";
import { StaticDatePicker } from "@mui/x-date-pickers";

import { LocalizationProvider } from "@mui/x-date-pickers";
import { PickersDay } from "@mui/x-date-pickers";

import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import startOfDay from "date-fns/startOfDay";
import TextField from "@mui/material/TextField";

function StaticDayPicker() {
  const CustomPickersDay = styled(PickersDay, {
    shouldForwardProp: (prop) => prop !== "selected",
  })(({ theme, selected }) => ({
    ...(selected && {
      backgroundColor: "#1976d2",
      color: "white",
      "&:hover, &:focus": {
        backgroundColor: "#1565c0",
      },
      borderTopLeftRadius: "50%",
      borderBottomLeftRadius: "50%",
      borderTopRightRadius: "50%",
      borderBottomRightRadius: "50%",
    }),
  }));

  const [values, setValues] = React.useState([]);

  const findDate = (dates, date) => {
    const dateTime = date.getTime();
    return dates.find((item) => item.getTime() === dateTime);
  };

  const findIndexDate = (dates, date) => {
    const dateTime = date.getTime();
    return dates.findIndex((item) => item.getTime() === dateTime);
  };

  const renderPickerDay = (date, selectedDates, pickersDayProps) => {
    if (!values) {
      return <PickersDay {...pickersDayProps} />;
    }

    const selected = findDate(values, date);

    return (
      <CustomPickersDay
        {...pickersDayProps}
        disableMargin
        selected={selected}
      />
    );
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <StaticDatePicker
        displayStaticWrapperAs="desktop"
        label="Week picker"
        value={values}
        onChange={(newValue) => {
          //copying the values array
          const array = [...values];
          const date = startOfDay(newValue);
          const index = findIndexDate(array, date);
          if (index >= 0) {
            array.splice(index, 1);
          } else {
            array.push(date);
          }
          setValues(array);
        }}
        renderDay={renderPickerDay}
        renderInput={(params) => <TextField {...params} />}
        inputFormat="'Week of' MMM d"
      />
    </LocalizationProvider>
  );
}
export default StaticDayPicker;
