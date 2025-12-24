import React from "react";
import styles from "./Message.module.css";
import { FaUser, FaRobot } from "react-icons/fa";

interface MessageProps {
    role: "user" | "ai";
    content: string;
}

const Message: React.FC<MessageProps> = ({ role, content }) => {
    const isUser = role === "user";

    return (
        <div className={`${styles.message} ${isUser ? styles.userMessage : styles.aiMessage}`}>
            <div className={styles.avatar}>
                {isUser ? <FaUser /> : <FaRobot />}
            </div>
            <div className={styles.bubble}>
                {content}
            </div>
        </div>
    );
};

export default Message;
