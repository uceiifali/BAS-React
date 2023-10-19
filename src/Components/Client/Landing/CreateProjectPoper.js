import React from 'react'
import { Button, Image, Modal } from 'react-bootstrap';

import DesignCard from './Cards/DesignCard';
import ReviewCard from './Cards/ReviewCard';


const CreateProjectPoper = (props) => {


    // const steps = [
    //     { name: "Name A", component: <StepOne /> },
    //     { name: "Email", component: <StepTwo /> },

    // ];
    const { setOpenPoper, setOpenDesignSteps ,setOpenReviewSteps  } = props
    const handleOpenDesign = () => {
        setOpenPoper(false)
        setOpenDesignSteps(true)
    }
    const handleOpenReview = () => {
        setOpenPoper(false)
        setOpenReviewSteps(true)
    }


    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"

        >
            < Modal.Header closeButton>

            </Modal.Header>
            <Modal.Body >
                <section className='choose-filed'>

                    <div className='d-flex mb-4  justify-content-center'><Image src="/logo.jpg" width={200} height={100} alt='BSA LOGO' className='opacity-75' /></div>
                    <div className='my-4 row justify-content-around g-2'>
                        <div className='col-md-6 d-flex justify-content-center' onClick={handleOpenDesign} >  <DesignCard />     </div>
                        <div className='col-md-6 d-flex justify-content-center' onClick={handleOpenReview} >  <ReviewCard />      </div>

                    </div>
                </section>


            </Modal.Body>


        </Modal >
    )
}

export default CreateProjectPoper
