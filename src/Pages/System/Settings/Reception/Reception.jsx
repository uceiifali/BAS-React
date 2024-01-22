import React from "react";
import { Accordion } from "react-bootstrap";

const Reception = () => {
  return (
    <section className="Reception">
      <div className="grid grid-cols-4 gap-4">
        <div className="bg-[#1E1E2D] h-[801px]  rounded-[19px]">
          <div className="p-4 ">
            <p className="text-white">الاستقبال</p>
            <Accordion>
              <Accordion.Body>
                <div className="tabs">
                  <div className="tab  text-[#EFAA20] ">إدارة الاستقبال</div>
                </div>
              </Accordion.Body>
            </Accordion>
          </div>
        </div>
        <div className="bg-[#1E1E2D] h-[801px]  rounded-[19px]">02</div>
        <div className="bg-[#1E1E2D] h-[801px]  rounded-[19px] col-span-2 ">
          03
        </div>
      </div>
    </section>
  );
};

export default Reception;
