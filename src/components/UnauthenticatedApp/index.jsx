import { useAuth } from "hooks/useAuth";
import React from "react";
import './styles.css';

function UnauthenticatedApp() {
    const { login } = useAuth();
    return (
        <>
            <h2>Login to join chat room !</h2>
            <div className="login-cont">
                <button onClick={login} className="login">
                    Login With Google
                </button>
            </div>
        </>

    )
}

export { UnauthenticatedApp };