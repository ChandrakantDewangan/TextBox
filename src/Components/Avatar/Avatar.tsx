import React from "react";
import styles1 from "./Avatar1/Avatar1.module.css";
import styles2 from "./Avatar2/Avatar2.module.css";
import { FaUser } from "react-icons/fa";

type AvatarVariant = "circle" | "square";

interface AvatarProps {
    variant?: AvatarVariant;
    imgUrl?: string;
    fallbackIcon?: React.ReactNode;
}

const Avatar: React.FC<AvatarProps> = ({ variant = "circle", imgUrl, fallbackIcon }) => {
    const styleClass = variant === "square" ? styles2.square : styles1.circle;

    return (
        <div className={styleClass}>
            {imgUrl ? (
                <img src={imgUrl} alt="Avatar" />
            ) : (
                fallbackIcon || <FaUser />
            )}
        </div>
    );
};

export default Avatar;
