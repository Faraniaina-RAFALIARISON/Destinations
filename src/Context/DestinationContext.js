import React, {createContext, useState} from "react";

export const DestinationContext = createContext()

const DestinationContextProvider = props => {

    const [destination, setDestination] = useState([])

    return (
        <DestinationContext.Provider value={{destination,setDestination}}>
            {props.children}
        </DestinationContext.Provider>
    )

} 
export default DestinationContextProvider;
