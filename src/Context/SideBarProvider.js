import React, { createContext, useState } from 'react'
import App from '../App'


export const SideBarProvider = React.createContext()
const SidebarContext = ({ children }) => {
    const [collapsed, setCollapsed] = useState(false)






    return (
        <div>
            <SideBarProvider.Provider value={{ collapsed, setCollapsed}}>

                {children}

            </SideBarProvider.Provider>

        </div>
    )
}

export default SidebarContext 
