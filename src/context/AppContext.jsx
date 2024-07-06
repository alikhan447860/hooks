import { createContext } from "react";

 export const AppContext=createContext();
 const contextprovider=(props)=>{
      const phone ="+1 7869296166"
      return(

        <AppContext.Provider value={phone}>
            {props.children}
        </AppContext.Provider>
      )
 }
 export default contextprovider;