import React, { useContext, useState } from "react";
import styles from "./Sidebar1.module.css";
import { GlobalContext } from "../../../Context/GlobalContext";
import { FaPlus, FaHistory, FaComment } from "react-icons/fa";

const Sidebar1: React.FC = () => {
    const { setStoreData } = useContext(GlobalContext);
    const [selectedModel, setSelectedModel] = useState<string>("CapacityGenie");

    const handleNewChat = () => {
        setStoreData((prev) => ({
            ...prev,
            ChatHistory: null,
            IsChatWindowVisible: false,
            IsWelcomeWindowVisible: true,
            CurrentPrompt: "",
        }));
    };

    const dummyHistory = [
        "Previous query 1",
        "Analysis of Q3",
        "Stock trends 2024",
    ];

    return (
        <div className={styles.sidebar}>
            <div className={styles.topSection}>
                <div className={styles.newChatBtn} onClick={handleNewChat}>
                    <FaPlus />
                    <span>New Chat</span>
                </div>

                <div className={styles.modelSelect}>
                    <label>Model:</label>
                    <select
                        value={selectedModel}
                        onChange={(e) => setSelectedModel(e.target.value)}
                    >
                        <option value="CapacityGenie">CapacityGenie</option>
                        <option value="GPT-4">GPT-4</option>
                        <option value="Claude-3">Claude-3</option>
                    </select>
                </div>
            </div>

            <div className={styles.historySection}>
                <h3><FaHistory /> History</h3>
                <ul>
                    {dummyHistory.map((item, idx) => (
                        <li key={idx}>
                            <FaComment className={styles.historyIcon} />
                            <span>{item}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Sidebar1;
