import React, { useState } from "react";
import styles from "./Header1.module.css";
import { FaBuilding } from "react-icons/fa";
import Avatar from "../../Avatar/Avatar";

const Header1: React.FC = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    return (
        <div className={styles.header}>
            <div className={styles.logoSection}>
                <FaBuilding className={styles.companyIcon} />
                <span className={styles.companyName}>BrandAI</span>
            </div>

            <div className={styles.userSection}>
                <div
                    className={styles.userAvatar}
                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                >
                    <Avatar variant="circle" />
                </div>

                {isDropdownOpen && (
                    <div className={styles.dropdown}>
                        <div className={styles.dropdownItem}>Profile</div>
                        <div className={styles.dropdownItem}>Admin Settings</div>
                        <div className={styles.dropdownDivider} />
                        <div className={styles.dropdownItem}>Logout</div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Header1;
