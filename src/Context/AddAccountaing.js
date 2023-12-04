import React, { createContext, useState } from 'react'
import App from '../App'


export const addAccountType = React.createContext()
const CheckAccountType = ({ children }) => {
    const [accountaingType, setAccountaingType] = useState('')
    const [openAddAccountant, setOpenAddAccountant] = useState(false)





    return (
        <div>
            <addAccountType.Provider value={{ accountaingType, setAccountaingType ,setOpenAddAccountant,setOpenAddAccountant }}>

                {children}

            </addAccountType.Provider>

        </div>
    )
}

export default CheckAccountType
