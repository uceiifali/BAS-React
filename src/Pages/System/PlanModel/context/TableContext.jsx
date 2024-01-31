import { createContext, useState } from "react";

export const TableContext = createContext()
export default function TableContextProvder ({children}){
    const [fullWidthTable,setFullWidthTable] = useState(false)
    return (
        <TableContext.Provider value={{fullWidthTable,setFullWidthTable}}>
            {children}
        </TableContext.Provider>
    )
}

