import React from "react";
import styles from './about.module.scss';
import Header from "../../components/Header/header"
import Footer from "../../components/Footer/footer"

const About = () => {
  return <div className='pagecontainer'>
<Header/>
    <p className={styles.textabout}>
      Somos un club de birra para aprender de birra y tomar con tus amigos jugando al csgo.
    </p>
    <Footer/>
    </div>;
};

export default About