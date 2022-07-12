import { AuthContext } from "context/auth";
import React from "react";



function useAuth() {
    const value = React.useContext(AuthContext);

    if (!value) {
        throw new Error("User context value is undefined");
    }

    return value;
}

export { useAuth };