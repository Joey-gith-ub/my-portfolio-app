import React from 'react';
import SocialIcons from '../../components/SocialIcons/SocialIcons';
import styles from './LandingPage.module.css';

const LandingPage = () => {
    return (
        <div className={styles.landingContainer}>
            <div className={styles.blurWrapper}>
            <div className={styles.profileSection}>
                <img src="/profile-picture.jpeg" alt="Kelvin Atuobi" className={styles.profilePic} />
                <h1>Kelvin Atuobi</h1>
                <p className={styles.tagline}>DATA ANALYST | DATA VISUALIZATION</p>
                <p className={styles.introText}>Let's dive into data.</p>
                <p className={styles.description}>From dashboards to deep insights, explore my work, connect with me, and stay updated across all platforms.</p>
            </div>

            <SocialIcons size="medium" variant="dark" /> {/* Reusable SocialIcons component */}

            <a href="/home" className={styles.portfolioButton}>MY PORTFOLIO</a>

        </div>
    </div>
    );
};

export default LandingPage;