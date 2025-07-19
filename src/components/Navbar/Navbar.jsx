import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faSearch } from '@fortawesome/free-solid-svg-icons';
import styles from './Navbar.module.css';
import PropTypes from 'prop-types';

const Navbar = ({ toggleSidebar }) => {
    const [showSearch, setShowSearch] = useState(false);

    const handleSearchClick = () => {
        setShowSearch(!showSearch);
    };

    return (
        <nav className={styles.navbar}>
            <div className={styles.leftSection}>
                <button onClick={toggleSidebar} className={styles.menuButton}>
                    <FontAwesomeIcon icon={faBars} />
                </button>
            </div>
            <div className={styles.centerSection}>
                <span className={styles.siteTitle}>Kelvin Atuobi</span>
            </div>
            <div className={styles.rightSection}>
                <button className={styles.searchButton} onClick={handleSearchClick}>
                    <FontAwesomeIcon icon={faSearch} />
                </button>
                {showSearch && (
                    <input
                        type="text"
                        className={styles.searchInput}
                        placeholder="Search..."
                        autoFocus
                    />
                )}
            </div>
        </nav>
    );
};

Navbar.propTypes = {
    toggleSidebar: PropTypes.func.isRequired,
};

export default Navbar;