import styles from "./smart.module.css";
function Smart() {
  return (
    <div className={styles.body}>
      <h1 className={styles.h1}>Smart Health Hub</h1>
      <h2 className={styles.h2}>INTRODUCTION</h2>
      <div className={styles.para}>
        <p className={styles.p}>
          SmartHealth Hub is a cutting-edge website aiming to revolutionize
          healthcare accessibility and management. This project combines
          healthcare, technology, and user experience, addressing the critical
          need for an integrated healthcare ecosystem. The focus is on data
          security, interoperability, and providing a user- friendly platform
          for both patients and healthcare professionals. I made this website by
          using HTML, CSS, JavaScript, React, PHP, Laravel, SQL. This website is
          hosted on my UTA Cloud.
        </p>
      </div>
      <div class={styles.last}>
        <a href="https://sxp8023.uta.cloud/" target="_blank">
          <button class={styles.button}>Vist website</button>
        </a>
      </div>
      <h2 className={styles.h2}>LOGIN INFORMATION</h2>
      <div className={styles.container}>
        <div class={styles.card}>
          <div class={styles.header}>PATIENT ROLE</div>
          <div class={styles.body}>
            <p className={styles.P}>Email: patient@gmail.com</p>
            <p className={styles.P}>password: patient</p>
          </div>
          <div class={styles.footer}>
            <a href="https://sxp8023.uta.cloud/sign-in" target="_blank">
              <button class={styles.button}>Login</button>
            </a>
          </div>
        </div>
        <div class={`${styles.card} ${styles.card1}`}>
          <div class={styles.header}>DOCTOR ROLE</div>
          <div class={styles.body}>
            <p className={styles.P}>Email: doctor@gmail.com</p>
            <p className={styles.P}>password: doctor</p>
          </div>
          <div class={styles.footer}>
            <a href="https://sxp8023.uta.cloud/sign-in" target="_blank">
              <button class={styles.button}>Login</button>
            </a>
          </div>
        </div>
        <div class={styles.card}>
          <div class={styles.header}>ADMIN ROLE</div>
          <div class={styles.body}>
            <p className={styles.P}>Email: admin@gmail.com</p>
            <p className={styles.P}>password: admin</p>
          </div>
          <div class={styles.footer}>
            <a href="https://sxp8023.uta.cloud/sign-in" target="_blank">
              <button class={styles.button}>Login</button>
            </a>
          </div>
        </div>
      </div>
      <div className={styles.container}>
        <div class={styles.card}>
          <div class={styles.header}>HEALTH ADMIN ROLE</div>
          <div class={styles.body}>
            <p className={styles.P}>Email: healthadmin@gmail.com</p>
            <p className={styles.P}>password: healthadmin</p>
          </div>
          <div class={styles.footer}>
            <a href="https://sxp8023.uta.cloud/sign-in" target="_blank">
              <button class={styles.button}>Login</button>
            </a>
          </div>
        </div>
        <div class={styles.card}>
          <div class={styles.header}>PHARMACIST ROLE</div>
          <div class={styles.body}>
            <p className={styles.P}>Email: pharmacy@gmail.com</p>
            <p className={styles.P}>password: pharmacy</p>
          </div>
          <div class={styles.footer}>
            <a href="https://sxp8023.uta.cloud/sign-in" target="_blank">
              <button class={styles.button}>Login</button>
            </a>
          </div>
        </div>
      </div>
      <div className={styles.Container}>
        <div class={styles.card}>
          <div class={styles.header}>DOCTOR ROLE</div>
          <div class={styles.body}>
            <p className={styles.P}>Email: doctor@gmail.com</p>
            <p className={styles.P}>password: doctor</p>
          </div>
          <div class={styles.footer}>
            <a href="https://sxp8023.uta.cloud/sign-in" target="_blank">
              <button class={styles.button}>Login</button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Smart;
