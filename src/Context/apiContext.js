import { createContext, useContext, useEffect, useState } from "react";
import intializeAuthentication from "../Firebase/firebase.init";
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

const APIContext = createContext();

intializeAuthentication();

const APIContextProvider = ({ children }) => {

    //data
    const [fakeData, setFakeData] = useState([]);
    const [isLoadingData, setIsLoadingData] = useState(true);


    // fetch data

    useEffect(() => {
        fetch("/data.json")
            .then(res => res.json())
            .then(data => {
                setFakeData(data)
                setIsLoadingData(false)
            })
    }, [])


    //firebase authentication

    const [user, setUser] = useState({})
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(true);
    const googleProvider = new GoogleAuthProvider();
    const auth = getAuth();


    // Google Sign in
    const signInUsingGoogle = () => {
        setIsLoading(true);
        return signInWithPopup(auth, googleProvider)
            .finally(() => setIsLoading(false));

    }

    // Signin Using email and password


    const handleEmailChange = e => {
        setEmail(e.target.value);
    }

    const handlePasswordChange = e => {
        setPassword(e.target.value);
    }

    const registrationUsingEmail = e => {
        setIsLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
            .finally(() => setIsLoading(false));

    }

    const signUsingEmail = e => {
        setIsLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
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
                fakeData,
                isLoadingData,
                isLoading,
                registrationUsingEmail,
                signUsingEmail,
                handleEmailChange,
                handlePasswordChange,
                email,
                password,
                signInUsingGoogle,
                user,
                logOut,
                error
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