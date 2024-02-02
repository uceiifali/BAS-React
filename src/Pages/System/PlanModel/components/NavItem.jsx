import { useContext } from "react";
import { ProjectContext } from "../context/ProjectContext";
import { DataTable } from "../Projects";

export const NavItem = ({ title, search ,data,setData }) => {
  

  return (
    <div className="tab p-2 my-2 rounded-md bg-[#2B2B40] text-white/50 text-end w-100">
      <button
        onClick={() => {
          if (search === "الكل") {
            setData(data);
          } else {
            setData(data?.filter((item) => item.status === search));
          }
        }}
        className="w-full text-right"
      >
        {title}
      </button>
    </div>
  );
};
