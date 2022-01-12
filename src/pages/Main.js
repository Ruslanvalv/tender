import React, { useEffect, useRef } from 'react';
import Header from '../components/Header/Header';
import Hero from '../components/Hero/Hero';
import Features from '../components/Features/Features';
import Evaluate from '../components/Evaluate/Evaluate';
import FixPrice from '../components/FixPrice/FixPrice';
import Consult from '../components/Consult/Consult';
import OtherGifts from '../components/OtherGifts/OtherGifts';
import FullRequest from '../components/FullRequest/FullRequest';
import Footer from '../components/Footer/Footer';
import styles from './Main.module.scss';
import MobileFooter from '../components/Footer/MobileFooter/MobileFooter';
function Main() {
  // const [animationStatus, setAnimationStatus] = React.useState({
  //   evaluate: false,
  //   fixPrice: false,
  //   consult: false,
  // });
  const [evaleauteStatus, setEvaleauteStatus] = React.useState(false);
  const [fixPriceStatus, setFixPriceStatus] = React.useState(false);
  const [consultStatus, setConsultStatus] = React.useState(false);

  const evaluateRef = useRef(null);
  const fixPriceRef = useRef(null);
  const consultRef = useRef(null);

  function getStatus(elementRef, setState) {
    if (
      window.scrollY + window.innerHeight - elementRef.current.clientHeight * 0.3 >
        elementRef.current.offsetTop &&
      window.scrollY - elementRef.current.clientHeight * 0.7 < elementRef.current.offsetTop
    )
      setState(true);
  }

  useEffect(() => {
    document.addEventListener('scroll', function getAnimation(event) {
      getStatus(evaluateRef, setEvaleauteStatus);
      getStatus(fixPriceRef, setFixPriceStatus);
      getStatus(consultRef, setConsultStatus);
    });
  }, []);

  return (
    <div className={styles.Main}>
      <Header></Header>
      <Hero></Hero>
      <Features></Features>
      <Evaluate ref={evaluateRef} status={evaleauteStatus}></Evaluate>
      <FixPrice ref={fixPriceRef} status={fixPriceStatus}></FixPrice>
      <Consult ref={consultRef} status={consultStatus}></Consult>
      <OtherGifts></OtherGifts>
      <FullRequest></FullRequest>
      <Footer></Footer>
      <MobileFooter></MobileFooter>
    </div>
  );
}

export default Main;
