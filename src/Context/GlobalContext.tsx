import React, {
    createContext,
    useState,
} from "react";
import type { Dispatch, ReactNode, SetStateAction } from "react";
import type { GlobalState } from "../Interfaces/Interfaces";

const DEFAULT_STATE: GlobalState = {
    UserDetails: null,
    IsWelcomeWindowVisible: true,
    IsNewChatWindowVisible: false,
    IsChatWindowVisible: false,
    IsLoading: false,
    CurrentPrompt: "",
    CurrentSessionID: "",
    CurrentModel: "CapacityGenie",
    ChatHistory: null,
    IsAdminVisible: false,
    AmgenUserList: [],
};

interface GlobalContextType {
    storeData: GlobalState;
    setStoreData: Dispatch<SetStateAction<GlobalState>>;
}

export const GlobalContext = createContext<GlobalContextType>({
    storeData: DEFAULT_STATE,
    setStoreData: () => { },
});

interface GlobalContextWrapperProps {
    children: ReactNode;
}

export const GlobalContextWrapper: React.FC<
    GlobalContextWrapperProps
> = ({ children }) => {
    const [storeData, setStoreData] =
        useState<GlobalState>(DEFAULT_STATE);

    return (
        <GlobalContext.Provider value={{ storeData, setStoreData }}>
            {children}
        </GlobalContext.Provider>
    );
};
