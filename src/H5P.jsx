import styles from "./smart.module.css";
import style from "./canvas.module.css";
import account from "./assets/canvas_acc.png";
import custom from "./assets/custom.png";
import modules from "./assets/modules.png";
import video from "./assets/video.png";
import h from "./assets/h_content.png";
import h2 from "./assets/h2.png";
import h3 from "./assets/h3.png";
import Styles from "./home.module.css";
function H5P() {
  return (
    <div>
      <h1 className={`${styles.h1} ${style.h1}`}>H5P</h1>
      <h2 className={`${styles.h2} ${style.h2}`}>INTRODUCTION</h2>
      <div className={styles.para}>
        <p className={`${styles.p} ${style.p}`}>
          H5P is a free and open-source content collaboration framework based on
          JavaScript. H5P makes it easy to create interactive content for
          various LMSs like Canvas. I have created content on H5P, such as
          multiple-choice questions and true or false quizzes, and embedded that
          content into Canvas to enhance the learning process.
        </p>
      </div>
      <div class={styles.last}>
        <a href="https://canvas.instructure.com/enroll/9WYGDN" target="_blank">
          <button class={`${styles.button} ${style.button}`}>
            Join my course On Canvas
          </button>
        </a>
      </div>
      <h2 className={`${styles.h2} ${style.h2}`}>My H5P Account</h2>
      <div className={style.container}>
        <img className={style.sxp} src={h}></img>
      </div>
    </div>
  );
}
export default H5P;
