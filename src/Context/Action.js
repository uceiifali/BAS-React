


import React, { createContext, useState } from 'react'
import CreateProjectPoper from '../Components/Client/Landing/CreateProjectPoper'
import App from '../App'
import httpRequest from "../helper/https"
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'

export const multiStepContext = React.createContext()
const StepContext = ({ children }) => {
    const [setActionType, setsetActionType] = useState(false)




    return (
        <div>
            <multiStepContext.Provider value={{setOpenReviewSteps,openReviewSteps,setOpenDesignSteps,openDesignSteps,openCongrats,setOpenCongrats, userData, setUserData, finalData, setFinalData, currentStep, setStep, openDesign, setOpenDesign, submitDesign, submitReview, Submitted }}>

                {children}

            </multiStepContext.Provider>

        </div>
    )
}

export default StepContext
