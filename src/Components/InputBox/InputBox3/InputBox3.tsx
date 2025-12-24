import React, { useState } from "react";
import styles from "./InputBox3.module.css";
import { FaLocationArrow, FaPaperclip } from "react-icons/fa";

interface InputBox3Props {
    onSend: (message: string) => void;
    isLoading: boolean;
    placeholder?: string;
}

const InputBox3: React.FC<InputBox3Props> = ({
    onSend,
    isLoading,
    placeholder = "Ask anything..."
}) => {
    const [input, setInput] = useState("");

    const handleSend = () => {
        if (input.trim() && !isLoading) {
            onSend(input);
            setInput("");
        }
    };

    return (
        <div className={styles.container}>
            <div className={styles.floatWrapper}>
                <div className={styles.attachBtn}>
                    <FaPaperclip />
                </div>
                <input
                    className={styles.input}
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                    placeholder={placeholder}
                    disabled={isLoading}
                />
                <button
                    className={styles.sendBtn}
                    onClick={handleSend}
                    disabled={!input.trim() || isLoading}
                >
                    <FaLocationArrow />
                </button>
            </div>
        </div>
    );
};

export default InputBox3;
