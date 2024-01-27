// SettingContext.js
import { createContext, useState } from 'react';

export const SettingContext = createContext();


const SettingProvider = ({ children }) => {
  const [settingType,setSettingType] = useState("")
  
  return (
    <SettingContext.Provider value={{settingType,setSettingType}}>
      {children}
    </SettingContext.Provider>
  );
};

export default SettingProvider;
