import { useState, useContext, createContext} from "react";



const NameContext = createContext(null);


export const NameProvider = ({ children }) => {

    const [fname, setFname] = useState("");

return(
    <NameContext.Provider value={{ fname, setFname}}>
        {children}
    </NameContext.Provider>
)

}

export const useNameContext = () => useContext(NameContext)