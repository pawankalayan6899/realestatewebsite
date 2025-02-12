import React, { useRef } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
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

const aboutSectionVariants = {
  hidden: { 
    opacity: 0,
    scale: 0.9,
    y: 50
  },
  visible: { 
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2
    }
  }
};

const featureVariants = {
  hidden: { 
    opacity: 0, 
    x: -50,
    rotate: -10
  },
  visible: { 
    opacity: 1, 
    x: 0,
    rotate: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 10
    }
  }
};

const imageVariants = {
  hidden: { 
    opacity: 0, 
    scale: 0.8,
    rotateY: 20,
    z: -100
  },
  visible: { 
    opacity: 1, 
    scale: 1,
    rotateY: 0,
    z: 0,
    transition: {
      type: "spring",
      stiffness: 120,
      damping: 15
    }
  },
  hover: {
    scale: 1.05,
    rotateY: 0,
    z: 50,
    transition: { 
      duration: 0.3,
      type: "spring",
      stiffness: 300
    }
  }
};

const Home = ({ showToast }) => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const imagesX = useTransform(
    scrollYProgress, 
    [0, 0.5, 1], 
    ['-100%', '0%', '100%']
  );
  
  const textX = useTransform(
    scrollYProgress, 
    [0, 0.5, 1], 
    ['100%', '0%', '-100%']
  );

  const parallaxScale = useTransform(scrollYProgress, [0, 0.5], [0.9, 1]);
  const parallaxRotate = useTransform(scrollYProgress, [0, 0.5], [-5, 0]);

  return (
    <ParallaxProvider>
      <motion.div 
        className={styles.home}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        <HeroSlider />

        {/* About Us Section */}
        <motion.section 
          ref={sectionRef}
          className={styles.aboutSection}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={aboutSectionVariants}
        >
          <div className={styles.container}>
            <Parallax translateY={[-20, 20]}>
              <SectionTitle 
                title="About Us"
                subtitle="Building excellence through innovation and dedication"
              />
            </Parallax>
            
            <div className={styles.aboutContent}>
              <div className={styles.aboutGrid}>
                <motion.div 
                  className={styles.aboutImages}
                  style={{
                    x: imagesX,
                    scale: parallaxScale,
                    rotate: parallaxRotate
                  }}
                >
                  {[aboutImage1, aboutImage2].map((image, index) => (
                    <motion.div 
                      key={index}
                      className={styles.imageWrapper}
                      variants={imageVariants}
                      whileHover="hover"
                    >
                      <motion.img 
                        src={image} 
                        alt={`About us image ${index + 1}`}
                        className={styles.aboutImage}
                        variants={imageVariants}
                      />
                    </motion.div>
                  ))}
                </motion.div>
                
                <motion.div 
                  className={styles.aboutText}
                  style={{
                    x: textX,
                    scale: parallaxScale
                  }}
                >
                  <motion.h3
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ 
                      opacity: 1, 
                      x: 0,
                      transition: {
                        type: "spring",
                        stiffness: 120,
                        damping: 10
                      }
                    }}
                  >
                    Building Your Dreams Since 2008
                  </motion.h3>
                  
                  <motion.p
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ 
                      opacity: 1, 
                      x: 0,
                      transition: {
                        delay: 0.2,
                        type: "spring",
                        stiffness: 100,
                        damping: 10
                      }
                    }}
                  >
                    Thanvi Build Tech and Ventures is a renowned name in the real estate industry. 
                    With years of experience and expertise, we have established ourselves as one of 
                    the leading builders in the market.
                  </motion.p>
                  
                  <motion.p
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ 
                      opacity: 1, 
                      x: 0,
                      transition: {
                        delay: 0.4,
                        type: "spring",
                        stiffness: 100,
                        damping: 10
                      }
                    }}
                  >
                    Our commitment to delivering high-quality projects and customer satisfaction 
                    sets us apart from the competition. We believe in creating spaces that not only 
                    meet but exceed our clients' expectations.
                  </motion.p>
                  
                  <motion.div 
                    className={styles.aboutFeatures}
                    variants={aboutSectionVariants}
                  >
                    {ABOUT_FEATURES.map((feature, index) => (
                      <motion.div 
                        key={feature.text} 
                        className={styles.featureItem}
                        variants={featureVariants}
                        whileHover={{ 
                          scale: 1.05,
                          transition: { duration: 0.2 }
                        }}
                      >
                        <motion.span 
                          className={styles.featureNumber}
                          initial={{ opacity: 0, scale: 0.5 }}
                          whileInView={{ 
                            opacity: 1, 
                            scale: 1,
                            transition: {
                              type: "spring",
                              stiffness: 300,
                              damping: 10
                            }
                          }}
                        >
                          {feature.number}
                        </motion.span>
                        <span className={styles.featureText}>{feature.text}</span>
                      </motion.div>
                    ))}
                  </motion.div>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Services Section */}
        <section className={`${styles.servicesSection} ${styles.sectionLight}`}>
          <div className={styles.container}>
            <Parallax translateY={[-15, 15]}>
              <SectionTitle 
                title="Our Services"
                subtitle="Comprehensive construction and development solutions"
              />
            </Parallax>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
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

        {/* Company Growth Section */}
        <Parallax translateY={[-15, 15]}>
          <CompanyGrowth />
        </Parallax>

        {/* Current Projects Section */}
        <Parallax translateY={[-20, 20]}>
          <CurrentProjects />
        </Parallax>
      </motion.div>
    </ParallaxProvider>
  );
};

export default Home;