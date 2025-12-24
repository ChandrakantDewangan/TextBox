import React from "react";
import Header1 from "./Header1/Header1";
import Header2 from "./Header2/Header2";

type HeaderVariant = "standard" | "nexus";

interface HeaderProps {
    variant?: HeaderVariant;
}

const Header: React.FC<HeaderProps> = ({ variant = "standard" }) => {
    // Variant 2 logic
    if (variant === "nexus") {
        return <Header2 />;
    }

    return <Header1 />;
};

export default Header;
