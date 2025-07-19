import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
    faTimes, 
    faHome, 
    faUser, 
    faProjectDiagram, 
    faCertificate, 
    faBlog, 
    faFileAlt 
} from '@fortawesome/free-solid-svg-icons';
import styles from './Sidebar.module.css';
import PropTypes from 'prop-types';

const Sidebar = ({ isOpen, toggleSidebar }) => {
    return (
        <div className={`${styles.sidebar} ${isOpen ? styles.open : ''}`}>
            <button onClick={toggleSidebar} className={styles.closeButton}>
                <FontAwesomeIcon icon={faTimes} />
            </button>
            <nav className={styles.sidebarNav}>
                <ul>
                    <li>
                        <Link to="/" onClick={toggleSidebar}>
                            <FontAwesomeIcon icon={faHome} /> Home
                        </Link>
                    </li>
                    <li>
                        <Link to="/about" onClick={toggleSidebar}>
                            <FontAwesomeIcon icon={faUser} /> About
                        </Link>
                    </li>
                    <li>
                        <Link to="/certificates" onClick={toggleSidebar}>
                            <FontAwesomeIcon icon={faCertificate} /> Certificates
                        </Link>
                    </li>
                    <li>
                        <Link to="/projects" onClick={toggleSidebar}>
                            <FontAwesomeIcon icon={faProjectDiagram} /> Projects
                        </Link>
                    </li>
                    <li>
                        <Link to="/blog" onClick={toggleSidebar}>
                            <FontAwesomeIcon icon={faBlog} /> Blog
                        </Link>
                    </li>
                    <li>
                        <Link to="/resume" onClick={toggleSidebar}>
                            <FontAwesomeIcon icon={faFileAlt} /> Resume
                        </Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
};
Sidebar.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    toggleSidebar: PropTypes.func.isRequired,
};

export default Sidebar;