import React from 'react';
import styles from './ResumePage.module.css';

const ResumePage = () => (
    <div className={styles.resumePage}>
        <h1 className={styles.title}>Kelvin Atuobi – Resume</h1>
        <p className={styles.intro}>
            Experienced Data Analyst skilled in transforming data into actionable insights. Open to new opportunities!
        </p>
        <section className={styles.section}>
            <h2>Professional Summary</h2>
            <p>
                Results-driven Data Analyst with expertise in data visualization, business analytics, and reporting automation. Proficient in Python, SQL, Power BI, Tableau, and Excel. Adept at communicating complex data in clear, compelling ways to drive business decisions.
            </p>
        </section>
        <section className={styles.section}>
            <h2>Skills</h2>
            <ul className={styles.skillsList}>
                <li>Data Analysis & Visualization</li>
                <li>Python, SQL, Excel, Power BI, Tableau</li>
                <li>Business Analytics & Reporting</li>
                <li>Dashboard Development</li>
                <li>Data Storytelling</li>
            </ul>
        </section>
        <section className={styles.section}>
            <h2>Experience</h2>
            <div>
                <h3>Data Analyst – University of Professional Studies, Accra</h3>
                <p className={styles.date}>2025 – Present</p>
                <ul>
                    <li>Developed interactive dashboards for business stakeholders using Power BI and Tableau.</li>
                    <li>Automated reporting processes, reducing manual effort by 40%.</li>
                    <li>Collaborated with cross-functional teams to deliver actionable insights.</li>
                </ul>
            </div>
            <div>
                <h3>Junior Data Analyst – University of Professional Studies, Accra</h3>
                <p className={styles.date}>2025 – Present</p>
                <ul>
                    <li>Analyzed sales and marketing data to identify growth opportunities.</li>
                    <li>Created Excel-based tools for data tracking and visualization.</li>
                </ul>
            </div>
        </section>
        <section className={styles.section}>
            <h2>Education</h2>
            <p>B.Sc. in Information Technology, University of Professional Studies, 2025</p>
        </section>
        <a href="/resume.pdf" download className={styles.downloadBtn}>
            Download PDF Resume
        </a>
    </div>
);

export default ResumePage;