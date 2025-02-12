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
import GetInTouch from '../components/GetInTouch/GetInTouch';
import Footer from '../components/Footer/Footer';
import styles from './Home.module.css';

const ABOUT_FEATURES = [
  { number: '15+', text: 'Years of Excellence' },
  { number: '200+', text: 'Projects Completed' },
  { number: '500+', text: 'Happy Families' },
  { number: '50+', text: 'Awards Won' }
];

const pageVariants = {
  initial: { opacity: 0, x: '-100vw' },
  in: { opacity: 1, x: 0 },
  out: { opacity: 0, x: '100vw' }
};

const pageTransition = {
  type: 'tween',
  ease: 'anticipate',
  duration: 0.5
};

const Home = ({ showToast }) => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const imageScaleX = useTransform(scrollYProgress, [0, 0.5], [1, 1.1]);
  const imageScaleY = useTransform(scrollYProgress, [0, 0.5], [1, 1.1]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.3], [0, 1]);
  const textTranslateY = useTransform(scrollYProgress, [0, 0.3], [50, 0]);

  return (
    <ParallaxProvider>
      <motion.div 
        className={styles.home}
        initial="initial"
        animate="in"
        exit="out"
        variants={pageVariants}
        transition={pageTransition}
      >
        <HeroSlider />

        {/* About Us Section */}
        <section ref={sectionRef} className={styles.section}>
          <div className={styles.container}>
            <Parallax translateY={[-20, 20]}>
              <SectionTitle 
                title="About Us"
                subtitle="Building excellence through innovation and dedication"
              />
            </Parallax>
            <div className={styles.aboutContent}>
              <div className={styles.aboutGrid}>
                <Parallax translateX={[-20, 20]}>
                  <motion.div 
                    className={styles.aboutImages} 
                    data-aos="fade-right"
                    style={{
                      scaleX: imageScaleX,
                      scaleY: imageScaleY,
                      transformOrigin: 'center center'
                    }}
                  >
                    <motion.div 
                      className={styles.imageWrapper}
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.3 }}
                    >
                      <img src={aboutImage1} alt="Modern building exterior" className={styles.aboutImage1} />
                    </motion.div>
                    <motion.div 
                      className={styles.imageWrapper}
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.3 }}
                    >
                      <img src={aboutImage2} alt="Construction site" className={styles.aboutImage2} />
                    </motion.div>
                  </motion.div>
                </Parallax>
                <Parallax translateX={[20, -20]}>
                  <motion.div 
                    className={styles.aboutText} 
                    data-aos="fade-left"
                    style={{
                      opacity: textOpacity,
                      y: textTranslateY
                    }}
                  >
                    <motion.h3
                      initial={{ opacity: 0, y: 50 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.2 }}
                    >
                      Building Your Dreams Since 2008
                    </motion.h3>
                    <motion.p
                      initial={{ opacity: 0, y: 50 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.3 }}
                    >
                      Thanvi Build Tech and Ventures is a renowned name in the real estate industry. 
                      With years of experience and expertise, we have established ourselves as one of 
                      the leading builders in the market.
                    </motion.p>
                    <motion.p
                      initial={{ opacity: 0, y: 50 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.4 }}
                    >
                      Our commitment to delivering high-quality projects and customer satisfaction 
                      sets us apart from the competition. We believe in creating spaces that not only 
                      meet but exceed our clients' expectations.
                    </motion.p>
                    <div className={styles.aboutFeatures}>
                      {ABOUT_FEATURES.map((feature, index) => (
                        <motion.div 
                          key={feature.text} 
                          className={styles.featureItem}
                          data-aos="fade-up"
                          data-aos-delay={100 * (index + 1)}
                          whileHover={{ scale: 1.05 }}
                          transition={{ duration: 0.2 }}
                          initial={{ opacity: 0, y: 50 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ 
                            duration: 0.5, 
                            delay: 0.5 + (index * 0.1) 
                          }}
                        >
                          <span className={styles.featureNumber}>{feature.number}</span>
                          <span className={styles.featureText}>{feature.text}</span>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                </Parallax>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className={`${styles.section} ${styles.sectionLight}`}>
          <div className={styles.container}>
            <Parallax translateY={[-15, 15]}>
              <SectionTitle 
                title="Our Services"
                subtitle="Comprehensive construction and development solutions"
              />
            </Parallax>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <Services />
            </motion.div>
          </div>
        </section>

        {/* Project Stats Section */}
        <Parallax translateY={[-10, 10]}>
          <ProjectStats />
        </Parallax>
        <Parallax translateY={[-15, 15]}>
          <CompanyGrowth />
        </Parallax>
        <Parallax translateY={[-20, 20]}>
          <CurrentProjects />
        </Parallax>
      </motion.div>
    </ParallaxProvider>
  );
};

export default Home;