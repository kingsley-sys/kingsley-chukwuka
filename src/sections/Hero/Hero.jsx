import React from 'react'
import styles from './HeroStyles.module.css';
import HeroImg from '../../assets/HeroImg.jpg';
import sun from '../../assets/sun.svg';
import moon from '../../assets/moon.svg';
import twitterLight from '../../assets/twitter-light.svg';
import twitterDark from '../../assets/twitter-Dark.svg';
import githubLight from '../../assets/github-light.svg';
import githubDark from '../../assets/github-Dark.svg';
import linkedinLight from '../../assets/linkedin-light.svg';
import linkedinDark from '../../assets/linkedin-Dark.svg';
import CV from '../../assets/cv.pdf'
import { useTheme } from '../../common/ThemeContext';
 
const Hero = () => {
  const {theme, toggleTheme} = useTheme(); //Imported from ThemeContext.jsx

  const themeIcon = theme === 'light' ? sun : moon;
  const twitterIcon = theme === 'light' ? twitterLight : twitterDark;
  const githubIcon = theme === 'light' ? githubLight : githubDark;
  const linkedinIcon = theme === 'light' ? linkedinLight : linkedinDark;
    
  return (
    <section id='hero' className={styles.container}>
        <div className='colorModeContainer'>
            <img className={styles.heroImg} src={HeroImg} alt="Profile picture of Kingsley Chukwuka" />
            <img
                className={styles.colorMode}
                src={themeIcon}
                alt="Color mode icon"
                onClick={toggleTheme}
            />
        </div>
        <div className={styles.info}>
            <h1>
                Kingsley
                <br/>
                Chukwuka
            </h1>
            <h2>
                Frontend Developer
            </h2>
            <span>
                <a href="https://twitter.com/" target='_blank'>
                    <img src={twitterIcon} alt="Twitter Icon" />
                </a>
                <a href="https://github.com/" target='_blank'>
                    <img src={githubIcon} alt="github Icon" />
                </a>
                <a href="https://linkedin.com/" target='_blank'>
                    <img src={linkedinIcon} alt="linkedin Icon" />
                </a>
            </span>
            <p className={styles.description}>With a passion for developing modern React web apps for commercial businesses.</p>
            <a href={CV} download>
                <button className="hover">Resume</button>
            </a>
        </div>
    </section>
  )
} 

export default Hero 