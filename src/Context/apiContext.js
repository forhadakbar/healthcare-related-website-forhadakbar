import { createContext, useContext, useEffect, useState } from "react";
import intializeAuthentication from "../Firebase/firebase.init";
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged } from "firebase/auth";

const APIContext = createContext();

intializeAuthentication();

const APIContextProvider = ({ children }) => {

    //data
    const [services, setServices] = useState([]);
    const [isLoadingData, setIsLoadingData] = useState(true);


    // fetch data

    useEffect(() => {
        fetch("/services.json")
            .then(res => res.json())
            .then(data => {
                setServices(data)
                setIsLoadingData(false)
            })
    }, [])


    //firebase authentication

    const [user, setUser] = useState({})
    const [isLoading, setIsLoading] = useState(true);

    const googleProvider = new GoogleAuthProvider();
    const auth = getAuth();


    // Google Sign in
    const signInUsingGoogle = () => {
        setIsLoading(true);
        signInWithPopup(auth, googleProvider)
            .then(result => {
                setUser(result.user);
            })
            .finally(() => setIsLoading(false));
    }

    // observe user state change
    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user);
            }
            else {
                setUser({})
            }
            setIsLoading(false);
        });
        return () => unsubscribed;
    }, [])


    //Sign out
    const logOut = () => {
        setIsLoading(true);
        signOut(auth)
            .then(() => { })
            .finally(() => setIsLoading(false));
    }


    return (
        <APIContext.Provider
            value={{
                services,
                isLoadingData,
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