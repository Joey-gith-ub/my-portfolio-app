import React from 'react';
import styles from './BlogPage.module.css';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const posts = [
    {
        title: "5 Ways Data Visualization Drives Business Decisions",
        date: "July 2025",
        excerpt: "Discover how effective data visualization can transform raw data into actionable insights for your business.",
        link: "https://www.google.com/search?q=5+Ways+Data+Visualization+Drives+Business+Decisions"
    },
    {
        title: "Excel Tips for Data Analysts: Boost Your Productivity",
        date: "June 2025",
        excerpt: "Master advanced Excel techniques to streamline your data analysis workflow.",
        link: "https://www.google.com/search?q=Excel+Tips+for+Data+Analysts"
    },
    {
        title: "Power BI vs Tableau: Which Should You Learn?",
        date: "May 2025",
        excerpt: "A practical comparison to help you choose the right data visualization tool for your career.",
        link: "https://www.google.com/search?q=Power+BI+vs+Tableau+Which+Should+You+Learn"
    }
];

const BlogPage = () => {
    const navigate = useNavigate();
    const handleNext = () => navigate('/resume');

    return (
        <div className={styles.blogPage}>
            <h1 className={styles.title}>Insights & Articles</h1>
            <p className={styles.intro}>
                I love sharing my knowledge and experience in data analytics, visualization, and business intelligence. Explore my latest articles below!
            </p>
            <div className={styles.postList}>
                {posts.map((post, idx) => (
                    <div className={styles.postCard} key={idx}>
                        <a href={post.link} target="_blank" rel="noopener noreferrer" className={styles.postTitle}>
                            <h2>{post.title}</h2>
                        </a>
                        <p className={styles.date}>{post.date}</p>
                        <p>{post.excerpt}</p>
                        <a href={post.link} target="_blank" rel="noopener noreferrer" className={styles.readMore}>Read More</a>
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

export default BlogPage;