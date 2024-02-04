import React, { useState } from "react";
import Modal from 'react-bootstrap/Modal';
import ResultComponent from "./ResultComponent";
import KeyPadComponent from "./KeyPadComponent";

const Calculator = ({show,onClose}) => {
  const [result, setResult] = useState("");

  const onClick = (button) => {
    if (button === "=") {
      calculate();
    } else if (button === "AC") {
      reset();
    } else if (button === "CE") {
      backspace();
    } else {
      setResult((prevResult) => prevResult + button);
    }
  };

  const calculate = () => {
    let checkResult = "";
    if (result.includes("--")) {
      checkResult = result.replace("--", "+");
    } else {
      checkResult = result;
    }

    try {
      setResult((eval(checkResult) || "") + "");
    } catch (e) {
      setResult("error");
    }
  };

  const reset = () => {
    setResult("");
  };

  const backspace = () => {
    setResult((prevResult) => prevResult.slice(0, -1));
  };

  return (
    <Modal
    centered
    show={show}
    size="lg"
    onHide={onClose}
    className="max-w-[300px] border !border-[#464647] rounded-lg overflow-hidden  m-auto ">
      <Modal.Header>
      <ResultComponent result={result} />
      </Modal.Header>
      <Modal.Body>
      <KeyPadComponent onClick={onClick} />
      </Modal.Body>
    </Modal>
  );
};

export default Calculator;
