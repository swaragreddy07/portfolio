import styles from "./smart.module.css";
import style from "./canvas.module.css";
import account from "./assets/canvas_acc.png";
import custom from "./assets/custom.png";
import modules from "./assets/modules.png";
import video from "./assets/video.png";
import Styles from "./home.module.css";
function Canvas() {
  return (
    <div>
      <h1 className={`${styles.h1} ${style.h1}`}>Canvas</h1>
      <h2 className={`${styles.h2} ${style.h2}`}>INTRODUCTION</h2>
      <div className={styles.para}>
        <p className={`${styles.p} ${style.p}`}>
          I have created a sample course on my Canvas teacher's account called
          'Algorithms and Data Structures.' I have included the Pressbook
          textbook in my course materials. The course materials also contain
          pages that have multimedia content such as videos and images.
          Additionally, I have published other course materials.
        </p>
      </div>
      <div class={styles.last}>
        <a href="https://canvas.instructure.com/enroll/9WYGDN" target="_blank">
          <button class={`${styles.button} ${style.button}`}>
            Join my course
          </button>
        </a>
      </div>
      <h2 className={`${styles.h2} ${style.h2}`}>My Canvas Account</h2>
      <div className={style.container}>
        <img className={style.sxp} src={account}></img>
      </div>
      <h2 className={`${styles.h2} ${style.h2}`}>Course Modules</h2>
      <div className={style.container}>
        <img className={style.sxp} src={modules}></img>
      </div>
      <h2 className={`${styles.h2} ${style.h2}`}>Multimedia Content</h2>
      <div className={styles.para}>
        <p className={`${styles.p} ${style.p}`}>
          I have uploaded multimedia content into the course modules so that it
          becomes easy for the students to learn.
        </p>
      </div>
      <div className={style.container}>
        <img className={style.sxp} src={video}></img>
      </div>
    </div>
  );
}
export default Canvas;
