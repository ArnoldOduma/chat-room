import { MessageInput } from "components/MessageInput";
import { MessageList } from "components/MessageList";
import { chatRooms } from "data/chatRooms";
import React from "react";
import { Link, useParams } from "react-router-dom";
import './styles.css';

function ChatRoom() {

    const params = useParams();
    const roomId = params.id;
    const room = chatRooms.find(chatRoom => chatRoom.id === roomId);

    if (!room) {
        return <div><h3>Room not found</h3></div>
    }


    return (
        <>
            <h2>{room.title}</h2>
            <div>
                <Link to="/">
                    <button>
                        ⬅️ Back to all rooms
                    </button>
                </Link>
            </div>
            <div className="messages-container">
                <MessageList roomId={roomId} />
                <MessageInput roomId={roomId} />
            </div>
        </>
    )
}

export { ChatRoom };