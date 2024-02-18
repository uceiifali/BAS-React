import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import FormHelperText from "@mui/material/FormHelperText";
import { InputLabel } from "../../../Pages/System/PlanModel/components/InputLabel";
export default function UpdateModal({
  title,
  show,
  handleClose,
  onSave,
  setData,
  data,
}) {
  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");
  const [image, setImage] = useState(null);
  const handleSubmit = () => {
    const formData = new FormData();
    formData.append("name", name);
    formData.append("descraption", desc);
    // formData.append("image", image , `${name}`);
    setData(formData)
    
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
        <Modal.Title className="text-xl text-[#EFAA20] border !border-[#EFAA20] p-2 rounded-[5px] font-medium ">
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
        <FormControl fullWidth className="mb-3">
          <InputLabel size={18} label={"اسم البند"} className={"mb-3"} />
          <input
            className="w-full bg-[#161622] py-3 px-2 rounded-[7px] outline-none"
            type="text"
            placeholder="ادخل الاسم"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </FormControl>
        <FormControl fullWidth className="mb-3">
          <InputLabel size={18} label={"الوصف"} className={"mb-3"} />
          <textarea
            className="w-full bg-[#161622] py-3 px-2 rounded-[7px] outline-none"
            rows={5}
            placeholder="ادخل وصف البند"
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
          ></textarea>
        </FormControl>
        <FormControl fullWidth className="mb-3">
          <InputLabel size={18} label={"ارفاق صورة"} className={"mb-3"} />
          <label className="bg-[#161622] flex justify-center items-center rounded-[7px] py-5">
            <input type="file" accept="image/*" className="hidden" onChange={(e)=> setImage(e.target.files[0])} />
            <img src="/upload-icon.svg" alt="upload" />
          </label>
        </FormControl>
      </Modal.Body>
      <Modal.Footer className="border-none">
        <Button
          className="mx-auto py-1 px-14 font-semibold text-[15px] border !border-[#EFAA20] text-[#2B2B40] hover:text-white bg-[#EFAA20] hover:bg-[#2B2B40]"
          onClick={() => {
            handleSubmit();
            onSave();
            handleClose();
          }}
        >
          حفظ
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
