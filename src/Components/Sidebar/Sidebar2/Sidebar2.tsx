import React, { useContext } from "react";
import styles from "./Sidebar2.module.css";
import { GlobalContext } from "../../../Context/GlobalContext";
import { FaPlus, FaHistory, FaBrain } from "react-icons/fa";

const Sidebar2: React.FC = () => {
    const { setStoreData } = useContext(GlobalContext);

    const handleNewChat = () => {
        setStoreData((prev) => ({
            ...prev,
            ChatHistory: null,
            IsChatWindowVisible: false,
            IsWelcomeWindowVisible: true,
            CurrentPrompt: "",
        }));
    };

    return (
        <div className={styles.sidebar}>
            <div className={styles.iconButton} onClick={handleNewChat} title="New Chat">
                <FaPlus />
            </div>

            <div className={styles.divider} />

            <div className={styles.iconButton} title="History">
                <FaHistory />
            </div>

            <div className={styles.iconButton} title="Models">
                <FaBrain />
            </div>
        </div>
    );
};

export default Sidebar2;
