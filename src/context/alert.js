


import { createContext, useContext, useState } from "react";

const defaultState={alert:{show:false,message:""},setAlert:()=>{}}
const AlertContext=createContext(defaultState)
export const useAlertContext=()=>useContext(AlertContext)

const AlertProvider=({children})=>{
    const [alert,setAlert]  =  useState({show:false,message:""})
   return  <AlertContext.Provider value={{alert,setAlert}}>
        {children}
    </AlertContext.Provider>
}
export default AlertProvider