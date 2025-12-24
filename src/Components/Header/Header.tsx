import React, { useState } from "react";
import styles from "./Header.module.css";
import { FaUserCircle, FaBuilding } from "react-icons/fa";

const Header: React.FC = () => {
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
                    <FaUserCircle />
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

export default Header;
