import React from "react";
import { Button, Modal } from "react-bootstrap";

const ConfirmPoper = ({
  setEditRequest,
  confirmPoper,
  setConfirmPoper,
  text,
}) => {
  return (
    <>
      {confirmPoper && (
        <Modal
          className="submitSystemPoper"
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          onHide={() => setConfirmPoper(false)}
          show={confirmPoper}
        >
          <Modal.Body>
            <div className="d-flex justify-content-center w-100">
              {" "}
              <img
                src={process.env.PUBLIC_URL + "/correct.gif"}
                width={120}
                height={120}
                className="my-3"
                color="#E1B67C"
              />
            </div>

            <div className="d-flex w-75 flex-column mx-auto mt-3 justify-content-center align-items-center ">
              {
                <p className="text-white" style={{ fontSize: "30px" }}>
                  {" "}
                  {text}{" "}
                </p>
              }
              <Button
                onClick={() => {
                  setConfirmPoper(false);
                  setEditRequest(false);
                }}
                className="sumbmitAddUpdateUser"
              >
                حفظ
              </Button>
            </div>
          </Modal.Body>
        </Modal>
      )}
    </>
  );
};

export default ConfirmPoper;
