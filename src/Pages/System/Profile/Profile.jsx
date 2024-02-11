import React, { useState } from "react";
import SystemControler from "../../../Components/System/SystemControler/SystemControler";
import { FaCaretRight, FaDownload } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import { Container, FormControl, TextField } from "@mui/material";
import Image from "../../../Components/Image";
import { Form } from "react-bootstrap";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import Select from "../../../Components/FormHandler/Select";
import { InputLabel } from "../PlanModel/components/InputLabel";
import PdfImage from "../../../Components/PdfImage";
import { RiDeleteBin6Line } from "react-icons/ri";
import SaveButton from "../../../Components/SaveButton";

const Profile = () => {
  const navigate = useNavigate();
  const [birthDate, setBirthDate] = useState(null);
  const [idDate, setIdDate] = useState(null);
  const [openPdf, setOpenPdf] = useState(null);

  return (
    <div>
      <SystemControler
        child={
          <div className="flex gap-3">
            <FaCaretRight
              onClick={() => navigate(-1)}
              className="pointer"
              color="#fff"
            />
            <p className="text-white">صفحتى الشخصية</p>{" "}
          </div>
        }
      />
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <section className="Profile p-3 bg-[#1E1E2D] h-[782px] overflow-auto scrollbar-none  border !border-[#EFAA20] rounded-[27px] ">
          <Container>
            <h3 className="text-[#EFAA20] text-xl my-2 ">صفحتى الشخصية</h3>
            <fieldset className="border p-2 !border-[#D5992133] w-3/4 mx-auto">
              <legend className="text-center text-white">
                {" "}
                معلوماتى الشخصية
              </legend>
              <div>
                <div className="mx-2 flex gap-3">
                  {/* should be user img */}
                  <Image
                    src="/People/user.png"
                    alt="user img"
                    className={"w-[92px] h-[92px] rounded-[50%]"}
                  />
                  <div className="flex flex-col">
                    <p className="text-white text-xl">بدر بن سليمان </p>
                    <p className="text-[#EFAA20] text-base">
                      رئيس مجلس الأدارة
                    </p>
                    <span className="text-[#565674] text-sm">
                      bader@bsa.com
                    </span>
                  </div>
                </div>
              </div>
              <div className="bg-[#EFAA20] h-[1px]  w-90 text-start mt-3  "></div>
              <div className="grid grid-cols-3 mt-4 gap-3">
                <FormControl className="mb-3">
                  <InputLabel htmlFor="first-Name" label={"الاسم الاول"} />
                  <TextField
                    size="small"
                    id="first-Name"
                    name="first-Name"
                    placeholder="الاسم الاول"
                    variant="outlined"
                    sx={{
                      "& fieldset": {
                        border: "none",
                      },
                    }}
                    inputProps={{
                      sx: {
                        color: "white",
                        py: "10px",
                        // borderRadius:'7px',
                      },
                    }}
                    className=" text-white bg-[#2B2B40] rounded-[7px]"
                  />
                </FormControl>
                <FormControl className="mb-3">
                  <InputLabel htmlFor="last-Name" label={"الاسم الاخير "} />
                  <TextField
                    size="small"
                    id="last-Name"
                    name="last-Name"
                    placeholder="الاسم الاخير"
                    variant="outlined"
                    sx={{
                      "& fieldset": {
                        border: "none",
                      },
                    }}
                    inputProps={{
                      sx: {
                        color: "white",
                        py: "10px",
                      },
                    }}
                    className=" text-white bg-[#2B2B40] rounded-[7px]"
                  />
                </FormControl>
                <FormControl className="mb-3">
                  <InputLabel htmlFor="user-Name" label={"اسم المستخدم"} />
                  <TextField
                    size="small"
                    id="user-Name"
                    name="user-Name"
                    placeholder="الاسم الاخير"
                    variant="outlined"
                    sx={{
                      "& fieldset": {
                        border: "none",
                      },
                    }}
                    inputProps={{
                      sx: {
                        color: "white",
                        py: "10px",
                      },
                    }}
                    className=" text-white bg-[#2B2B40] rounded-[7px]"
                  />
                </FormControl>
                <FormControl className="mb-3">
                  <InputLabel
                    htmlFor="user-email"
                    label={"البريد الالكترونى "}
                  />
                  <TextField
                    size="small"
                    id="user-email"
                    name="user-email"
                    placeholder="البريد الالكتروني"
                    variant="outlined"
                    sx={{
                      "& fieldset": {
                        border: "none",
                      },
                    }}
                    inputProps={{
                      sx: {
                        color: "white",
                        py: "10px",
                      },
                    }}
                    className=" text-white bg-[#2B2B40] rounded-[7px]"
                  />
                </FormControl>
                <FormControl className="mb-3">
                  <InputLabel htmlFor="user-phone" label={"رقم الجوال"} />
                  <TextField
                    size="small"
                    id="user-phone"
                    name="user-phone"
                    placeholder="رقم الجوال"
                    variant="outlined"
                    sx={{
                      "& fieldset": {
                        border: "none",
                      },
                    }}
                    inputProps={{
                      sx: {
                        color: "white",
                        py: "10px",
                      },
                    }}
                    className=" text-white bg-[#2B2B40] rounded-[7px]"
                  />
                </FormControl>
                <FormControl>
                  <InputLabel id="birthDate" label={"تاريخ الزيارة"} />
                  <DatePicker
                    id="birthDate"
                    selected={birthDate}
                    name="birthDate"
                    placeholder="تاريخ الزيارة"
                    onChange={(date) => setBirthDate(date)}
                    dateFormat="dd-MM-yyyy"
                    className="w-full bg-[#2B2B40] rounded-[7px]"
                    sx={{
                      "& fieldset": {
                        border: "none",
                      },
                      "& input": {
                        color: "white",
                      },
                      "& svg": {
                        color: "Rgba(255,255,255,0.5)",
                      },
                    }}
                  />
                  {/* <Form.Label> تاريخ الزيارة</Form.Label> */}
                  {/* <Controller
                    control={control}
                    name="date-input"
                    render={({ field }) => (
                      <FormDatePicker
                        placeholderText="اختر"
                        onChange={(date) => field.onChange(date)}
                        date={field.value}
                      />
                    )}
                  /> */}
                </FormControl>
                <FormControl className="mb-3">
                  <InputLabel htmlFor="city" label={"المدينة "} />
                  <TextField
                    size="small"
                    id="city"
                    name="city"
                    placeholder="المدينة "
                    variant="outlined"
                    sx={{
                      "& fieldset": {
                        border: "none",
                      },
                    }}
                    inputProps={{
                      sx: {
                        color: "white",
                        py: "10px",
                      },
                    }}
                    className=" text-white bg-[#2B2B40] rounded-[7px]"
                  />
                </FormControl>
                <FormControl className="mb-3">
                  <InputLabel htmlFor="area" label={"الحي "} />
                  <TextField
                    size="small"
                    id="area"
                    name="area"
                    placeholder="الحي "
                    variant="outlined"
                    sx={{
                      "& fieldset": {
                        border: "none",
                      },
                    }}
                    inputProps={{
                      sx: {
                        color: "white",
                        py: "10px",
                      },
                    }}
                    className=" text-white bg-[#2B2B40] rounded-[7px]"
                  />
                </FormControl>
                <FormControl className="mb-3">
                  <InputLabel htmlFor="level" label={"الصلاحية"} />
                  <TextField
                    value={"مدير مكتب"}
                    size="small"
                    id="level"
                    name="level"
                    placeholder="الصلاحية "
                    variant="outlined"
                    sx={{
                      "& fieldset": {
                        border: "none",
                      },
                    }}
                    inputProps={{
                      sx: {
                        color: "white",
                        py: "10px",
                      },
                    }}
                    className=" text-white bg-[#2B2B40] rounded-[7px]"
                  />
                </FormControl>
                <FormControl className="mb-3">
                  <InputLabel htmlFor="IdNumber" label={"رقم الهوية "} />
                  <TextField
                    size="small"
                    id="IdNumber"
                    name="IdNumber"
                    placeholder="رقم الهوية "
                    variant="outlined"
                    sx={{
                      "& fieldset": {
                        border: "none",
                      },
                    }}
                    inputProps={{
                      sx: {
                        color: "white",
                        py: "10px",
                      },
                    }}
                    className=" text-white bg-[#2B2B40] rounded-[7px]"
                  />
                </FormControl>
                <FormControl className="mb-3">
                  <InputLabel htmlFor="IdDate" label={"تاريخ الهوية "} />
                  <DatePicker
                    id="idDate"
                    selected={idDate}
                    name="idDate"
                    placeholder="تاريخ الزيارة"
                    onChange={(date) => setIdDate(date)}
                    dateFormat="dd-MM-yyyy"
                    className="w-full bg-[#2B2B40] rounded-[7px]"
                    sx={{
                      "& fieldset": {
                        border: "none",
                      },
                      "& input": {
                        color: "white",
                      },
                      "& svg": {
                        color: "Rgba(255,255,255,0.5)",
                      },
                    }}
                  />
                </FormControl>
                <FormControl className="mb-3">
                  <InputLabel htmlFor="password" label={" كلمة المرور "} />
                  <TextField
                    size="small"
                    id="password"
                    type="password"
                    name="password"
                    placeholder=" كلمة المرور "
                    variant="outlined"
                    sx={{
                      "& fieldset": {
                        border: "none",
                      },
                    }}
                    inputProps={{
                      sx: {
                        color: "white",
                        py: "10px",
                      },
                    }}
                    className=" text-white bg-[#2B2B40] rounded-[7px]"
                  />
                </FormControl>
              </div>
            </fieldset>
            <fieldset className="border p-4 my-4 !border-[#D5992133] w-3/4 mx-auto">
              <legend className="text-center text-white"> نبذة عنى</legend>

              <FormControl className="!w-full">
                <InputLabel htmlFor="password" label={" نبذة عني  "} />
                <textarea cols={5} rows={5} className="form-control !w-full" />
              </FormControl>
            </fieldset>
            <fieldset className="border p-4 my-4 !border-[#D5992133] w-3/4 mx-auto">
              <legend className="text-center text-white">اوراقي</legend>

              <FormControl className="!w-full">
                <InputLabel htmlFor="password" label={"اوراقي "} />
                <div className="border flex my-3  justify-between  bg-[#1E1E2D] !border-[#EFAA20] !w-full h-[55px] rounded-[3.37px]">
                  <div className=" flex items-center gap-3">
                    <PdfImage
                      onClick={() => {
                        setOpenPdf(true);
                      }}
                      openPdf={openPdf}
                      setOpenPdf={setOpenPdf}
                      pdfSrc={"/example.pdf"}
                    />
                    <p className="text-white">اسم الملف</p>
                  </div>
                  <div className="flex mx-3 items-center gap-3">
                    <div className="bg-[#9E0C1E] flex justify-center items-center  rounded-[3px] pointer w-[22px] h-[25px]">
                      <RiDeleteBin6Line color="#fff" size={15} />
                    </div>
                    <div className="bg-[#03795D] flex justify-center items-center  rounded-[3px] pointer w-[22px] h-[25px]">
                      <FaDownload color="#fff" size={15} />
                    </div>
                  </div>
                </div>
                <div className="border flex my-3  justify-between  bg-[#1E1E2D] !border-[#EFAA20] !w-full h-[55px] rounded-[3.37px]">
                  <div className=" flex items-center gap-3">
                    <PdfImage
                      onClick={() => {
                        setOpenPdf(true);
                      }}
                      openPdf={openPdf}
                      setOpenPdf={setOpenPdf}
                      pdfSrc={"/example.pdf"}
                    />
                    <p className="text-white">اسم الملف</p>
                  </div>
                  <div className="flex mx-3 items-center gap-3">
                    <div className="bg-[#9E0C1E] flex justify-center items-center  rounded-[3px] pointer w-[22px] h-[25px]">
                      <RiDeleteBin6Line color="#fff" size={15} />
                    </div>
                    <div className="bg-[#03795D] flex justify-center items-center  rounded-[3px] pointer w-[22px] h-[25px]">
                      <FaDownload color="#fff" size={15} />
                    </div>
                  </div>
                </div>
              </FormControl>
            </fieldset>
            <div className="flex justify-end">
              <SaveButton
                onClick={() => {
                  navigate(-1);
                }}
              />
            </div>
          </Container>
        </section>
      </LocalizationProvider>
    </div>
  );
};

export default Profile;
