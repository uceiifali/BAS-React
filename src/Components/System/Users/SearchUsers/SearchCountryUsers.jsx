import React, { useContext, useState } from "react";
import Input from "../../../FormHandler/Input";
import { NavDropdown } from "react-bootstrap";
import "./index.css";
import { Link } from "react-router-dom";
import Image from "../../../Image";
import { SearchComponent } from '../../../SearchComponent/SearchComponent'
import { useQuery } from "react-query";
import { getAllUsers } from "../../../../helper/fetchers/Users";
import { UsersParamsContext } from "../../../../Context/UsersParamsContext";
const SearchCountryUsers = () => {
  const users = Array.from({ length: 15 });
  const {params,setParams} = useContext(UsersParamsContext);

  const { isLoading, error, data } = useQuery(['user', params], () =>
  getAllUsers(params)
  );
  // console.log(data?.data?.allUsers);
  return (
    <div>
      <div className="search-users  overflow-x-hidden overflow-y-scroll scrollbar-none p-0">
        <div className="d-flex   justify-content-center">
          <SearchComponent /> 
        </div>

        <div className="d-flex w-100 align-items-center justify-content-between my-2">
          <p className="text-center px-2 text-white">كل المستخدمين</p>
          <NavDropdown
            title={
              <FilterIcon/>
            }
            className="    fs-5 "
            id="collapsible-nav-dropdown"
          >
            <NavDropdown.Item
              className="text-end  d-flex justify-content-between  align-items-center"
              onClick={() => setParams({status: 1})}
            >
              <span> متصل</span>
              <div className="connected" />
            </NavDropdown.Item>
            <NavDropdown.Item
              className="text-end  d-flex justify-content-between align-items-center"
              onClick={() => setParams({status: 0})}
            >
              <span>غير متصل</span>
              <div className="not-connected " />
            </NavDropdown.Item>
          </NavDropdown>
        </div>
        {data?.data?.allUsers?.map((user, index) => (
          <Link to={`/system/users/${user?._id}`} key={index}>
            <div className="tab !mb-3 flex gap-2 border !border-transparent hover:!border-[#efaa20] p-2 ">
              <div className="w-8 h-8 rounded-full overflow-hidden">
              <Image
                src={process.env.PUBLIC_URL + "/People/habeeb.jpg"}
                alt="user img"
                className="object-cover"
              />
              </div>
              <div className="flex-1 flex flex-col">
                <h2 className=" text-white         ">
                  {user?.firstName + " " + user?.lastName}
                </h2>
                <p className="main-text text-sm">{user?.email}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default SearchCountryUsers;


const FilterIcon = ()=>{
  return <svg
  xmlns="http://www.w3.org/2000/svg"
  width="17"
  height="15"
  viewBox="0 0 17 15"
  fill="none"
>
  <path
    d="M17 0H0L6.8 7.77417V13.1487L10.2 14.7923V7.77417L17 0Z"
    fill="#D59921"
  />
</svg>
}