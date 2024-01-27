import * as React from "react";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { renderTimeViewClock } from "@mui/x-date-pickers/timeViewRenderers";

export default function TimePickerButton({type = "time", ...props }) {
  return (
    <div dir="ltr" className="">
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DemoContainer components={["TimePicker","DatePicker"]}>
          {
            type === "time"? 
            <TimePicker
              orientation="landscape"
              //   label="With Time Clock"
              className="!border-8"
              viewRenderers={{
                hours: renderTimeViewClock,
                minutes: renderTimeViewClock,
                seconds: renderTimeViewClock,
              }}
              slotProps={{ 
                textField: {size: 'small', variant: 'filled' , sx:{
                  "&": {
                    color: "#ffffff81",
                    backgroundColor: "#2B2B40",
                    borderRadius: "7px"
                  },
                  "& .MuiInputBase-root": {
                    color: "#ffffff81",
                    backgroundColor: "#2B2B40",
                    borderRadius: "7px"
                  },
                  "& svg": { color: "#ffffff81" },
                  "& label": { display: "none" },
                  "& fieldset": { border: "none", color: "#ffffff81" },
                }}
                ,InputLabelProps:{
                color:"white"
  
              } }}
              {...props}
            />
            : 
            <DatePicker
             
              //   label="With Time Clock"
              className="!border-8"
              
              slotProps={{ 
                textField: {size: 'small', variant: 'filled' , sx:{
                  "&": {
                    color: "#ffffff81",
                    backgroundColor: "#2B2B40",
                    borderRadius: "7px"
                  },
                  "& .MuiInputBase-root": {
                    color: "#ffffff81",
                    backgroundColor: "#2B2B40",
                    borderRadius: "7px"
                  },
                  "& svg": { color: "#ffffff81" },
                  "& label": { display: "none" },
                  "& fieldset": { border: "none", color: "#ffffff81" },
                }}
                ,InputLabelProps:{
                color:"white"
  
              } }}
              {...props}
            />
          }
        </DemoContainer>
      </LocalizationProvider>
    </div>
  );
}
