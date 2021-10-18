import { createContext, useContext, useEffect, useState } from "react";
import intializeAuthentication from "../Firebase/firebase.init";
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut } from "firebase/auth";

const APIContext = createContext();

intializeAuthentication();

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


    //firebase authentication

    const [user, setUser] = useState({})

    const googleProvider = new GoogleAuthProvider();
    const auth = getAuth();

    const signInUsingGoogle = () => {
        signInWithPopup(auth, googleProvider)
            .then(result => {
                setUser(result.user)
            })
    }


    const logOut = () => {
        signOut(auth).then(() => {
            // Sign-out successful.
            setUser({})
        }).catch((error) => {
            // An error happened.
        });
    }


    return (
        <APIContext.Provider
            value={{
                services,
                isLoading,
                signInUsingGoogle,
                user,
                logOut
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