import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../Firebase/Firebase.init";

export const AuthContext = createContext(null);

const AuthProvider = ({children}) => {

const [user, setUser] = useState()
const [loading, setLoading] = useState(true);

const createUser = (email, password)=> {
    setLoading(true)
    return createUserWithEmailAndPassword(auth, email, password)
}

const signIn = (email, password)=>{
    setLoading(true)
    return signInWithEmailAndPassword(auth, email, password)
}

const logOut = () => {
    setLoading(true)
    return signOut(auth)
}

useEffect(()=>{
    const unSubscribe = onAuthStateChanged(auth, (currentUser)=>{
        setUser(currentUser)
        if (currentUser) {
            console.log("User is signed in");
        } else {
            console.log("User is signed Out");
        }
        setLoading(false)
    })
    return ()=> unSubscribe()
},[])

const AuthInfo = {
    user,
    createUser,
    signIn,
    logOut,
    loading
}

    return (
        <AuthContext.Provider value={AuthInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;