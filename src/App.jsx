import React, { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Sidebar from './components/Sidebar/Sidebar';
import Footer from './components/Footer/Footer';
import LandingPage from './pages/LandingPage/LandingPage';
import HomePage from './pages/HomePage/HomePage';
import AboutPage from './pages/AboutPage/AboutPage';
import ProjectsPage from './pages/ProjectsPage/ProjectsPage';
import CertificatesPage from './pages/CertificatesPage/CertificatesPage';
import BlogPage from './pages/BlogPage/BlogPage';
import ResumePage from './pages/ResumePage/ResumePage';
import './index.css'; // Global styles

function App() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const location = useLocation();

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    // Set body class for background color based on route
    useEffect(() => {
        const body = document.body;
        body.classList.remove('dark-background-page', 'light-background-page');
        if (location.pathname === '/') {
            body.classList.add('dark-background-page');
        } else {
            body.classList.add('light-background-page');
        }
    }, [location.pathname]);

    // Close sidebar on route change
    useEffect(() => {
        setIsSidebarOpen(false);
    }, [location.pathname]);

    // Footer style for landing page
    const isDarkBackgroundPage = location.pathname === '/';

    return (
        <>
            {/* Show Navbar on all pages except LandingPage */}
            {location.pathname !== '/' && <Navbar toggleSidebar={toggleSidebar} />}

            <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />

            {/* Overlay for sidebar */}
            {isSidebarOpen && (
                <button
                    type="button"
                    className="sidebar-overlay"
                    aria-label="Close sidebar"
                    onClick={toggleSidebar}
                    style={{
                        background: 'none',
                        border: 'none',
                        padding: 0,
                        margin: 0,
                        width: '100%',
                        height: '100%',
                        position: 'fixed',
                        top: 0,
                        left: 0,
                        zIndex: 1000,
                        cursor: 'pointer'
                    }}
                ></button>
            )}

            <div className={`main-content ${isSidebarOpen ? 'sidebar-pushed' : ''}`}>
                <Routes>
                    <Route path="/" element={<LandingPage />} />
                    <Route path="/home" element={<HomePage />} />
                    <Route path="/about" element={<AboutPage />} />
                    <Route path="/projects" element={<ProjectsPage />} />
                    <Route path="/certificates" element={<CertificatesPage />} />
                    <Route path="/blog" element={<BlogPage />} />
                    <Route path="/resume" element={<ResumePage />} />
                    {/* 404 Not Found fallback */}
                    <Route path="*" element={<div>404 Not Found</div>} />
                </Routes>
            </div>

            {/* Footer with conditional styling */}
            <Footer className={isDarkBackgroundPage ? '' : 'light'} />
        </>
    );
}

export default App;