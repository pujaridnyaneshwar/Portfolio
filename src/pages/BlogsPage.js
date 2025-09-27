import React from 'react';
import styles from '../styles/Blogs.module.css';
import { motion } from 'framer-motion';
import { FaBullseye, FaEye, FaStar } from 'react-icons/fa';
import { GiSparkles, GiPuzzle, GiLightBulb, GiAchievement, GiTeamIdea, GiProgression } from 'react-icons/gi';

// Import your project image or use a valid image path
import ProjectImg from '../assets/blog.jpg';
 // Update the path and filename as needed

const handleViewProjects = () => {
  // Replace with your navigation logic, e.g., using react-router or window.location
  window.location.href = '/MyBlogs'; // change "/blogs" to your actual blogs page route
};

const MissionVisionPage = () => {
  return (
    <>
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
              <h2>I have recently begun writing blogs</h2>
              <p>
                I recently started blogging to reflect on my journey and share knowledge. Writing helps me grasp concepts more effectively while encouraging continuous exploration. You can check out my blogs here.
              </p>

              {/* View Projects Button */}
              <button 
                className={styles.viewButton} 
                onClick={handleViewProjects}
              >
                Read Blogs
              </button>
            </div>
          </motion.div>
        </section>
      </div>
      <section className={styles.wrapper}>
        <div className={styles.container}>
          <motion.h2
            className={styles.mainTitle}
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
           My Purpose & Vision
          </motion.h2>

          <div className={styles.cards}>
            <motion.div
              className={styles.card}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className={styles.icon}><FaBullseye /></div>
              <h3 className={styles.title}>Purpose</h3>
              <p className={styles.text}>
                “My purpose is to create innovative and reliable software that solves real-world problems, enhances user experiences, and helps businesses and individuals achieve their goals.”
              </p>
            </motion.div>

            <motion.div
              className={styles.card}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className={styles.icon}><FaEye /></div>
              <h3 className={styles.title}>Vision</h3>
              <p className={styles.text}>
                "To continuously grow as a developer while delivering software that enhances experiences and transforms businesses."
              </p>
            </motion.div>
          </div>

          <motion.div
            className={styles.coreValues}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className={styles.subTitle}>My Core Skills</h3>
            <div className={styles.valuesGrid}>
              <div className={styles.valueCard}><GiSparkles /><span>Creativity</span></div>
              <div className={styles.valueCard}><GiPuzzle /><span>Integrity</span></div>
              <div className={styles.valueCard}><GiLightBulb /><span>Innovation</span></div>
              <div className={styles.valueCard}><GiAchievement /><span>Excellence</span></div>
              <div className={styles.valueCard}><GiTeamIdea /><span>Collaboration</span></div>
              <div className={styles.valueCard}><GiProgression /><span>Growth</span></div>
              <div className={styles.valueCard}><FaStar /><span>Quality</span></div>
              {/* <div className={styles.valueCard}><FaBullseye /><span>Focus</span></div> */}
            </div>
          </motion.div>

          <motion.div
            className={styles.ctaBox}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            viewport={{ once: true }}
          >
            <FaStar className={styles.ctaIcon} />
            <h4>Join Us on my Technical Journey</h4>
            <p>Let’s shape your vision into a digital Businesses. Let’s collaborate today!</p>
            {/* <button className={styles.ctaButton}>Get in Touch</button> */}
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default MissionVisionPage;
