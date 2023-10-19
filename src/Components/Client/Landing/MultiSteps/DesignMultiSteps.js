
import React, { useContext, useEffect, useState } from 'react'
import MultiStep from 'react-multistep'
import { Modal } from 'react-bootstrap'
import { AiOutlineCloseCircle } from "react-icons/ai"

import { Link } from 'react-router-dom'



import { multiStepContext } from '../../../../Context/StepContext'
import DesignStepOne from '../DesignSteps/DesignStepOne'
import DesignStepTwo from '../DesignSteps/DesignStepTwo'
import DesignStepThree from '../DesignSteps/DesignStepThree'

var countries = require("i18n-iso-countries");

const DesignMultiSteps = ({ openDesignSteps, setOpenDesignSteps }) => {

    const { setUserData } = useContext(multiStepContext)


    useEffect(() => {

        return () => {
            setUserData([])
        }
    }, [])

    return (
        <div>
            {openDesignSteps && <Modal
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                onHide={() => setOpenDesignSteps(false)}
                show={openDesignSteps}
            >
                < Modal.Header  >
                    <AiOutlineCloseCircle className='pointer' onClick={() => { setOpenDesignSteps(false) }} size={30} color='#E1B67C' />
                </Modal.Header>
                <Modal.Body >
                    <MultiStep activeStep={0} prevButton={{ title: 'السابق', style: { background: '#E1B67C', marginLeft: "40px", marginBottom: "40px", marginTop: "40px", textAlign: "center" } }} nextButton={{ title: 'التالي', style: { background: '#E1B67C' } }}>
                        <DesignStepOne title='  بيانات المشروع   ' />
                        <DesignStepTwo title=' بيانات المالك' />
                        <DesignStepThree title='بيانات الملكية ' />
                 
                    </MultiStep >

             
                </Modal.Body>


            </Modal >

            }


        </div>
    )
}

export default DesignMultiSteps
