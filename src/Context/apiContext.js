import { createContext, useContext, useEffect, useState } from "react";

const APIContext = createContext();

const APIContextProvider = ({ children }) => {

    //data
    const [services, setServices] = useState([]);
    const [isLoading, setIsLoading] = useState(true);


    // fetch data

    useEffect(() => {
        fetch("/services.json")
            .then(res => res.json())
            .then(data => {
                setServices(data)
                setIsLoading(false)
            })
    }, [])


    return (
        <APIContext.Provider
            value={{
                services,
                isLoading
            }}
        >
            {children}
        </APIContext.Provider>
    )


}

export default APIContextProvider;


// Create a hook to use the APIContext, this is a Kent C. Dodds pattern
export function useAPI() {
    const context = useContext(APIContext);
    if (context === undefined) {
        throw new Error('Context must be used within a Provider');
    }
    return context;
}