import React, { useContext, useEffect, useState } from 'react'
import { Modal } from 'react-bootstrap'
import { AiOutlineCloseCircle } from 'react-icons/ai';
import { MdCreditScore } from 'react-icons/md';
import { Link } from 'react-router-dom';
import { multiStepContext } from '../../../../Context/StepContext';


const Congratus = () => {
   
    const {openCongrats,setOpenCongrats,userData} = useContext(multiStepContext)
     

    return (
        <div>
            {openCongrats && <Modal
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                onHide={() => setOpenCongrats(false)}
                show={openCongrats}
            >
                < Modal.Header >
              <AiOutlineCloseCircle onClick={()=>{setOpenCongrats(false)}} className="pointer" size={30} color='#E1B67C' />
                </Modal.Header>
                <Modal.Body >
                    <section className='congratus  h-100 w-100 text-center d-flex align-items-center justify-content-center flex-column '>
                        <img src={"./correct.gif"}  width={150} height={150} className='my-3' color='#E1B67C' />
                        <h2>تهانينا</h2>
                        <p className='mt-3 w-75'>
                            سنبدأ في مراجعة الطلب رقم (<span className='default-color' >3112</span>) ومعالجته وفقًا للمعلومات التي قدمتموها. إذا كان هناك أي تفاصيل إضافية أو مستندات تحتاجون إلى تقديمها، فسنتواصل معكم في أقرب وقت ممكن.

                        </p>
                    </section>


                </Modal.Body>


            </Modal >


            }
        </div>
    )
}

export default Congratus
