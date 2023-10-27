import React from 'react';

import resumeSvg from '../../assets/resume.svg';
import logoSvg from '../../assets/logo.svg';
import styles from './Header.module.css'

function Header() {
  return (
    <div className={styles.headbody}>
        <div className={styles.head}>
          <img src={logoSvg} alt="logo"/>
        </div>
    <div className={styles.container}>
        <div className={styles.left}>
      <p className={styles.heading }>
        A <span>Resume</span> that stands out!</p>
      <p className={styles.heading }>
        Make your own resume. <span>It's free</span>
        </p>
        <a href='#scroll'>
        <button className={styles.btnr}>Create Resume</button>
        </a>
        </div> 
        <div className={styles.right}>
             <img src={resumeSvg} alt="Resume" />
        </div>
    </div>
    </div>
  )
}

export default Header;
