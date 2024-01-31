import * as React from "react";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import { renderTimeViewClock } from "@mui/x-date-pickers/timeViewRenderers";

export default function TimePickerButton({ ...props }) {
  return (
    <div dir="ltr" className="">
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DemoContainer components={["TimePicker"]}>
          <TimePicker
            orientation="landscape"
            className="!border-8"
            viewRenderers={{
              hours: renderTimeViewClock,
              minutes: renderTimeViewClock,
              seconds: renderTimeViewClock,
            }}
            slotProps={{
              textField: { size: "small", variant: "filled" },
              InputLabelProps: {
                color: "#f",
              },
            }}
            {...props}
          />
        </DemoContainer>
      </LocalizationProvider>
    </div>
  );
}
