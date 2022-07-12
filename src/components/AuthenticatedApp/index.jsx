import { ChatRoom } from "components/ChatRoom";
import { Landing } from "components/Landing";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function AuthenticatedApp() {
    return (
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/room/:id" element={<ChatRoom />} />
        </Routes>
        </BrowserRouter>
    )
}

export { AuthenticatedApp };