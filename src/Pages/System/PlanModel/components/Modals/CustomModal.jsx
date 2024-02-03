import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
// import CloseBtn from "/assets/icons/Rejected.svg"
function CustomModal({ message, title, show, handleClose,handleSave }) {
  return (
    <>
      <Modal
        centered
        contentClassName="bg-[#1E1E2D] border  !max-w-[700px] !border-none !rounded-[0px] text-white"
        show={show}
        size="lg"
      >
        <Modal.Header className="bg-[#D59921] py-2 !rounded-[0px] !justify-between border-none">
          <Modal.Title className="text-[#1E1E2D] text-xl">{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p className="w-full py-3 px-2 rounded-[7px] outline-none">
            {message}
          </p>
        </Modal.Body>
        <Modal.Footer className="border-none gap-2">
          <Button
            className="mx-0 py-1 px-14 font-semibold text-[13px] text-white bg-[#EFAA20] hover:bg-[#EFAA20]"
            onClick={handleSave}
          >
            نعم
          </Button>
          <Button
            className="mx-0 py-1 px-14 font-semibold text-[13px] text-white  bg-[#A83A3A] hover:bg-[#A83A3A]"
            onClick={handleClose}
          >
            لا
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default CustomModal;
