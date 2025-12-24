import React from "react";
import Sidebar1 from "./Sidebar1/Sidebar1";
import Sidebar2 from "./Sidebar2/Sidebar2";

type SidebarVariant = "expanded" | "collapsed";

interface SidebarProps {
    variant?: SidebarVariant;
}

const Sidebar: React.FC<SidebarProps> = ({ variant = "expanded" }) => {
    // Hardcoded variant logic
    if (variant === "collapsed") {
        return <Sidebar2 />;
    }

    return <Sidebar1 />;
};

export default Sidebar;
