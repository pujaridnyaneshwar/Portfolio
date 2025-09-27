import React from "react";
import styles from "../styles/MyBlogs.module.css"; // CSS Module


const blogs = [
  {
    title: "Magic of Vibe Coding",
    image: "https://miro.medium.com/v2/resize:fit:600/format:webp/1*CMxW1OFttnPyKiZwAnEHEw.jpeg", // You can add a real image path if available
    link: "https://medium.com/@pujaridnyanu55/vibe-coding-why-writing-software-feels-more-like-music-than-math-dfa230eec1a5",
  },
  {
    title: "How the Web Applications works_",
    image:"https://miro.medium.com/v2/resize:fit:1100/format:webp/1*oneQO0O7tc3a4EEwgzrKbw.png",
    link: "https://medium.com/@pujaridnyanu55/ordering-a-burger-logging-into-an-app-how-web-applications-really-work-9075435ee56c",
  },
  {
    title: "How to Debug Like a Pro: Tips for New Developers",
    image:"https://miro.medium.com/v2/resize:fit:1100/format:webp/1*YSK_oHAl38Exeg6MS3IspQ.png",
    link: "https://medium.com/@pujaridnyanu55/%EF%B8%8F-how-to-debug-like-a-pro-tips-for-new-developers-38e6bd4fb176",
  },
  {
    title: "Will AI Replace Developers? My Perspective",
    image: "https://cdn-images-1.medium.com/max/1000/1*hKosza6u16NdnUs6qtSgZA.png",
    link: "https://medium.com/p/052af80733cc/edit",
  },
];

const MyBlogs = () => {
  return (
      <div className={styles.blogsContainer}>
        {blogs.map((blog, index) => (
          <div key={index} className={styles.card}>
            {blog.image && (
              <img src={blog.image} alt={blog.title} className={styles.image} />
            )}
            <h3 className={styles.title}>{blog.title}</h3>
            <a href={blog.link} className={styles.button}>
              Read
            </a>
          </div>
        ))}
      </div>
  );
};

export default MyBlogs;
