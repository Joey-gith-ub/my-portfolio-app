import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faYoutube,
    faLinkedinIn,
    faXTwitter,
    faTiktok
} from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import styles from './SocialIcons.module.css';

const socialData = [
    { name: 'YouTube', icon: faYoutube, url: 'http://www.youtube.com/@kelvin-atuobi', styleClass: 'youtube' },
    { name: 'LinkedIn', icon: faLinkedinIn, url: 'https://www.linkedin.com/in/kelvin-atuobi-5540a5359?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app', styleClass: 'linkedin' },
    { name: 'X (Twitter)', icon: faXTwitter, url: '#', styleClass: 'x-twitter' },
    { name: 'TikTok', icon: faTiktok, url: '#', styleClass: 'tiktok' },
    { name: 'Email', icon: faEnvelope, url: 'mailto:joeyjr.agogo@gmail.com', styleClass: 'email' }
];

const SocialIcons = ({ size = 'medium', variant = 'dark' }) => {
    return (
        <div className={`${styles.socialLinks} ${styles[size]}`}>
            {socialData.map((social, index) => (
                <a
                    key={index}
                    href={social.url}
                    className={`${styles.socialIcon} ${styles[variant]} ${styles[social.styleClass]}`}
                    aria-label={social.name}
                >
                    <FontAwesomeIcon icon={social.icon} />
                </a>
            ))}
        </div>
    );
};

export default SocialIcons;