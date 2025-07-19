import React from 'react';
import styles from './AboutPage.module.css';
import SocialIcons from '../../components/SocialIcons/SocialIcons';
import { useNavigate } from 'react-router-dom';

const AboutPage = () => {
    const navigate = useNavigate();
    const handleContinue = () => navigate('/certificates');

    return (
        <div className={`page-content ${styles.aboutPage}`}>
            <div className={styles.headerSection}>
                <img src="/profile-picture.jpeg" alt="Kelvin Atuobi" className={styles.profilePic} />
                <div>
                    <h1 className={styles.name}>Kelvin Atuobi</h1>
                    <p className={styles.title}>Data Analyst | Data Visualization Specialist</p>
                    <p className={styles.location}>
                        <span role="img" aria-label="location">📍</span> Accra, Ghana
                    </p>
                </div>
            </div>

            <div className={styles.introSection}>
                <p>
                    <span className={styles.highlight}>Hi, I'm Kelvin Atuobi</span>, a passionate Data Analyst with a knack for turning complex data into clear, actionable insights. I thrive on helping businesses and individuals leverage data to make informed decisions and drive growth.
                </p>
            </div>

            <div className={styles.cardsSection}>
                <div className={styles.card}>
                    <h2>Data Visualization</h2>
                    <p>
                        Transforming raw data into compelling visualizations that tell a story. Expert in Power BI, Tableau, and Excel dashboards.
                    </p>
                </div>
                <div className={styles.card}>
                    <h2>Business Analytics</h2>
                    <p>
                        Analyzing trends, forecasting outcomes, and providing actionable insights for strategic decisions.
                    </p>
                </div>
                <div className={styles.card}>
                    <h2>Data Storytelling</h2>
                    <p>
                        Crafting narratives around data insights to help decision-makers grasp the implications and take informed actions.
                    </p>
                </div>
            </div>

            <div className={styles.skillsSection}>
                <h2>Skills & Tools</h2>
                <ul className={styles.skillsList}>
                    <li>Python</li>
                    <li>SQL</li>
                    <li>Power BI</li>
                    <li>Tableau</li>
                    <li>Excel</li>
                    <li>Business Analytics</li>
                    <li>Data Visualization</li>
                </ul>
            </div>

            <div className={styles.socialSection}>
                <h2>Connect with Me</h2>
                <SocialIcons size="large" variant="color" />
            </div>

            <div className={styles.mapSection}>
                <h2>Location</h2>
                <iframe
                    title="Google Map"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3971.964234833973!2d-0.1869646846758297!3d5.603716495936264!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdf9b4e4b6b6b6b%3A0x6b6b6b6b6b6b6b6b!2sAccra%2C%20Ghana!5e0!3m2!1sen!2sgh!4v1689876543210!5m2!1sen!2sgh"
                    width="100%"
                    height="220"
                    style={{ border: 0, borderRadius: '12px' }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
            </div>

            <button className={styles.continueButton} onClick={handleContinue}>
                Continue <span style={{fontSize: '1.2em'}}>→</span>
            </button>
        </div>
    );
};

export default AboutPage;