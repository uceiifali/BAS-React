import React from "react";
import Image from "./Image";

const Loading = () => {
  return (
    <div className=" vh-100  w-100  overflow-y-hidden  ">
      <Image
        src="../initialVideo.gif"
        alt="loading video"
        className="w-100 h-100"
      />
    </div>
  );
};

export default Loading;
