import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { egypetUsers, saudiaUsers } from "./Chatconsts";
import Image from "../../../Components/Image";

const UserChat = () => {
  const { country, id } = useParams();
  const [user, setUser] = useState();

  const Getuser = (country, id) => {
    let user;
    if (country === "egypet") {
      user = egypetUsers.filter((prev) => {
        return prev.id == id;
      });
      //   console.log("user is " + User);
    } else {
      user = saudiaUsers.filter((prev) => {
        return prev.id == id;
      });
    }
    console.log(user);
    setUser(user[0]);
    return user[0];
  };
  console.log(user);
  useEffect(() => {
    Getuser(country, id);
  }, [country, id]);

  return (
    <div className="w-full h-full p-2">
      <p className="text-[#D59921] text-center ">{user?.poisition}</p>
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
      <div className="chat-container mb-2 overflow-y-auto overflow-x-hidden h-[537px] border !border-[#D5992180]  scrollbar-none  !scrollbar-track-[transparent] !scrollbar-thin !scrollbar-thumb-[#D9D9D9] mt-4"></div>
      <div className="w-full mt-2 bg-[#151521] rounded-[20px] border !border-[#414162] h-[97px] overflow-y-auto overflow-x-hidden scrollbar-none  !scrollbar-track-[transparent] !scrollbar-thin !scrollbar-thumb-[#D9D9D9]">

      </div>
    </div>
  );
};

export default UserChat;
