import { chatRooms } from "data/chatRooms";
import React from "react";
import { Link } from "react-router-dom";
import './styles.css';

function Landing() {
    return (
        <>
            <h1>Chat Room</h1>
            <h2>Choose a Chat Room</h2>
            <ul className="chat-room-list">
                {chatRooms.map(chatRoom => (

                    <li key={chatRoom.id}>
                        <Link to={`/room/${chatRoom.id}`}>
                            <div>{chatRoom.title}</div>
                        </Link>
                    </li>
                ))}
            </ul>

        </>
    )
}

export { Landing };