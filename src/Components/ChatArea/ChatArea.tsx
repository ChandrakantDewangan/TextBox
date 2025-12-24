import React, { useContext, useRef, useEffect } from "react";
import styles from "./ChatArea.module.css";
import { GlobalContext } from "../../Context/GlobalContext";
import InputBox from "../InputBox/InputBox";
// import axios from "axios"; 
import Message from "../Message/Message";
import type { AiResponse, Query } from "../../Interfaces/Interfaces";
import { toast } from "react-toastify";

const ChatArea: React.FC = () => {
    const { storeData, setStoreData } = useContext(GlobalContext);
    const messagesEndRef = useRef<HTMLDivElement>(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [storeData.ChatHistory]);

    const handleSend = async (message: string) => {
        // 1. Optimistic Update
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
                session_id: "new-session",
                session_name: "New Chat",
                user_id: "user-1",
                created_at: new Date().toISOString(),
                updated_at: new Date().toISOString(),
                status: "Active",
                queries: []
            };

            return {
                ...prev,
                IsLoading: true,
                ChatHistory: {
                    ...currentHistory,
                    queries: [...(currentHistory.queries || []), newQuery]
                }
            };
        });

        // 2. Mock API Call
        try {
            await new Promise(resolve => setTimeout(resolve, 1500)); // Simulate delay

            const mockResponse: AiResponse = {
                response_id: Date.now().toString(),
                ai_generated_query: null,
                ai_response: `Process simulated response for: "${message}". this is a Mock Response.`,
                agent_name: storeData.CurrentModel,
                sentiment: "Neutral",
                feedback: "",
                execution_time: 150,
                created_at: new Date().toISOString(),
                status: "Success"
            };

            setStoreData((prev) => {
                if (!prev.ChatHistory) return prev;

                const updatedQueries = [...(prev.ChatHistory.queries || [])];
                // Add response to the last query (which we just added)
                const lastQueryIdx = updatedQueries.length - 1;
                if (lastQueryIdx >= 0) {
                    updatedQueries[lastQueryIdx] = {
                        ...updatedQueries[lastQueryIdx],
                        ai_responses: [mockResponse],
                        status: "Completed"
                    };
                }

                return {
                    ...prev,
                    IsLoading: false,
                    ChatHistory: {
                        ...prev.ChatHistory,
                        queries: updatedQueries
                    }
                }
            });

        } catch (error) {
            console.error("Error sending message", error);
            toast.error("Failed to send message. Please try again.");
            setStoreData(prev => ({ ...prev, IsLoading: false }));
        }
    };

    const hasHistory = storeData.ChatHistory && storeData.ChatHistory.queries && storeData.ChatHistory.queries.length > 0;

    return (
        <div className={styles.chatArea}>
            <div className={styles.messagesContainer}>
                {!hasHistory ? (
                    <div className={styles.welcomeScreen}>
                        <h1>Welcome to ChatBot</h1>
                        <p>Select a model and start chatting to get assistance.</p>
                    </div>
                ) : (
                    <div className={styles.messageList}>
                        {storeData.ChatHistory?.queries?.map((query) => (
                            <React.Fragment key={query.query_id}>
                                <Message role="user" content={query.user_prompt} />

                                {query.ai_responses.map((resp) => (
                                    <Message key={resp.response_id} role="ai" content={resp.ai_response} />
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

export default ChatArea;
