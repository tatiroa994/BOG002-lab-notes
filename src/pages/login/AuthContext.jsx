import { useEffect, useState, createContext } from "react";
import { auth } from "../../firebaseConfig";

export const Auth = createContext();

export const AuthContext = ({ children }) => {
    const [user, setUser] = useState(null);
    const [showChild, setShowChild] = useState(false);

    useEffect(() => {
        auth.onAuthStateChanged(function(user) {
            setUser(user);
            setShowChild(true);
        });
    }, []);

    if (!showChild) {
        return <p>Loading...</p>;
    } else {
        return (
            <Auth.Provider value={{ user }}>
                {children}
            </Auth.Provider>
        );
    }
};