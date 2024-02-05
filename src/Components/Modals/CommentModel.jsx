import { useState } from "react";
import Button from "react-bootstrap/Button";
import { FormControl, TextField } from "@mui/material";
import Modal from "react-bootstrap/Modal";
import { InputLabel } from "../../Pages/System/PlanModel/components/InputLabel";
// import CloseBtn from "/assets/icons/Rejected.svg"
function CommentModel({ message, show, handleClose, handleSave }) {
  return (
    <>
      <Modal
        centered
        contentClassName="bg-[#1E1E2D] border p-2 !max-w-[700px] !border-[#EFAA20] !rounded-[20.27px] text-white"
        show={show}
        size="lg"
      >
        <Modal.Body>
          <FormControl fullWidth>
            <InputLabel id="comment" label={message} size={20} />

            {/* <InputLabel 
        sx={{
            fontSize: "20px",
            fontWeight: 500,
            color: "white",
            textAlign: "right"
        }}
        id="comment">{message}</InputLabel> */}
            <TextField
              size="small"
              id="new-project"
              multiline
              rows={4}
              placeholder={message}
              variant="outlined"
              sx={{
                my: 1,
                border: "1px solid #EFAA2080",
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
        </Modal.Body>
        <Modal.Footer className="border-none">
          <Button
            className="mx-auto py-1 px-14 font-semibold text-[13px] text-white bg-[#EFAA20] hover:bg-[#EFAA20]"
            onClick={handleSave}
          >
            حفظ
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default CommentModel;
