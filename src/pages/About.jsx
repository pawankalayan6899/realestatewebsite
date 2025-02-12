import React, { useEffect } from 'react';
import styles from './About.module.css';
import aboutImage from '../assets/images/about-us.png';

const About = () => {
  useEffect(() => {
    // Trigger AOS animations on mount
    if (window.AOS) {
      window.AOS.refresh();
    }
  }, []);

  return (
    <div className={styles.aboutContainer}>
      <div className="container">
        <div className={styles.aboutContent}>
          <div 
            className={styles.imageContainer}
            data-aos="fade-right"
            data-aos-duration="1000"
          >
            <img 
              src={aboutImage} 
              alt="Thanvi Build Tech and Ventures" 
              className={styles.aboutImage}
            />
          </div>

          <div className={styles.textContent}>
            <h1 
              className={styles.sectionTitle}
              data-aos="fade-up"
              data-aos-duration="800"
            >
              Building Dreams Into Reality
            </h1>

            <p 
              className={styles.paragraph}
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <span className={styles.highlight}>Thanvi Build Tech and Ventures</span> is a renowned name in the real estate industry. With years of experience and expertise, we have established ourselves as one of the leading builders in the market. Our commitment to delivering high-quality projects and customer satisfaction sets us apart from the competition.
            </p>

            <p 
              className={styles.paragraph}
              data-aos="fade-up"
              data-aos-delay="200"
            >
              We specialize in residential and commercial properties, offering a wide range of options to cater to the diverse needs of our clients. At Thanvi Build Tech and Ventures, we understand the importance of providing exceptional real estate solutions. Whether you are looking for a dream home or an office space, our team of professionals is dedicated to making your vision a reality.
            </p>

            <p 
              className={styles.paragraph}
              data-aos="fade-up"
              data-aos-delay="300"
            >
              We believe in transparency and integrity, ensuring that every project is executed with the utmost professionalism and attention to detail. As builders, we take pride in our ability to create spaces that are not only aesthetically pleasing but also functional and sustainable.
            </p>

            <p 
              className={styles.paragraph}
              data-aos="fade-up"
              data-aos-delay="400"
            >
              Our projects are designed to meet the highest standards of quality and craftsmanship, incorporating innovative technologies and eco-friendly practices. We strive to strike a balance between modern design and traditional values, creating spaces that stand the test of time.
            </p>
          </div>
        </div>

        <div className={styles.stats}>
          <div 
            className={styles.statItem} 
            data-aos="fade-up" 
            data-aos-delay="100"
          >
            <div className={styles.statNumber}>15+</div>
            <div className={styles.statLabel}>Years of Experience</div>
          </div>
          <div 
            className={styles.statItem} 
            data-aos="fade-up" 
            data-aos-delay="200"
          >
            <div className={styles.statNumber}>100+</div>
            <div className={styles.statLabel}>Projects Completed</div>
          </div>
          <div 
            className={styles.statItem} 
            data-aos="fade-up" 
            data-aos-delay="300"
          >
            <div className={styles.statNumber}>500+</div>
            <div className={styles.statLabel}>Happy Clients</div>
          </div>
          <div 
            className={styles.statItem} 
            data-aos="fade-up" 
            data-aos-delay="400"
          >
            <div className={styles.statNumber}>50+</div>
            <div className={styles.statLabel}>Active Projects</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;