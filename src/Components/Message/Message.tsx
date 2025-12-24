import React from "react";
import Message1 from "./Message1/Message1";
import Message2 from "./Message2/Message2";

type MessageVariant = "standard" | "minimal";

interface MessageProps {
    role: "user" | "ai";
    content: string;
    variant?: MessageVariant;
}

const Message: React.FC<MessageProps> = ({ role, content, variant = "standard" }) => {
    if (variant === "minimal") {
        return <Message2 role={role} content={content} />;
    }
    return <Message1 role={role} content={content} />;
};

export default Message;
