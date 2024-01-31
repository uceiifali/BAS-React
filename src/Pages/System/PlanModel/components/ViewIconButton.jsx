import React from "react";
import { IconButton } from "@mui/material";

const ViewIconButton = React.forwardRef(({...props},ref) =>  {
    return (
      <IconButton {...props} aria-label="view" ref={ref}>
        <img src="/icons/view.png" alt="" className="w-full" />
      </IconButton>
    );
  })

export default ViewIconButton;