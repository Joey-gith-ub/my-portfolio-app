import React from 'react';
import styles from './CertificatesPage.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExternalLinkAlt, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

const certificates = [
    {
        title: "Google Data Analytics Professional Certificate",
        issuer: "Coursera / Google",
        date: "April 2025",
        link: "https://www.coursera.org/account/accomplishments/certificate/XXXXXX"
    },
    {
        title: "Microsoft Certified: Data Analyst Associate (Power BI)",
        issuer: "Microsoft",
        date: "May 2025",
        link: "https://www.credly.com/badges/XXXXXX"
    },
    {
        title: "Tableau Desktop Specialist",
        issuer: "Tableau",
        date: "January 2025",
        link: "https://www.tableau.com/learn/certification/XXXXXX"
    }
];

const CertificatesPage = () => {
    const navigate = useNavigate();
    const handleNext = () => navigate('/projects');

    return (
        <div className={styles.certificatePage}>
            <h1 className={styles.title}>My Professional Certificates</h1>
            <p className={styles.intro}>
                I believe in continuous learning and have earned industry-recognized certifications to validate my skills in data analytics and visualization.
            </p>
            <div className={styles.certList}>
                {certificates.map((cert, idx) => (
                    <div className={styles.certCard} key={idx}>
                        <h2>{cert.title}</h2>
                        <p><strong>Issuer:</strong> {cert.issuer}</p>
                        <p><strong>Date:</strong> {cert.date}</p>
                        <a
                            href={cert.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={styles.viewBtn}
                        >
                            <FontAwesomeIcon icon={faExternalLinkAlt} className={styles.icon} />
                            View Certificate
                        </a>
                    </div>
                ))}
            </div>
            <div className={styles.nextBtnContainer}>
                <button className={styles.nextBtn} onClick={handleNext}>
                    Next <FontAwesomeIcon icon={faArrowRight} style={{ marginLeft: 8 }} />
                </button>
            </div>
        </div>
    );
};

export default CertificatesPage;