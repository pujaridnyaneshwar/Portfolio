import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from '../styles/Project.module.css';
import { motion } from 'framer-motion';
import ProjectImg from '../assets/ProjectOn.jpg';

const WorkPage = () => {
  const navigate = useNavigate();

  const handleViewProjects = () => {
    navigate("/MyProject"); // change "/projects" to your actual project page route
  };

  return (
    <div className={styles.pageWrapper}>
      <section className={styles.aboutSection}>
        {/* Intro Section */}
        <motion.div
          className={styles.intro}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className={styles.imageContainer}>
            <img
              src={ProjectImg}
              alt="Ripra Studio"
              className={styles.image}
              loading="lazy"
            />
          </div>

          <div className={styles.textContainer}>
            <h2>I have worked on various projects</h2>
            <p>
              I strongly believe that the most effective way to learn is through practical application by developing meaningful projects. Therefore, I consistently ensure that I implement the concepts and skills I acquire.
            </p>

            {/* View Projects Button */}
            <button 
              className={styles.viewButton} 
              onClick={handleViewProjects}
            >
              View Projects
            </button>
          </div>
        </motion.div>
      </section>
    </div>
  );
}

export default WorkPage;
