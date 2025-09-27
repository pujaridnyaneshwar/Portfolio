import React from 'react';
import styles from '../styles/About.module.css';
import { motion } from 'framer-motion';
import aboutImg from '../assets/about.jpg';
import ReactImg from '../assets/react.jpg';
import NodeImg from '../assets/node.jpg';
import JavaImg from '../assets/Java.jpg';
import PythonImg from '../assets/Python.jpg';
import SQLImg from '../assets/Mysql.jpg';
import HtmlImg from '../assets/HTML.jpg';
import CssImg from '../assets/CSS.jpg';

const AboutPage = () => {
  const services = [

    { icon: JavaImg, text: "Java: I am skilled in Java programming, utilizing object-oriented principles to develop reliable, scalable, and maintainable applications across diverse projects" },
    { icon: PythonImg, text: "Python: Skilled in Python programming, capable of writing clean, optimized code for backend development, data processing, and application logic to deliver reliable solutions." },
    { icon: ReactImg, text: "React: Proficient in React.js, with experience building dynamic and responsive user interfaces using component-based architecture and modern JavaScript features" },
    { icon: HtmlImg, text: "HTML: I possess strong proficiency in HTML, with particular expertise in structuring and organizing web pages effectively." },
    { icon: CssImg, text: "CSS: I enjoy leveraging CSS to design visually appealing and responsive website layouts. Over the past my projects, I have gained solid knowledge and practical experience in creating aesthetically pleasing web pages" },
    { icon: NodeImg, text: "NodeJS: I use it to develop server-side logic, handle APIs, and manage databases efficiently, ensuring smooth and fast communication between the client and server." },
    { icon: SQLImg, text: "MySQL: I am proficient in using MySQL for data storage and management. I have utilized it across multiple projects, finding it efficient and reliable for handling complex datasets." }
  ];

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
              src={aboutImg}
              alt="Ripra Studio"
              className={styles.image}
              loading="lazy"
            />
          </div>

          <div className={styles.textContainer}>
            <h2>About Me</h2>
            <p>
              "Hello I'm Dnyaneshwar," I hold a Master’s degree in Computer Applications and am currently advancing my skills in Full Stack Development. Passionate about building scalable applications with Java, React.js, Node.js, SQL, and Python, I enjoy exchanging ideas, spreading knowledge, and collaborating on innovative solutions. A social and curious learner, I love taking on new challenges and continuously growing both personally and professionally."
            </p>
          </div>
        </motion.div>

        {/* Services Section */}
        <motion.div
          className={styles.services}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3>My Skills</h3>
          <p>

          </p>

          <ul className={styles.serviceList}>
            {services.map((service, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                className={styles.serviceItem}
              >
                <span className={styles.serviceIcon}>
                  <img
                    src={service.icon}
                    alt={service.text}
                    className={styles.iconImg}
                    loading="lazy"
                  />
                </span>
                <span>{service.text}</span>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </section>

      {/* Bottom Wave Design */}
      {/* <div className={styles.designElement}>
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none">
          <defs>
            <linearGradient id="ripraBottomGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#ceddeeff" />  
              <stop offset="25%" stopColor="#576471ff" /> 
              <stop offset="50%" stopColor="#66656aff" />  
              <stop offset="75%" stopColor="#4c4b5cff" />  
              <stop offset="100%" stopColor="#2C3E50" /> 
            </linearGradient>
          </defs>

          <path
            d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
            opacity=".25"
            fill="url(#ripraBottomGradient)"
          />
          <path
            d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
            opacity=".5"
            fill="url(#ripraBottomGradient)"
          />
          <path
            d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
            fill="url(#ripraBottomGradient)"
          />
        </svg> 
      </div> */}

    </div>
  );
};

export default AboutPage;
