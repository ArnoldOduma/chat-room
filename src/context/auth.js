import React from "react";
import { loginWithGoogle } from "services/firebase";

// @ts-ignore
const AuthContext = React.createContext();

const AuthProvider = (props) => {
    const [user, setUser] = React.useState(null);

    const login = async () => {
        const user = await loginWithGoogle();

        if (!user) {
            console.log('Failed to login');
        }

        setUser(user);
    };

    const value = { user, login };

    return <AuthContext.Provider value={value} {...props} />;
}

export { AuthContext, AuthProvider };