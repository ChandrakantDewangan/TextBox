import React from "react";
import styles from "./Message1.module.css";
import { FaUser, FaRobot } from "react-icons/fa";

interface Message1Props {
    role: "user" | "ai";
    content: string;
}

const Message1: React.FC<Message1Props> = ({ role, content }) => {
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

export default Message1;
