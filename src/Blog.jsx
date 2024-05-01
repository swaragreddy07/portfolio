import styles from "./smart.module.css";
import style from "./blog.module.css";

function Blog() {
  return (
    <div>
      <h1 className={`${styles.h1} ${style.h1}`}>Smart Health Hub Blog</h1>
      <h2 className={`${styles.h2} ${style.h2}`}>INTRODUCTION</h2>
      <div className={`${styles.para} ${style.para}`}>
        <p className={`${styles.p} ${style.p}`}>
          SmartHealth Hub Blog is a website that explores the advantages,
          disadvantages, and areas for improvement of the Smart Health Hub
          platform. I created this blog using WordPress.This blog is
          hosted on my UTA Cloud.
        </p>
      </div>
      <div class={styles.last}>
        <a href="https://sxp8023.uta.cloud/blog/" target="_blank">
          <button class={styles.button}>Vist Blog</button>
        </a>
      </div>

    </div>
  );
}

export default Blog;
