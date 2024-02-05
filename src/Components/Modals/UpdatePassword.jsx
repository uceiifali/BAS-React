import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

import Image from "../Image";
import { FormControl, FormLabel } from "@mui/material";
// import CloseBtn from "/assets/icons/Rejected.svg"
function UpdatePassword({ message, show, handleSave }) {
  return (
    <>
      <Modal
        centered
        contentClassName="bg-[#1E1E2D] border py-3 !max-w-[700px] !border-[#EFAA20] !rounded-[20.27px] text-white"
        show={show}
        size="lg"
      >
        <Modal.Header className=" py-2 flex !justify-start !rounded-[0px] border-none">
          <p className="text-white text-[23px]  font-bold">تحديث كلمة المرور</p>
        </Modal.Header>
        <Modal.Body>
          <div className="grid grid-cols-3 gap-5">
            <FormControl>
              <FormLabel className=" text-white !border-none ">
                ادخل الكود الوظيفى
              </FormLabel>
              <input
                className="text-white form-control !bg-[#2B2B40] hover:!bg-[#2B2B40] focus:!bg-[#2B2B40] p-2 !border-none"
                placeholder="ادخل الكود الوظيفى"
              />
            </FormControl>

            <FormControl>
              <FormLabel className=" text-white !border-none ">
                ادخل كلمة المرور
              </FormLabel>
              <input
                className="text-white form-control !bg-[#2B2B40] hover:!bg-[#2B2B40] focus:!bg-[#2B2B40]  p-2 !border-none"
                placeholder=" ادخل كلمة المرور  "
              />
            </FormControl>
            <FormControl>
              <FormLabel className=" text-white !border-none ">
                اعد ادخال كلمة المرور
              </FormLabel>
              <input
                className="text-white form-control !bg-[#2B2B40] hover:!bg-[#2B2B40] focus:!bg-[#2B2B40]  p-2 !border-none"
                placeholder=" اعد ادخال  كلمة المرور  "
              />
            </FormControl>
          </div>
        </Modal.Body>
        <Modal.Footer className="border-none">
          <Button
            className="mx-auto py-1 px-14 font-semibold text-[13px] text-white bg-[#EFAA20] hover:bg-[#EFAA20]"
            onClick={handleSave}
          >
            تحديث
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default UpdatePassword;
