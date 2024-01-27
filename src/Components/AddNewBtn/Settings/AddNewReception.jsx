import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Box from '@mui/material/Box';
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import DatePicker from "react-datepicker";
import TimePickerButton from "../../../Pages/TimePickerPage";
export default function AddNewReception({ title, show, handleClose, arr, id }) {
  let [meetingDate, setMeetingDate] = useState(null);
  let [startMeeting, setStartMeeting] = useState(null);
  let [endMeeting, setEndMeeting] = useState(null);
  const [inputVal, setInputVal] = useState("");
  const handleSave = () => {
    arr((prev) => {
      // console.log(prev.subCategories)
      return prev.map((item) =>
        item.id == id ? { ...item, name: inputVal } : item
      );
      // {...prev,subCategories: [...prev.subCategories,{id:prev.subCategories.length+1,name:inputVal}] }
    });
    handleClose();
  };
  return (
    <Modal
      centered
      contentClassName="bg-[#1E1E2D] border !max-w-[700px] !border-[#EFAA20] !rounded-[20px] text-white"
      show={show}
      onHide={handleClose}
      size="lg"
    >
      <Modal.Header className="!justify-between border-none">
        <div className=""></div>
        <Modal.Title className="py-2 px-4 rounded-[5px] text-xl font-semibold text-[#EFAA20] border !border-[#EFAA20]">
          {title}
        </Modal.Title>
        <Button
          className="p-0 bg-transparent hover:bg-transparent"
          onClick={handleClose}
        >
          <img src="/Rejected.png" alt="" />
        </Button>
      </Modal.Header>
      <Modal.Body>
        <div className="w-full">
        <fieldset className="mb-5 border !border-[#efaa207f] p-2 w-full">
          <legend className="text-base mx-auto text-center font-semibold">معلومات الزيارة</legend>
          <div className="grid grid-cols-6 gap-3">

          <Box className="col-span-2">
          <label className="mb-2 text-xs font-medium" htmlFor="visit-type">
          نوع الزياره
          </label>
          <TextField
            fullWidth
            id="visit-type"
            select
            label="Select"
            defaultValue="export"
            sx={{
              "& .MuiInputBase-root": {
                color: "#ffffff81",
                backgroundColor: "#2B2B40",
                borderRadius: "7px"
              },
              "& svg": { color: "#ffffff81" },
              "& label": { display: "none" },
              "& fieldset": { border: "none", color: "#ffffff81" },
            }}
          >
            <MenuItem value={"export"}>صادرة</MenuItem>
            <MenuItem value={"import"}>واردة</MenuItem>
          </TextField>
          </Box>
          <Box className="col-span-4">
          <label className="mb-2 text-xs font-medium" htmlFor="visit-type">
          اسم الموظف
          </label>
          <TextField
            fullWidth
            id="visit-type"
            select
            label="Select"
            defaultValue="export"
            sx={{
              "& .MuiInputBase-root": {
                color: "#ffffff81",
                backgroundColor: "#2B2B40",
                borderRadius: "7px"
              },
              "& svg": { color: "#ffffff81" },
              "& label": { display: "none" },
              "& fieldset": { border: "none", color: "#ffffff81" },
            }}
          >
            <MenuItem value={"export"}>موظف 1</MenuItem>
            <MenuItem value={"import"}>موظف 2</MenuItem>
          </TextField>
          </Box>

          </div>
          <div className="grid grid-cols-6 gap-3">

          <Box className="col-span-3">
          <label className="mb-2 text-xs font-medium" htmlFor="visit-type">
          الهوية
          </label>
          <TextField
            fullWidth
            id="visit-type"
            select
            
            
            sx={{
              "& .MuiInputBase-root": {
                color: "#ffffff81",
                backgroundColor: "#2B2B40",
                borderRadius: "7px"
              },
              "& svg": { color: "#ffffff81" },
              "& label": { display: "none" },
              "& fieldset": { border: "none", color: "#ffffff81" },
            }}
          >
            <MenuItem value={"export"}>صادرة</MenuItem>
            <MenuItem value={"import"}>واردة</MenuItem>
          </TextField>
          </Box>
          <Box className="col-span-3">
          <label className="mb-2 text-xs font-medium" htmlFor="visit-type">
          فئة الزائر
          </label>
          <TextField
            fullWidth
            id="visit-type"
            placeholder="اكتب فئة الزائر"
            
            sx={{
              "& .MuiInputBase-root": {
                color: "#ffffff81",
                backgroundColor: "#2B2B40",
                borderRadius: "7px"
              },
              "& svg": { color: "#ffffff81" },
              "& label": { display: "none" },
              "& fieldset": { border: "none", color: "#ffffff81" },
            }}
          />
            
          
          </Box>

          </div>
          <div className="grid grid-cols-6 gap-3">

          <Box className="col-span-4">
          <label className="mb-2 text-xs font-medium" htmlFor="visit-type">
          مكان الزيارة
          </label>
          <TextField
            fullWidth
            id="visit-type"
            placeholder="ادخل الجه"
            
            
            sx={{
              "& .MuiInputBase-root": {
                color: "#ffffff81",
                backgroundColor: "#2B2B40",
                borderRadius: "7px"
              },
              "& svg": { color: "#ffffff81" },
              "& label": { display: "none" },
              "& fieldset": { border: "none", color: "#ffffff81" },
            }}
          />
          
          </Box>
          <Box className="col-span-2">
          <label className="mb-2 text-xs font-medium" htmlFor="visit-type">
          رقم الجوال
          </label>
          <TextField
            fullWidth
            id="visit-type"
            placeholder="ادخل رقم الجوال"
            
            sx={{
              "& .MuiInputBase-root": {
                color: "#ffffff81",
                backgroundColor: "#2B2B40",
                borderRadius: "7px"
              },
              "& svg": { color: "#ffffff81" },
              "& label": { display: "none" },
              "& fieldset": { border: "none", color: "#ffffff81" },
            }}
          />
            
          
          </Box>

          </div>
          <div className="grid grid-cols-6 gap-3">

          <Box className="col-span-2">
          <label className="mb-2 text-xs font-medium" htmlFor="visit-type">
          تاريخ الزيارة
          </label>
          <TimePickerButton
                      type="date"
                      selected={meetingDate}
                      placeholderText=" ادخل تاريخ الاجتماع "
                      onChange={(date) => setMeetingDate(date)}
                      dateFormat="dd-MM-yyyy"
                      className="w-50 form-control"
                    />
          
          </Box>
          <Box className="col-span-2">
          <label className="mb-2 text-xs font-medium" htmlFor="visit-type">
          وقت الزيارة من
          </label>
          <TimePickerButton
                    value={startMeeting}
                    placeholder="   وقت بدا الاجتماع "
                    onChange={(time) => setStartMeeting(time)}
                    className="w-100 form-control " 
                    />
            
          
          </Box>
          <Box className="col-span-2">
          <label className="mb-2 text-xs font-medium" htmlFor="visit-type">
          وقت الزيارة الى
          </label>
          <TimePickerButton
                      value={endMeeting}
                      placeholder="   وقت نهاية الاجتماع "
                      onChange={(time) => setEndMeeting(time)}
                      className="w-100 form-control "
                    />
            
          
          </Box>

          </div>
        </fieldset>
        <fieldset className="mb-5 border !border-[#efaa207f] p-2 w-full">
          <legend className="text-base mx-auto text-center font-semibold">تفاصيل الزيارة</legend>
          

          <Box className="">
          <label className="mb-2 text-xs font-medium" htmlFor="visit-type">
          سبب الزيارة
          </label>
          <TextField
            fullWidth
            id="visit-type"
            multiline
            minRows={6}
            maxRows={8}
            placeholder="اكتب سبب الزيارة .................................."
            sx={{
              "& .MuiInputBase-root": {
                color: "#ffffff81",
                backgroundColor: "#2B2B40",
                borderRadius: "7px"
              },
              "& svg": { color: "#ffffff81" },
              "& label": { display: "none" },
              "& fieldset": { border: "none", color: "#ffffff81" },
            }}
          />
          
          </Box>
          <Box className="">
          <label className="mb-2 text-xs font-medium" htmlFor="visit-type">
          ملاحظات
          </label>
          <TextField
            fullWidth
            id="visit-type"
            multiline
            minRows={6}
            maxRows={8}
            placeholder="اكتب ملاحظات .................................."
            sx={{
              "& .MuiInputBase-root": {
                color: "#ffffff81",
                backgroundColor: "#2B2B40",
                borderRadius: "7px"
              },
              "& svg": { color: "#ffffff81" },
              "& label": { display: "none" },
              "& fieldset": { border: "none", color: "#ffffff81" },
            }}
          />
          
          </Box>
          

          

        </fieldset>
        <fieldset className=" border !border-[#efaa207f] p-2 w-full">
          <legend className="text-base mx-auto text-center font-semibold">المرفقات</legend>
          

          <Box className="!justify-start ">
              <label htmlFor="upload-file" className="bg-[#2B2B40]  flex flex-col justify-center items-center max-w-fit px-1 py-4 rounded-xl border !border-dashed !border-[#EFAA20]">
              <input id="upload-file" type="file" className="hidden" />
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
  <path d="M1 8H8M8 8H15M8 8V15M8 8V1" stroke="#EFAA20" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
                <p>أضافة جديدة</p>
              </label>
            </Box>
          
          
          

          

        </fieldset>
        </div>
        {/* <input
            className="w-full bg-[#161622] py-3 px-2 rounded-[7px] outline-none"
            type="text"
            placeholder="ادخل الاسم"
            value={inputVal}
            onChange={(e)=> setInputVal(e.target.value)}
          /> */}
      </Modal.Body>
      <Modal.Footer className="border-none">
        <Button
          className="mx-auto py-1 px-14 font-semibold text-[15px] border !border-[#EFAA20] text-[#2B2B40] hover:text-white bg-[#EFAA20] hover:bg-[#2B2B40]"
          onClick={handleSave}
        >
          حفظ
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
