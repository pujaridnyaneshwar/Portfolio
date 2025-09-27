import React, { useRef } from 'react';
import styles from '../styles/Home.module.css';
import Developer from '../assets/Developer.mp4'; //


const HomePage = () => {
  const homeRef = useRef(null);
 
  return (
    <>
      <div className={styles.homePage}>
        {/* ✅ Hero Video Section */}
        <div ref={homeRef} className={styles.heroSlider}>
          <video
            className={styles.fullVideo}
            src={Developer}
            autoPlay
            loop
            muted
            playsInline
          />
        </div>
      </div>
    </>
  );
};

export default HomePage;
