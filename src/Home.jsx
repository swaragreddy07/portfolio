import React, { useState, useEffect, useRef } from "react";
import { Route, useNavigate } from "react-router-dom";
import avatar from "./assets/avatar.png";
import link from "./assets/in.png";
import hub from "./assets/github.png";
import styles from "./home.module.css";
import html from "./assets/html.png";
import css from "./assets/css.png";
import js from "./assets/js.png";
import php from "./assets/php.png";
import laravel from "./assets/laravel.png";
import react from "./assets/react.png";
import pressbook from "./assets/pressbook.png";
import canvas from "./assets/canvas.png";
import wordpress from "./assets/wordpress.png";
import sxp from "./assets/sxp.png";
import blog from "./assets/blog.png";
import book from "./assets/book.png";
import my_canvas from "./assets/my_canvas.png";
import sample from "./assets/sample.png";
import profile from "./assets/profile.png";
import python from "./assets/python.png";
function Home() {
  function smart() {
    const url = "/smart";
    window.open(url, "_blank");
  }
  function Sample() {
    const url = "/sample";
    window.open(url, "_blank");
  }

  function Canvas() {
    const url = "/canvas";
    window.open(url, "_blank");
  }

  function Blog() {
    const url = "/blog";
    window.open(url, "_blank");
  }
  function Press() {
    const url = "/pressbook";
    window.open(url, "_blank");
  }
  const navigate = useNavigate();
  return (
    <div className={styles.container}>
      <h1 className={styles.h1}>Swarag Reddy Pingili</h1>
      <p className={styles.p}>Software Devoloper</p>
      <div className={styles.logo}>
        <a
          href="https://www.linkedin.com/in/swarag-reddy-pingili-845238241/"
          target="_blank"
        >
          <img className={styles.img} src={link}></img>
        </a>
        <a href="https://github.com/swaragreddy07" target="_blank">
          <img className={styles.img2} src={hub}></img>
        </a>
      </div>
      <div className={styles.avatarC}>
        <img className={styles.avatar} src={profile}></img>
      </div>
      <p className={styles.skill}>Skills</p>
      <div className={styles.skills}>
        <div className={`${styles.image_container} ${styles.one}`}>
          <span className={styles.text_overlay}>HTML</span>
          <img className={styles.skill_html} src={html}></img>
        </div>
        <div className={`${styles.image_container} ${styles.two}`}>
          <span className={styles.text_overlay}>CSS</span>
          <img className={styles.skill_html} src={css}></img>
        </div>
        <div className={`${styles.image_container} ${styles.three}`}>
          <span className={styles.text_overlay}>PRESSBOOK</span>
          <img className={styles.skill_html} src={pressbook}></img>
        </div>
        <div className={`${styles.image_container} ${styles.four}`}>
          <span className={styles.text_overlay}>CANVAS</span>
          <img className={styles.skill_html} src={canvas}></img>
        </div>
        <div className={`${styles.image_container} ${styles.five}`}>
          <span className={styles.text_overlay}>WORDPRESS</span>
          <img className={styles.skill_word} src={wordpress}></img>
        </div>

        <div className={`${styles.image_container} ${styles.six}`}>
          <span className={styles.text_overlay}>JavaScript</span>
          <img className={styles.skill_html} src={js}></img>
        </div>
        <div className={`${styles.image_container} ${styles.seven}`}>
          <span className={styles.text_overlay}>React</span>
          <img className={styles.skill_html} src={react}></img>
        </div>
        <div className={`${styles.image_container} ${styles.eight}`}>
          <span className={styles.text_overlay}>PHP</span>
          <img className={styles.skill_html} src={php}></img>
        </div>
        <div className={`${styles.image_container} ${styles.nine}`}>
          <span className={styles.text_overlay}>Laravel</span>
          <img className={styles.skill_html} src={laravel}></img>
        </div>
        <div className={`${styles.image_container} ${styles.ten}`}>
          <span className={styles.text_overlay}>Python</span>
          <img className={styles.skill_python} src={python}></img>
        </div>
      </div>
      <h2 className={styles.work}>Projects I Recently Worked on</h2>
      <div className={styles.project}>
        <div className={styles.line1}>
          <img onClick={smart} className={styles.sxp} src={sxp}></img>
          <img onClick={Blog} className={styles.sxp} src={blog}></img>
        </div>
        <div className={styles.line2}>
          <img onClick={Press} className={styles.sxp} src={book}></img>
          <img onClick={Canvas} className={styles.sxp} src={my_canvas}></img>
        </div>
        <div className={styles.line3}>
          <img onClick={Sample} className={styles.sample} src={sample}></img>
        </div>
      </div>
      <p className={styles.pp}>Contact Me</p>
      <div className={styles.contact}>
        <img className={styles.Avatar} src={avatar}></img>

        <div className={styles.sec}>
          <a
            className={styles.button}
            href="https://www.linkedin.com/in/swarag-reddy-pingili-845238241/"
            target="_blank"
          >
            linkedin
          </a>
          <a
            className={styles.button}
            href="mailto:sxp8023@mavs.uta.edu?subject=Feedback&body=Hello%20there!"
            target="_blank"
          >
            Email
          </a>
        </div>
      </div>
    </div>
  );
}

export default Home;
