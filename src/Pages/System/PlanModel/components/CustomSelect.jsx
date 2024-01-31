import React, { useEffect, useRef } from "react";
import { Box, Button, IconButton, TextField, MenuItem,Select } from "@mui/material";
export const InputLabel = ({ label, id }) => {
  return (
    <label htmlFor={id} className="text-white text-xs font-medium mb-2">
      {label}
    </label>
  );
};
export default function CustomSelect() {
  const selectRef = useRef(null);
  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  useEffect(()=>{
    console.log(selectRef)
},[])
  return (
    <div>
      <InputLabel id="new-project-name" label={"اسم المشروع"} />
      <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          label="Age"
          onChange={handleChange}
        >
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      {/* <TextField
        id="new-project-name"
        type="text"
        size="small"
        select
        className="w-full bg-[#2B2B40] rounded-[7px]"
        placeholder="ابحث عن ...."
        sx={{
          "& fieldset": {
            border: "none",
          },
          "& input::placeholder": {
            color: "#9DADE8",
          },
        }}
      >
        <div ref={selectRef} className="bg-[#414162] text-white">
          <MenuItem value={10}>مطاعم عشبة الليمون</MenuItem>
          <MenuItem value={20}>مطاعم عشبة الليمون</MenuItem>
          <MenuItem value={30}>مطاعم عشبة الليمون</MenuItem>
          <MenuItem value={10}>مطاعم عشبة الليمون</MenuItem>
          <MenuItem value={20}>مطاعم عشبة الليمون</MenuItem>
          <MenuItem value={30}>مطاعم عشبة الليمون</MenuItem>
        </div>
      </TextField> */}
    </div>
  );
}
