import React, { createContext, useState } from 'react'
import CreateProjectPoper from '../Components/Client/Landing/CreateProjectPoper'
import App from '../App'
import httpRequest from "../helper/https"
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'

export const multiStepContext = React.createContext()
const StepContext = ({ children }) => {
    const [checkProjectType,setCheckProjectType] = useState("")

    const [openDesignSteps, setOpenDesignSteps] = useState(false)
    const [openReviewSteps, setOpenReviewSteps] = useState(false)
    const [userData, setUserData] = useState([])
    const [openDesign, setOpenDesign] = useState(false)
    const [currentStep, setStep] = useState(1)
    const [finalData, setFinalData] = useState([])
    const [Submitted, setSubmitted] = useState(false)
    const [openCongrats,setOpenCongrats] = useState(false)
    const submitDesign = async (e) => {
        console.log("data submitted")

        setSubmitted(true)
        try {
            const { data } = await httpRequest({
                url: `/posts`,
                // method: "post",
                method: "get",
                // data: userData,
            });
            setSubmitted(false)
              
            setOpenDesignSteps(false)
            // Handle the response here
        } catch ({ response }) {
            toast.error(response?.data);
            setSubmitted(false)

        } finally {
            setOpenCongrats(true)
            setUserData([])
        }


    }



    const submitReview = async () => {
        console.log("data submitted")

        setSubmitted(true)
        try {
            const { data } = await httpRequest({
                url: `/posts`,
                // method: "post",
                method: "get",
                // data: userData,
            });
            setSubmitted(false)
            setOpenReviewSteps(false)


            // Handle the response here
        } catch ({ response }) {
            toast.error(response?.data);
            setSubmitted(false)

        } finally {
            setOpenCongrats(true)      
            setUserData([])
   
        }

    }



    return (
        <div>
            <multiStepContext.Provider value={{setOpenReviewSteps,checkProjectType,setCheckProjectType,openReviewSteps,setOpenDesignSteps,openDesignSteps,openCongrats,setOpenCongrats, userData, setUserData, finalData, setFinalData, currentStep, setStep, openDesign, setOpenDesign, submitDesign, submitReview, Submitted }}>

                {children}

            </multiStepContext.Provider>

        </div>
    )
}

export default StepContext
