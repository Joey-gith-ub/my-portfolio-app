import React, { useState } from 'react';
import styles from './HomePage.module.css';
import { useNavigate } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';

const HomePage = () => {
    const navigate = useNavigate();
    const [showModal, setShowModal] = useState(false);

    const handleNext = () => {
        navigate('/about');
    };

    const handleProfileClick = () => {
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };

    return (
        <div className={`page-content ${styles.homePage}`}>
            <h1 className={styles.greeting}>Hi, I am</h1>
            <h2 className={styles.name}>Kelvin Atuobi</h2>
            <p className={styles.tagline}>Data Analyst | Data Visualization</p>

            <img
                src="/profile-picture.jpeg"
                alt="Kelvin Atuobi"
                className={styles.profilePic}
                style={{ cursor: 'pointer' }}
                onClick={handleProfileClick}
            />

            <a
                href="/resume.pdf"
                download
                className={styles.downloadBtn}
            >
                Download Resume
            </a>

            {/* Next Button */}
            <div className={styles.nextBtnContainer}>
                <button className={styles.nextBtn} onClick={handleNext}>
                    Next <FaArrowRight style={{ marginLeft: '8px' }} />
                </button>
            </div>

            {/* Modal for profile picture */}
            {showModal && (
                <div className={styles.modalOverlay} onClick={handleCloseModal}>
                    <div className={styles.modalContent} onClick={e => e.stopPropagation()}>
                        <img
                            src="/profile-picture.jpeg"
                            alt="Kelvin Atuobi"
                            className={styles.modalProfilePic}
                        />
                    </div>
                </div>
            )}
        </div>
    );
};

export default HomePage;