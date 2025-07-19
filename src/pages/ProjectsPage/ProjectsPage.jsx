import React from 'react';
import styles from './ProjectsPage.module.css';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const ProjectsPage = () => {
    const navigate = useNavigate();
    const handleNext = () => navigate('/blog');

    return (
        <div className={`page-content ${styles.projectsPage}`}>
            <h2 className={styles.title}>My Projects</h2>
            <p className={styles.description}>
                Here you'll find a selection of my data analysis and visualization projects.
                Stay tuned for detailed case studies!
            </p>
            {/* Add project cards/sections here later */}
            <div className={styles.nextBtnContainer}>
                <button className={styles.nextBtn} onClick={handleNext}>
                    Next <FontAwesomeIcon icon={faArrowRight} style={{ marginLeft: 8 }} />
                </button>
            </div>
        </div>
    );
};

export default ProjectsPage;