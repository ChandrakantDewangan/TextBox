import React from "react";
import styles from "./Message2.module.css";
import { FaUserAstronaut, FaGhost } from "react-icons/fa";

interface Message2Props {
    role: "user" | "ai";
    content: string;
}

const Message2: React.FC<Message2Props> = ({ role, content }) => {
    const isUser = role === "user";

    return (
        <div className={styles.wrapper}>
            <div className={styles.header}>
                <span className={styles.name}>{isUser ? "You" : "Assistant"}</span>
                {isUser ? <FaUserAstronaut /> : <FaGhost />}
            </div>
            <div className={styles.content}>
                {content}
            </div>
        </div>
    );
};

export default Message2;
