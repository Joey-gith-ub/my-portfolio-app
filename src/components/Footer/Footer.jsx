import React from 'react';
import styles from './Footer.module.css';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className={styles.footer}>
            <p>&copy; {currentYear} Kelvin Atuobi. All rights reserved.</p>
            {/* You can add more links or social icons here if needed */}
            {/* For example, if you wanted the social icons here instead of on AboutPage:
                <SocialIcons size="small" variant="color" />
            */}
        </footer>
    );
};

export default Footer;