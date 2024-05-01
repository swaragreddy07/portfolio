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
      <h1 className={`${styles.h1} ${style.h1}`}>lANDING PAGE</h1>
      <h2 className={`${styles.h2} ${style.h2}`}>INTRODUCTION</h2>
      <div className={styles.para}>
        <p className={`${styles.p} ${style.p}`}>
          I have created a sample landing page with html, css and added media
          queries for page responsiveness.
        </p>
      </div>
      <div class={styles.last}>
        <a
          href="https://remarkable-kleicha-aca46f.netlify.app/"
          target="_blank"
        >
          <button class={`${styles.button} ${style.button}`}>View page</button>
        </a>
      </div>
    </div>
  );
}
export default Canvas;
