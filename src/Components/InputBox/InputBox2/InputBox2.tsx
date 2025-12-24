import React, { useState } from "react";
import styles from "./InputBox2.module.css";
import { FaArrowRight } from "react-icons/fa";

interface InputBox2Props {
    onSend: (message: string) => void;
    isLoading: boolean;
    placeholder?: string;
}

const InputBox2: React.FC<InputBox2Props> = ({
    onSend,
    isLoading,
    placeholder = "Message Chatbot..."
}) => {
    const [input, setInput] = useState("");

    const handleSend = () => {
        if (input.trim() && !isLoading) {
            onSend(input);
            setInput("");
        }
    };

    return (
        <div className={styles.wrapper}>
            <div className={styles.inputContainer}>
                <textarea
                    className={styles.textarea}
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder={placeholder}
                    disabled={isLoading}
                    rows={1}
                />
                <div
                    className={styles.iconBtn}
                    onClick={handleSend}
                >
                    <FaArrowRight />
                </div>
            </div>
        </div>
    );
};

export default InputBox2;
