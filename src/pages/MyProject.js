import React from "react";
import styles from "../styles/MyProject.module.css"; // Import CSS module
import TextUtilsImg from "../assets/TextUtils.jpg"; // Local image import
import NavkarImg from "../assets/navkar.jpg"; // Local image import
import QuizeImg from "../assets/Quize.jpg"; // Local image import

const projects = [
  {
    title: "Text Utils App",
    desc: "Text operation App for Text Utils.",
    img: TextUtilsImg, // ✅ Correct usage of imported image
    liveLink: "https://textutilesappp.netlify.app/",
    codeLink: "https://github.com/pujaridnyaneshwar/textutils-main",
  },
  {
    title: "Navkar masale",
    desc: "Ecommerce website for Navkar masale.",
    img: NavkarImg,
    liveLink: "https://navkarmasle.netlify.app/",
    codeLink: "https://github.com/pujaridnyaneshwar/navkar",
  },
  {
    title: "Quize App",
    desc: "Quize App for Questionary.",
    img: QuizeImg,
    liveLink: "https://fasterquizora.netlify.app/",
    codeLink: "https://github.com/pujaridnyaneshwar/Faster-Quizora",
  },
  {
    title: "Artist Website",
    desc: "For Making UI Easy like bootstrap",
    img: "https://riprastudio.netlify.app/static/media/slide2.c5b1a55c1896cb51639f.jpg",
    liveLink: "https://riprastudio.netlify.app/",
    codeLink: "https://github.com/pujaridnyaneshwar/ripra",
  },
];

export default function MyProject() {
  return (
    <div className={styles.projectPage}>
      <h1 className={styles.projectHeading}>My Projects</h1>
      <div className={styles.projectGrid}>
        {projects.map((project, index) => (
          <div key={index} className={styles.projectCard}>
            <img
              src={project.img}
              alt={project.title}
              className={styles.projectImg}
            />
            <div className={styles.projectContent}>
              <h2 className={styles.projectTitle}>{project.title}</h2>
              <p className={styles.projectDesc}>{project.desc}</p>
              <div className={styles.projectButtons}>
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${styles.btn} ${styles.live}`}
                >
                  Live Link
                </a>
                <a
                  href={project.codeLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${styles.btn} ${styles.code}`}
                >
                  Source Code
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
