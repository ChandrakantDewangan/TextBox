import React, { useContext, useRef, useEffect } from "react";
import styles from "./ChatArea2.module.css";
import { GlobalContext } from "../../../Context/GlobalContext";
import InputBox from "../../InputBox/InputBox";
import Message from "../../Message/Message";
import type { AiResponse, Query } from "../../../Interfaces/Interfaces";
// import { toast } from "react-toastify";

const ChatArea2: React.FC = () => {
    const { storeData, setStoreData } = useContext(GlobalContext);
    const messagesEndRef = useRef<HTMLDivElement>(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [storeData.ChatHistory]);

    const handleSend = async (message: string) => {
        // Logic duplicated for demo simplicity, ideally extracted to hook
        const newQuery: Query = {
            query_id: Date.now().toString(),
            user_prompt: message,
            agent_name: "User",
            created_at: new Date().toISOString(),
            execution_time: 0,
            status: "In Progress",
            ai_responses: [],
        };
        setStoreData((prev) => {
            const currentHistory = prev.ChatHistory || {
                session_id: "new-session", session_name: "New Chat", user_id: "user-1", created_at: new Date().toISOString(), updated_at: new Date().toISOString(), status: "Active", queries: []
            };
            return { ...prev, IsLoading: true, ChatHistory: { ...currentHistory, queries: [...(currentHistory.queries || []), newQuery] } };
        });

        // Mock API
        setTimeout(() => {
            const mockResponse: AiResponse = {
                response_id: Date.now().toString(), ai_generated_query: null, ai_response: `Variant 2 Response: "${message}"`, agent_name: storeData.CurrentModel, sentiment: "Neutral", feedback: "", execution_time: 150, created_at: new Date().toISOString(), status: "Success"
            };
            setStoreData((prev) => {
                if (!prev.ChatHistory) return prev;
                const updatedQueries = [...(prev.ChatHistory.queries || [])];
                const lastQueryIdx = updatedQueries.length - 1;
                if (lastQueryIdx >= 0) updatedQueries[lastQueryIdx] = { ...updatedQueries[lastQueryIdx], ai_responses: [mockResponse], status: "Completed" };
                return { ...prev, IsLoading: false, ChatHistory: { ...prev.ChatHistory, queries: updatedQueries } }
            });
        }, 1000);
    };

    const hasHistory = storeData.ChatHistory && storeData.ChatHistory.queries && storeData.ChatHistory.queries.length > 0;

    return (
        <div className={styles.chatArea}>
            <div className={styles.messagesContainer}>
                {!hasHistory ? (
                    <div className={styles.welcomeScreen}>
                        <h2>Hello, User</h2>
                        <p>How can I help you today?</p>
                    </div>
                ) : (
                    <div className={styles.messageList}>
                        {storeData.ChatHistory?.queries?.map((query) => (
                            <React.Fragment key={query.query_id}>
                                <Message role="user" content={query.user_prompt} variant="minimal" />
                                {query.ai_responses.map((resp) => (
                                    <Message key={resp.response_id} role="ai" content={resp.ai_response} variant="minimal" />
                                ))}
                            </React.Fragment>
                        ))}
                        <div ref={messagesEndRef} />
                    </div>
                )}
            </div>

            <div className={styles.inputArea}>
                <InputBox
                    onSend={handleSend}
                    isLoading={storeData.IsLoading}
                    variant="variant1"
                />
            </div>
        </div>
    );
};

export default ChatArea2;
