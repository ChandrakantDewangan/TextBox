import React, { useState, type KeyboardEvent } from "react";
import styles from "./InputBox1.module.css";
import { FaPaperPlane, FaStop } from "react-icons/fa";

interface InputBox1Props {
    onSend: (message: string) => void;
    isLoading: boolean;
    placeholder?: string;
}

const InputBox1: React.FC<InputBox1Props> = ({
    onSend,
    isLoading,
    placeholder = "Type a message..."
}) => {
    const [input, setInput] = useState("");

    const handleSend = () => {
        if (input.trim() && !isLoading) {
            onSend(input);
            setInput("");
        }
    };

    const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter" && !e.shiftKey) {
            e.preventDefault();
            handleSend();
        }
    };

    return (
        <div className={styles.container}>
            <input
                className={styles.input}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder={placeholder}
                disabled={isLoading}
            />
            <button
                className={styles.sendBtn}
                onClick={handleSend}
                disabled={!input.trim() || isLoading}
            >
                {isLoading ? <FaStop /> : <FaPaperPlane />}
            </button>
        </div>
    );
};

export default InputBox1;
