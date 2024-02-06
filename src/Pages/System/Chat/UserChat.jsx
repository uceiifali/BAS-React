import React, { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import { egypetUsers, saudiaUsers } from "./Chatconsts";
import Image from "../../../Components/Image";
import style from "./Chat.module.css";
import { TextField } from "@mui/material";
import Input from "../../../Components/FormHandler/Input";
import { IoSend } from "react-icons/io5";
import EmojiPicker from "emoji-picker-react";
const UserChat = () => {
  const { country, id } = useParams();
  const [user, setUser] = useState();
  const [openEmojee, setOPenEmojee] = useState(false);
  const emojeeCase = Boolean(openEmojee);
  const Getuser = (country, id) => {
    let user;
    if (country === "egypet") {
      user = egypetUsers.filter((prev) => {
        return prev.id == id;
      });
    } else {
      user = saudiaUsers.filter((prev) => {
        return prev.id == id;
      });
    }
    setUser(user[0]);
    return user[0];
  };
  useEffect(() => {
    Getuser(country, id);
  }, [country, id]);

  return (
    <div className="w-full h-full  p-2">
      <p className="text-[#D59921]  text-center ">{user?.poisition}</p>
      <div className="my-3 flex gap-3">
        <Image
          src={user?.img}
          alt="user img"
          className=" w-[81px] h-[81px] rounded-[50%]"
        />
        <div>
          <h2 className="text-white text-base">{user?.name}</h2>
          <p className="text-[#565674] text-base">{user?.email}</p>
          <p className="text-[#565674] text-base">{user?.phone}</p>
        </div>
      </div>
      <div className="chat-container mb-2 p-2 overflow-y-auto overflow-x-hidden h-[537px] border !border-[#D5992180]  scrollbar-none  !scrollbar-track-[transparent] !scrollbar-thin !scrollbar-thumb-[#D9D9D9] mt-4">
        <div className="my-2  flex justify-end gap-3">
          <div
            className={`${style.userSenderMessage}  p-[14.22px] w-[241.67px] h-[41.43px] bg-[#151521] `}
          >
            <p className="text-white text-xs">السيستم هيجهز امتة يا حبيب ؟</p>
          </div>
          <Image
            src={user?.img}
            alt={"user img"}
            className={"w-[40px] h-[40px] rounded-[50%]"}
          />
        </div>
        <div className="my-2  flex justify-start gap-3">
          <Image
            src={"/People/habeeb.jpg"}
            alt={"user img"}
            className={"w-[40px] h-[40px] rounded-[50%]"}
          />
          <div
            className={`${style.userReciverMessage}  p-[14.22px] w-[241.67px] h-[41.43px] bg-[#414162] `}
          >
            <p className="text-white text-xs"> ابشر يا غالي</p>
          </div>
        </div>
      </div>
      <div className="w-full mt-2 relative   bg-[#151521] rounded-[20px] border !border-[#414162] h-[97px] overflow-y-auto overflow-x-hidden scrollbar-none  !scrollbar-track-[transparent] !scrollbar-thin !scrollbar-thumb-[#D9D9D9]">
        <input
          // color="#fff"
          // inputProps={{ style: { color: "red" } }}
          className="form-control mb-2 overflow-x-hidden h-[50px] overflow-y-auto scrollbar-none  !scrollbar-track-[transparent] !scrollbar-thin !scrollbar-thumb-[#D9D9D9]   !bg-[#151521] !w-full  !text-start !text-white"
          placeholder="ارسال رسالة"
          variant="standard"
        />
        <div className="mx-2 flex justify-between ">
          <IoSend color="#414162" className="pointer" size={25} />
          <div>
            <Image
              src="/icons/emoje.png"
              alt="emoje icon"
              className={"pointer  w-[20px] h-[20px] rounded-[50%]"}
              onClick={() => {
                setOPenEmojee(!openEmojee);
              }}
            />
            <EmojiPicker open={emojeeCase} className="absolute top-1 !left-0" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserChat;
