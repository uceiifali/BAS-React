import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
// import CloseBtn from "/assets/icons/Rejected.svg"
function SuccessfullModal({ message, show, handleClose }) {
  return (
    <>
      <Modal
        centered
        contentClassName="bg-[#1E1E2D] border py-3 !max-w-[700px] !border-[#EFAA20] !rounded-[20.27px] text-white"
        show={show}
        size="lg"
      >
        <Modal.Body>
          <p className="w-full text-center text-[30px] font-semibold py-3 px-2 rounded-[7px] outline-none">
            {message}
          </p>
        </Modal.Body>
        <Modal.Footer className="border-none">
          <Button
            className="mx-auto py-1 px-14 font-semibold text-[13px] text-white bg-[#EFAA20] hover:bg-[#EFAA20]"
            onClick={handleClose}
          >
            حفظ
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default SuccessfullModal;
