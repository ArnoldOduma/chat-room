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
            <div className="chatroom-title">
                <div className="room-btn">
                    <Link to="/">
                        {/* <button> */}
                            ⬅️
                        {/* </button> */}
                    </Link>
                </div>
                <h2 className="room-title">{room.title}</h2>
            </div>
            <div className="messages-container">
                <MessageList roomId={roomId} />
                <MessageInput roomId={roomId} />
            </div>
        </>
    )
}

export { ChatRoom };