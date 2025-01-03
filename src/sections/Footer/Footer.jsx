import React from 'react'
import Styles from './FooterStyles.module.css'
const Footer = () => {
  return (
    <section id='footer' className={Styles.container}>
         <p>
            &copy; 2025 Kingsley Chukwuka. 
            <br />
            All rights reserved.
        </p>
    </section>
  )
}

export default Footer