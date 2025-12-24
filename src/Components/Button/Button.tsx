import React from "react";
import styles1 from "./Button1/Button1.module.css";
import styles2 from "./Button2/Button2.module.css";

type ButtonVariant = "solid" | "outline";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: ButtonVariant;
}

const Button: React.FC<ButtonProps> = ({ variant = "solid", className, children, ...props }) => {
    const variantClass = variant === "outline" ? styles2.btnOutline : styles1.btnSolid;

    return (
        <button className={`${variantClass} ${className || ""}`} {...props}>
            {children}
        </button>
    );
};

export default Button;
