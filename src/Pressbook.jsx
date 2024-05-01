import styles from "./smart.module.css";
import style from "./pressbook.module.css";
import account from "./assets/account.png";
import custom from "./assets/custom.png";
import Styles from "./home.module.css";
function Pressbook() {
  return (
    <div>
      <h1 className={`${styles.h1} ${style.h1}`}>PressBook</h1>
      <h2 className={`${styles.h2} ${style.h2}`}>INTRODUCTION</h2>
      <div className={styles.para}>
        <p className={`${styles.p} ${style.p}`}>
          Pressbooks is an online software that enables authors and publishers
          to design and format any kind of book. I have used PressBooks to
          create my own books. For example, I have created a book called
          "Algorithm and Data Structures" and applied custom HTML and CSS to
          some sections. Additionally, I have downloaded that book and included
          it in my Canvas course modules. PressBooks really helped me keep track
          of all my changes and organize the book efficiently.
        </p>
      </div>
      <div class={styles.last}>
        <a
          href="https://drive.google.com/file/d/1DFynP-LnPf234ah-JCMEMVVHi24PlwV0/view"
          target="_blank"
        >
          <button class={`${styles.button} ${style.button}`}>View book</button>
        </a>
      </div>
      <h2 className={`${styles.h2} ${style.h2}`}>My PressBook Account</h2>
      <div className={style.container}>
        <img className={style.sxp} src={account}></img>
      </div>

      <h2 className={`${styles.h2} ${style.h2}`}>Custom Styling</h2>
      <div className={styles.para}>
        <p className={`${styles.p} ${style.p}`}>
          I have used in-line CSS for custom styling to enhance the appearance
          of the book
        </p>
      </div>
      <div className={style.container}>
        <img className={style.sxp} src={custom}></img>
      </div>
    </div>
  );
}
export default Pressbook;
