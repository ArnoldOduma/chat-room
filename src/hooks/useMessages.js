import React from "react";
import { getMessages } from "services/firebase";

function useMessages(roomId) {
    const [messages, setMessages] = React.useState([]);

    React.useEffect(() => {
        async function fetchData() {
            const unsubscribe = await getMessages(roomId, setMessages);
            return unsubscribe;
        }
        fetchData();
    }, [roomId]);

    return messages;
}

export { useMessages };