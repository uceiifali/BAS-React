import React from "react";

const DeleteButton = ({ onClick, type = "Button" }) => {
  return (
    <div className=" d-flex justify-content-center">
      <button
        onClick={onClick}
        type={type}
        className="bg-[#BA0A0A]  text-base border-solid text-black !w-[139px] !h-[28px] !rounded-md hover:!bg-transparent hover:!text-white hover:border-2 hover:border-[#BA0A0A] "
      >
        حذف{" "}
      </button>
    </div>
  );
};
export default DeleteButton;

// .sumbmitAddUpdateUser:hover {
//     background-color: unset !important;
//     border: 1px solid #EFAA20 !important;
//     color: white !important;
// }
