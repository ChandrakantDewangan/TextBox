import React from "react";
import styles from "./Header2.module.css";
import { FaAtom } from "react-icons/fa";
import Avatar from "../../Avatar/Avatar";

const Header2: React.FC = () => {
    return (
        <div className={styles.header}>
            <div className={styles.userIcon}>
                <Avatar variant="square" />
            </div>

            <div className={styles.logoSection}>
                <FaAtom className={styles.companyIcon} />
                <span className={styles.companyName}>NEXUS</span>
            </div>

            <div className={styles.emptySpacer}>
                {/* Spacer to balance center logo */}
            </div>
        </div>
    );
};

export default Header2;
