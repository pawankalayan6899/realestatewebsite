import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ParallaxProvider, Parallax } from 'react-scroll-parallax';
import CurrentProjects from '../components/CurrentProjects';
import HeroSlider from '../components/HeroSlider';
import SectionTitle from '../components/SectionTitle/SectionTitle';
import Services from '../components/Services/Services';
import ProjectStats from '../components/ProjectStats/ProjectStats';
import CompanyGrowth from '../components/CompanyGrowth/CompanyGrowth';
import aboutImage1 from '../assets/images/about-1.jpg';
import aboutImage2 from '../assets/images/about-2.jpg';
import styles from './Home.module.css';

const ABOUT_FEATURES = [
  { number: '15+', text: 'Years of Excellence' },
  { number: '200+', text: 'Projects Completed' },
  { number: '500+', text: 'Happy Families' },
  { number: '50+', text: 'Skilled Professionals' },
];

const Home = ({ showToast }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [0, 1]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [0.5, 1]);

  return (
    <ParallaxProvider>
      <div className={styles.home}>
        <HeroSlider />
        <Services />
        <CurrentProjects />
        <section ref={ref} className={styles.about}>
          <div className={styles.aboutContainer}>
            <div className={styles.aboutContent}>
              <SectionTitle
                title="About Us"
                description="Transforming Visions into Architectural Marvels"
              />
              <div className={styles.aboutDetails}>
                <div className={styles.aboutText}>
                  <p>
                    At Thanvi Buildtech, we are more than just a construction
                    company. We are visionaries, craftsmen, and problem solvers
                    dedicated to turning your architectural dreams into
                    reality.
                  </p>
                  <div className={styles.aboutFeatures}>
                    {ABOUT_FEATURES.map((feature, index) => (
                      <div key={index} className={styles.feature}>
                        <h3>{feature.number}</h3>
                        <p>{feature.text}</p>
                      </div>
                    ))}
                  </div>
                </div>
                <motion.div
                  style={{ opacity, scale }}
                  className={styles.aboutImages}
                >
                  <Parallax speed={-10}>
                    <img src={aboutImage1} alt="About Us 1" />
                  </Parallax>
                  <Parallax speed={10}>
                    <img src={aboutImage2} alt="About Us 2" />
                  </Parallax>
                </motion.div>
              </div>
            </div>
          </div>
        </section>
        <ProjectStats />
        <CompanyGrowth />
      </div>
    </ParallaxProvider>
  );
};

export default Home;