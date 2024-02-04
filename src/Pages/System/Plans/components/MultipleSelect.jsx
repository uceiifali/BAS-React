import { useState } from "react";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { MdOutlineClose } from "react-icons/md";
import { Menu, IconButton } from "@mui/material";

export default function MultipleSelect({
  children,
  placeholder,
  selected,
  setSelected,
}) {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div className="">
      <div className="w-full  flex justify-between items-center text-white p-2 bg-[#2B2B40] rounded-[7px]">
        <div className="flex w-full items-center gap-1">
          <button
            onClick={handleClick}
            className={`${
              selected.length > 0
                ? "bg-[#D9D9D9] text-[#2B2B40]  rounded-full py-1 px-4 drop-shadow-xl"
                : "text-white/50 w-full text-end cursor-pointer text-sm font-normal "
            } `}
          >
            {selected.length > 0 ? (
              <MdOutlineClose
                className="rotate-45 text-[#2B2B40]"
                color="#2B2B40"
              />
            ) : (
              placeholder
            )}
          </button>
          <div className="flex gap-1 max-w-full  ">
            {selected?.length > 0 &&
              selected?.map(({ id, name }) => (
                <p className="flex items-center py-1 bg-[#D9D9D9] text-[#2B2B40] text-xs rounded-full px-1">
                  {name}
                  <IconButton
                    onClick={() =>
                      setSelected((prev) =>
                        [...prev].filter((item) => item.id !== id)
                      )
                    }
                    sx={{ p: 0, color: "#2B2B40" }}
                  >
                    <MdOutlineClose fontSize={16} />
                  </IconButton>
                </p>
              ))}
          </div>
        </div>

        <MdKeyboardArrowLeft className="text-white/50" />
      </div>

      <Menu
        fullwidth
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        PaperProps={{
          className: "scrollbar-none",
        }}
        MenuListProps={{
          "aria-labelledby": "basic-button",
          
            sx:{
              "& ul":{
                overflowY: "scroll",
              },
              
            },
          style: {
            maxHeight: 48 * 4.5,
            width: "42.4ch",
            
          },
        }}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        {children}
      </Menu>

      {/* <input
      id="new-project-name"
      type="text"
      className="w-full text-white p-2 bg-[#2B2B40] rounded-[7px]"
      placeholder={placeholder}
    /> */}
    </div>
  );
}
