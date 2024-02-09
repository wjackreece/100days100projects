import React from "react";
import {
  TbMoodSmile,
  TbMoodEmpty,
  TbMoodHappy,
  TbMoodSad,
  TbMoodNeutral,
} from "react-icons/tb";
import dayjs from "dayjs";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";

import "./Day002.css";

function Day002() {
  const [value, setValue] = React.useState(dayjs("2022-04-17"));
  console.log(value);

  return (
    <div>
      <h1> 2023 Mood Calendar</h1>
      <h2>~ color each day depending on what your mood was / is ~</h2>

      <p>Select mood:</p>
      <div>
        <button>
          <TbMoodHappy />
        </button>
        <button>
          <TbMoodSmile />
        </button>
        <button>
          <TbMoodEmpty />
        </button>{" "}
        <button>
          <TbMoodSad />
        </button>
        <button>
          <TbMoodNeutral />
        </button>
      </div>
      <p>then click on the circles below</p>

      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DateCalendar
          views={["day"]}
          value={value}
          onChange={(newValue) => setValue(newValue)}
          sx={{
            ".MuiButtonBase-root.MuiPickersDay-root.Mui-selected": {
              backgroundColor: "red",
            },
          }}
        />
      </LocalizationProvider>
    </div>
  );
}

export default Day002;
