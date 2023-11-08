

import React, { useContext, useEffect, useState } from 'react'
import MultiStep from 'react-multistep'
import { Modal } from 'react-bootstrap'
import { AiOutlineCloseCircle } from "react-icons/ai"
import { Link } from 'react-router-dom'

import { multiStepContext } from '../../../../Context/StepContext'
import ReviewStepOne from '../ReviewSteps/ReviewStepOne'
import ReviewStepTwo from '../ReviewSteps/ReviewStepTwo'
import ReviewStepThree from '../ReviewSteps/ReviewStepThree'



const ReviewMultiSteps = ({ setOpenReviewSteps, openReviewSteps }) => {



    const { userData, setUserData } = useContext(multiStepContext)

    useEffect(() => {

        return () => {
            setUserData([])
        }
    }, [])



    return (
        <div>

            {openReviewSteps && <Modal
                size="lg"
                className='stepper'
                aria-labelledby="contained-modal-title-vcenter"
                onHide={() => setOpenReviewSteps(false)}
                show={openReviewSteps}
            >
                < Modal.Header >
                    <AiOutlineCloseCircle className='pointer' onClick={() => { setOpenReviewSteps(false) }} size={30} color='#E1B67C' />
                </Modal.Header>
                <Modal.Body >

                    <MultiStep className="landing-multiSteps" prevButton={{ title: 'السابق', style: { background: '#E1B67C', marginLeft: "40px", textAlign: "center" } }} nextButton={{ title: 'التالي', style: { background: '#E1B67C' } }}>
                        <ReviewStepOne title='بيانات المشروع ' />
                        <ReviewStepTwo title='بيانات المالك' />
                        <ReviewStepThree title='بيانات الرخصة' />

                    </MultiStep>





                </Modal.Body>


            </Modal >

            }

        </div>
    )
}

export default ReviewMultiSteps
