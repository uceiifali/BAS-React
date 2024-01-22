import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
// import CloseBtn from "/assets/icons/Rejected.svg"
function AddModal({title,show,handleClose,arr}) {
  const [inputVal,setInputVal] = useState("")
  const handleSave = () => {
    arr(prev=> {
      // console.log(prev.subCategories)
      return {...prev,subCategories: [...prev.subCategories,{id:prev.subCategories.length+1,name:inputVal}] }
    })
    handleClose()
  }

  return (
    <>
      
      

      <Modal
        centered
        contentClassName="bg-[#1E1E2D] border !max-w-[700px] !border-[#EFAA20] !rounded-[20px] text-white"
        show={show}
        onHide={handleClose}
      >
        <Modal.Header className="!justify-between border-none">
          <Modal.Title className="text-xl">
            
            
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
          <input
            className="w-full bg-[#161622] py-3 px-2 rounded-[7px] outline-none"
            type="text"
            placeholder="ادخل الاسم"
            value={inputVal}
            onChange={(e)=> setInputVal(e.target.value)}
          />
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
    </>
  );
}

export default AddModal;
