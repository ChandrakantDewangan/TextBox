import React from "react";
import ChatArea1 from "./ChatArea1/ChatArea1";
import ChatArea2 from "./ChatArea2/ChatArea2";

type ChatVariant = "standard" | "minimal";

interface ChatAreaProps {
    variant?: ChatVariant;
}

const ChatArea: React.FC<ChatAreaProps> = ({ variant = "standard" }) => {
    if (variant === "minimal") {
        return <ChatArea2 />;
    }
    return <ChatArea1 />;
};

export default ChatArea;
